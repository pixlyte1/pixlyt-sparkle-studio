import { useState, useEffect, FormEvent } from "react";
import { Send, MapPin, Mail, Phone, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "Vellore, Tamil Nadu, India" },
  { icon: Mail, label: "Email Us", value: "md@pixlyt.in" },
  { icon: Phone, label: "Call Us", value: "+91 8618826965" },
];

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

type Status = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [siteKey, setSiteKey] = useState<string>("");

  // Fetch reCAPTCHA site key + load script
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase.functions.invoke("recaptcha-config");
        if (cancelled) return;
        const key = (data as { siteKey?: string } | null)?.siteKey;
        if (!key) return;
        setSiteKey(key);
        if (!document.querySelector(`script[data-recaptcha="true"]`)) {
          const script = document.createElement("script");
          script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
          script.async = true;
          script.defer = true;
          script.dataset.recaptcha = "true";
          document.head.appendChild(script);
        }
      } catch (e) {
        console.error("Failed to load reCAPTCHA config", e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setStatus("submitting");

    try {
      if (!siteKey || !window.grecaptcha) {
        throw new Error("reCAPTCHA not loaded yet. Please wait a moment and try again.");
      }

      const token: string = await new Promise((resolve, reject) => {
        window.grecaptcha!.ready(async () => {
          try {
            const t = await window.grecaptcha!.execute(siteKey, { action: "contact_submit" });
            resolve(t);
          } catch (err) {
            reject(err);
          }
        });
      });

      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: { ...form, recaptchaToken: token },
      });

      if (error) throw new Error(error.message || "Submission failed");
      if (!(data as { success?: boolean })?.success) {
        throw new Error((data as { error?: string })?.error || "Submission failed");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-[80px] animate-blob-delayed pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-5">
            Contact
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your brand? We'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimatedSection direction="left" className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-2xl glass-card border-glow hover:shadow-card-hover transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                  <info.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{info.label}</p>
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3" delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5 glass-card p-8 rounded-2xl border-glow">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
              </div>
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                required
                maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
              />

              {/* reCAPTCHA notice (v3 is invisible) */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>
                  Protected by Google reCAPTCHA —{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Privacy</a>
                  {" · "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Terms</a>
                </span>
              </div>

              {status === "error" && errorMsg && (
                <div className="px-4 py-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  {errorMsg}
                </div>
              )}
              {status === "success" && (
                <div className="px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm">
                  Message sent successfully — we'll be in touch shortly.
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                disabled={status === "submitting" || status === "success"}
                className={`w-full gradient-primary text-primary-foreground py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg transition-all duration-300 btn-3d shimmer-effect disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "submitting" ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : status === "success" ? (
                  "Message Sent ✓"
                ) : (
                  <>Send Message <Send size={18} /></>
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
