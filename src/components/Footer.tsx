import { Youtube, Instagram, Facebook, ArrowUp, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/pixlyt-logo.png";
import { openExternalLink } from "@/lib/openExternalLink";

const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technologies", href: "/technologies" },
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-foreground">
    <div className="h-1 gradient-primary" />
    <div className="absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 bg-primary/10 blur-[80px] pointer-events-none" />

    <div className="container relative mx-auto px-4 py-16">
      <div className="mb-12 grid gap-12 lg:grid-cols-3">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <img src={logo} alt="PIXLYT" className="h-10 w-auto object-contain self-start brightness-0 invert" />
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            AI-driven IT and Media company empowering brands through smart technology and storytelling.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${s.label} in a new tab`}
                onClick={(event) => {
                  event.preventDefault();
                  openExternalLink(s.href);
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/60 transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-glow"
              >
                <s.icon size={18} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/40">Quick Links</h4>
          <ul className="space-y-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/40">Get In Touch</h4>
          
          <div className="mb-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.02] p-4">
            <div className="flex items-center gap-4 py-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 text-primary">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/40">Email</p>
                <a href="mailto:hello@pixlyt.com" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary">
                  hello@pixlyt.com
                </a>
              </div>
            </div>
            
            <div className="my-2 h-px w-full bg-primary-foreground/5" />
            
            <div className="flex items-center gap-4 py-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 text-primary">
                <Phone size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/40">Phone</p>
                <a href="tel:+918618826965" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary">
                  +91 86188 26965
                </a>
              </div>
            </div>

            <div className="my-2 h-px w-full bg-primary-foreground/5" />
            
            <div className="flex items-center gap-4 py-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 text-primary">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/40">Location</p>
                <p className="text-sm font-medium text-primary-foreground/80">Vellore, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <a 
            href="/#contact" 
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:border-primary/30 hover:bg-primary/10"
          >
            Let's Build Together 
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
        <p className="text-sm text-primary-foreground/40">
          &copy; 2026 PIXLYT Digital Solutions Pvt Ltd. All rights reserved.
        </p>
        <motion.a
          href="/#home"
          whileHover={{ y: -3 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/40 transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-glow"
        >
          <ArrowUp size={18} />
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
