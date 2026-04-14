import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-5">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your brand? Let's talk.
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-lg mx-auto" delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
