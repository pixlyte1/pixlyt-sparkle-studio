import { Youtube, Instagram, Facebook, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/pixlyt-logo.png";
import { openExternalLink } from "@/lib/openExternalLink";

const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-foreground">
    <div className="h-1 gradient-primary" />
    <div className="absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 bg-primary/10 blur-[80px] pointer-events-none" />

    <div className="container relative mx-auto px-4 py-16">
      <div className="mb-12 grid gap-12 md:grid-cols-3">
        <div>
          <img src={logo} alt="PIXLYT" className="mb-4 h-10 w-auto brightness-0 invert" />
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/50">
            AI-driven IT and Media company empowering brands through smart technology and storytelling.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-heading font-semibold text-primary-foreground">Quick Links</h4>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-foreground/40 transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading font-semibold text-primary-foreground">Follow Us</h4>
          <div className="flex items-center gap-3">
            {[
              { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
              { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
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
                whileHover={{ scale: 1.15, y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/5 text-primary-foreground/40 transition-all duration-300 hover:text-primary-foreground hover:shadow-glow"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
        <p className="text-sm text-primary-foreground/30">
          &copy; 2026 PIXLYT Digital Solutions Pvt Ltd. All rights reserved.
        </p>
        <motion.a
          href="/#home"
          whileHover={{ y: -3 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/30 transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-glow"
        >
          <ArrowUp size={18} />
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
