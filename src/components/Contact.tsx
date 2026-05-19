import { useEffect, useRef, useState, FormEvent } from "react";
import { Send, MapPin, Mail, Phone, Loader2, ShieldAlert, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { supabase } from "@/integrations/supabase/client";

const supportCards = [
  {
    icon: Phone,
    title: "Phone & Email",
    body: "Prefer to call or email? Contact our team directly.",
    lines: ["+91 8618826965", "pixlyt.e1@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    body: "Connect with us from Bangalore & Vellore, India.",
    lines: ["Bangalore, Karnataka, India", "Vellore, Tamil Nadu, India"],
  },
  {
    icon: Mail,
    title: "Business Support",
    body: "Share your project details and our team will guide the right next step.",
    lines: ["Website, app, AI, data, cloud, or support"],
  },
];

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim() ?? "";
const isRecaptchaPlaceholder = !recaptchaSiteKey || recaptchaSiteKey === "PASTE_SITE_KEY_HERE";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      render: (
        container: HTMLElement,
        params: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

type Status = "idle" | "submitting" | "success" | "error";

interface ContactProps {
  initialMessage?: string;
}

const inputClass =
  "flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50";

const getFunctionErrorMessage = async (error: unknown) => {
  const response = (error as { context?: Response } | null)?.context;

  if (response) {
    try {
      const payload = (await response.clone().json()) as {
        error?: string;
        code?: string;
        errorCodes?: string[];
        score?: number;
      };

      if (payload.error) {
        const details = [
          payload.code ? `code: ${payload.code}` : "",
          payload.errorCodes?.length ? `reCAPTCHA: ${payload.errorCodes.join(", ")}` : "",
          typeof payload.score === "number" ? `score: ${payload.score}` : "",
        ].filter(Boolean);

        return details.length ? `${payload.error} (${details.join("; ")})` : payload.error;
      }
    } catch {
      try {
        const text = await response.clone().text();
        if (text) return text;
      } catch {
        // Fall back to the default error below.
      }
    }
  }

  return error instanceof Error ? error.message : "Submission failed";
};

const Contact = ({ initialMessage = "" }: ContactProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: initialMessage,
  });
  const [consent, setConsent] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [consentError, setConsentError] = useState("");
  const recaptchaRef = useRef<HTMLDivElement | null>(null);
  const consentRef = useRef<HTMLInputElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);
  const lastInitialMessageRef = useRef(initialMessage);

  useEffect(() => {
    if (initialMessage === lastInitialMessageRef.current) return;

    setForm((currentForm) => ({
      ...currentForm,
      message:
        !currentForm.message || currentForm.message === lastInitialMessageRef.current
          ? initialMessage
          : currentForm.message,
    }));
    lastInitialMessageRef.current = initialMessage;
  }, [initialMessage]);

  useEffect(() => {
    if (isRecaptchaPlaceholder) return;

    const renderRecaptcha = () => {
      if (!recaptchaRef.current || !window.grecaptcha || widgetIdRef.current !== null) return;

      widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: recaptchaSiteKey,
        callback: (token: string) => setRecaptchaToken(token),
        "expired-callback": () => setRecaptchaToken(""),
        "error-callback": () => setRecaptchaToken(""),
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-recaptcha="true"]');

    if (window.grecaptcha) {
      window.grecaptcha.ready(renderRecaptcha);
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", () => window.grecaptcha?.ready(renderRecaptcha), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.recaptcha = "true";
    script.addEventListener("load", () => window.grecaptcha?.ready(renderRecaptcha), { once: true });
    document.head.appendChild(script);
  }, []);

  const resetRecaptcha = () => {
    setRecaptchaToken("");
    if (widgetIdRef.current !== null) {
      window.grecaptcha?.reset(widgetIdRef.current);
    }
  };

  const isSubmitDisabled = status === "submitting" || status === "success";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setStatus("submitting");

    try {
      if (!consent) {
        setConsentError("Please click this checkbox before submitting.");
        consentRef.current?.focus();
        throw new Error("Please click the consent checkbox before submitting.");
      }

      setConsentError("");

      if (isRecaptchaPlaceholder) {
        throw new Error("Please add your real VITE_RECAPTCHA_SITE_KEY in the .env file.");
      }

      if (!recaptchaToken) {
        throw new Error("Please complete the reCAPTCHA verification.");
      }

      const messageDetails = form.message.trim() || "No message provided.";

      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: {
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          mobile: form.phone,
          message: messageDetails,
          recaptchaToken,
        },
      });

      if (error) throw new Error(await getFunctionErrorMessage(error));
      if (!(data as { success?: boolean })?.success) {
        throw new Error((data as { error?: string })?.error || "Submission failed");
      }

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setConsent(false);
      resetRecaptcha();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
      resetRecaptcha();
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background pt-10 pb-16">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-accent/5 blur-[80px] animate-blob-delayed pointer-events-none" />

      <div className="container relative mx-auto px-3 sm:px-4">
        <AnimatedSection className="mx-auto mb-20 max-w-5xl text-center">
          <span className="mb-5 inline-block rounded-full bg-[#0EA5E9] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </span>
          <h2 className="mb-6 font-heading text-4xl font-extrabold leading-[1.2] text-foreground sm:text-5xl lg:text-6xl">
            <span className="inline-block">Let's Build Something <span className="text-[#0EA5E9]">Amazing</span></span>
            <span className="block text-[#0EA5E9] mt-1 sm:mt-2">Together</span>
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Ready to transform your brand? We'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <AnimatedSection direction="up" className="relative min-w-0" delay={0.15}>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                className="fixed left-4 right-4 top-20 z-[60] flex items-center gap-3 rounded-xl border border-green-200 bg-white px-4 py-3 text-left shadow-lg shadow-green-950/10 sm:left-auto sm:right-6 sm:w-[360px]"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={18} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-950">Message sent successfully</span>
                  <span className="block text-xs leading-5 text-slate-600">We'll be in touch shortly.</span>
                </span>
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="w-full min-w-0 space-y-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground">First Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground">Last Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground">Email *</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    maxLength={30}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none text-foreground">Message</label>
                <textarea
                  rows={5}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} min-h-[120px] resize-y py-3`}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                <div>
                  <label className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4 text-sm leading-6 text-muted-foreground">
                    <input
                      ref={consentRef}
                      type="checkbox"
                      checked={consent}
                      aria-invalid={Boolean(consentError)}
                      aria-describedby={consentError ? "contact-consent-error" : undefined}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (e.target.checked) setConsentError("");
                      }}
                      className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span>
                      By checking this box, you consent to receive communications from us. You may unsubscribe at any time.
                    </span>
                  </label>
                  {consentError && (
                    <div id="contact-consent-error" className="mt-3 rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {consentError}
                    </div>
                  )}
                </div>

                <div className="overflow-hidden rounded-xl border border-primary/10 bg-primary/5 p-2 min-[380px]:p-3 sm:p-4">
                  {isRecaptchaPlaceholder ? (
                    <div className="flex items-start gap-3 text-xs leading-5 text-destructive">
                      <ShieldAlert size={17} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">reCAPTCHA is not active yet.</p>
                        <p className="mt-1 text-destructive/80">
                          Replace PASTE_SITE_KEY_HERE in .env with your real Google reCAPTCHA v2 checkbox site key, then restart npm run dev.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="origin-left scale-[0.84] min-[360px]:scale-90 min-[390px]:scale-100">
                      <div ref={recaptchaRef} className="min-h-[78px] min-w-[304px]" />
                    </div>
                  )}
                </div>
              </div>

              <p className="px-1 text-xs leading-6 text-muted-foreground">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                  Terms of Service
                </a>{" "}
                apply.
              </p>

              {status === "error" && errorMsg && (
                <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {errorMsg}
                </div>
              )}
              <motion.button
                type="submit"
                whileHover={{ scale: status === "submitting" ? 1 : 1.01 }}
                whileTap={{ scale: status === "submitting" ? 1 : 0.99 }}
                disabled={isSubmitDisabled}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto w-full"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : status === "success" ? (
                  "Message Sent"
                ) : (
                  <>
                    Submit Request
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>

          <AnimatedSection direction="right" className="flex min-w-0 flex-col gap-5">
            {supportCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex flex-col sm:flex-row gap-4 rounded-xl border border-border bg-card/30 p-6 transition-all hover:bg-card/60 hover:shadow-sm"
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <card.icon size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mb-3 text-sm leading-6 text-muted-foreground">{card.body}</p>
                  <div className="space-y-1">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm font-medium text-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
