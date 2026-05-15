import { useEffect, useRef, useState, FormEvent } from "react";
import { Send, MapPin, Mail, Phone, Loader2, ShieldAlert, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "Vellore, Tamil Nadu, India" },
  { icon: Mail, label: "Email Us", value: "pixlyt.e1@gmail.com" },
  { icon: Phone, label: "Call Us", value: "+91 8618826965" },
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
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: initialMessage });
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

      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: { ...form, recaptchaToken },
      });

      if (error) throw new Error(await getFunctionErrorMessage(error));
      if (!(data as { success?: boolean })?.success) {
        throw new Error((data as { error?: string })?.error || "Submission failed");
      }

      setStatus("success");
      setForm({ name: "", email: "", mobile: "", message: "" });
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
    <section id="contact" className="relative overflow-hidden bg-background py-28">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-accent/5 blur-[80px] animate-blob-delayed pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <AnimatedSection className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full gradient-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            Contact
          </span>
          <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your brand? We'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <AnimatedSection direction="left" className="flex flex-col gap-6 lg:col-span-2">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 rounded-2xl glass-card border-glow p-5 transition-all duration-500 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-primary shadow-glow">
                  <info.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">{info.label}</p>
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative lg:col-span-3" delay={0.15}>
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
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl glass-card border-glow p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/80 px-5 py-3.5 text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/80 px-5 py-3.5 text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="tel"
                  placeholder="Mobile No (Optional)"
                  maxLength={30}
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/80 px-5 py-3.5 text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 sm:col-span-2"
                />
              </div>
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                required
                maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-background/80 px-5 py-3.5 text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />

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
                <div id="contact-consent-error" className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {consentError}
                </div>
              )}

              <div className="rounded-xl border border-primary/10 bg-primary/5 p-4">
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
                  <div ref={recaptchaRef} className="min-h-[78px]" />
                )}
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
                whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                disabled={isSubmitDisabled}
                className="flex w-full items-center justify-center gap-2 rounded-xl gradient-primary py-4 text-base font-semibold text-primary-foreground shadow-glow shimmer-effect transition-all duration-300 hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : status === "success" ? (
                  "Message Sent"
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
