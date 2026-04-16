import { Youtube, Instagram, Facebook, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/pixlyt-logo.png";
import { openExternalLink } from "@/lib/openExternalLink";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="relative bg-foreground overflow-hidden">
    {/* Gradient top border */}
    <div className="h-1 gradient-primary" />

    {/* Subtle glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-[80px] pointer-events-none" />

    <div className="container mx-auto px-4 py-16 relative">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="PIXLYT" className="h-10 w-auto brightness-0 invert mb-4" />
          <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
            AI-driven IT and Media company empowering brands through smart technology and storytelling.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-primary-foreground font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-primary-foreground/40 hover:text-primary transition-colors text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-primary-foreground font-heading font-semibold mb-4">Follow Us</h4>
          <div className="flex items-center gap-3">
            {[
              { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@TamilThulinews" },
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/tamilthulinews/" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/tamilthulinews/" },
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
                className="w-10 h-10 rounded-xl bg-primary-foreground/5 hover:gradient-primary flex items-center justify-center text-primary-foreground/40 hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/30 text-sm">
          © 2026 PIXLYT Digital Solutions Pvt Ltd. All rights reserved.
        </p>
        <motion.a
          href="#home"
          whileHover={{ y: -3 }}
          className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/30 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
        >
          <ArrowUp size={18} />
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
