import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const BodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
  recaptchaToken: z.string().min(10).max(4000),
});

type RecaptchaVerifyResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const sendContactEmail = async (submission: { name: string; email: string; message: string }) => {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const toEmail = Deno.env.get("CONTACT_TO_EMAIL");
  const fromEmail = Deno.env.get("CONTACT_FROM_EMAIL") ?? "Pixlyt Contact <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return {
      ok: false,
      status: 500,
      error: "Server missing email configuration",
    };
  }

  const escapedName = escapeHtml(submission.name);
  const escapedEmail = escapeHtml(submission.email);
  const escapedMessage = escapeHtml(submission.message).replaceAll("\n", "<br />");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: submission.email,
      subject: `New contact form message from ${submission.name}`,
      html: `
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
      `,
      text: [
        "New contact form message",
        "",
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        "",
        submission.message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    const details = await res.text();
    console.error("Email send error:", details);
    return {
      ok: false,
      status: res.status,
      error: "Failed to send email notification",
    };
  }

  return { ok: true };
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const json = await req.json();
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input", details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const { name, email, message, recaptchaToken } = parsed.data;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      null;
    const userAgent = req.headers.get("user-agent") || null;

    const secret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!secret) {
      return new Response(
        JSON.stringify({ error: "Server missing RECAPTCHA_SECRET_KEY" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Supports reCAPTCHA v2 checkbox tokens and v3 score tokens.
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: recaptchaToken,
        ...(ip ? { remoteip: ip } : {}),
      }),
    });
    if (!verifyRes.ok) {
      return new Response(
        JSON.stringify({ error: "Unable to verify reCAPTCHA. Please try again." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const verifyData = (await verifyRes.json()) as RecaptchaVerifyResponse;
    const errorCodes = verifyData["error-codes"] ?? [];

    console.log("reCAPTCHA verify response:", JSON.stringify(verifyData));

    if (!verifyData.success) {
      return new Response(
        JSON.stringify({
          error: "reCAPTCHA verification failed. Please try again.",
          errorCodes,
        }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (typeof verifyData.score === "number" && verifyData.score < 0.3) {
      return new Response(
        JSON.stringify({
          error: "reCAPTCHA score was too low. Please try again.",
          score: verifyData.score,
        }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(
        JSON.stringify({ error: "Server missing Supabase service secrets" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      message,
      recaptcha_score: verifyData.score ?? null,
      ip_address: ip,
      user_agent: userAgent,
    });

    if (error) {
      console.error("Insert error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save submission", code: error.code }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const emailResult = await sendContactEmail({ name, email, message });
    if (!emailResult.ok) {
      return new Response(
        JSON.stringify({ error: emailResult.error }),
        { status: emailResult.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("submit-contact error:", err);
    return new Response(
      JSON.stringify({ error: "Unexpected server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
