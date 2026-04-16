import { useState, FormEvent } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "Chennai, Tamil Nadu, India" },
  { icon: Mail, label: "Email Us", value: "hello@pixlyt.com" },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
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
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                />
              </div>
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full gradient-primary text-primary-foreground py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg transition-all duration-300 btn-3d shimmer-effect ${submitted ? 'opacity-80' : ''}`}
                disabled={submitted}
              >
                {submitted ? (
                  "Message Sent! ✓"
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
