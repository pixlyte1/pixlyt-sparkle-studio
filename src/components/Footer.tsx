import { Youtube, Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
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
    
    {/* Ambient Glows */}
    <div className="absolute left-1/4 top-0 h-40 w-96 -translate-y-1/2 bg-primary/10 blur-[100px] pointer-events-none" />
    <div className="absolute right-1/4 bottom-0 h-40 w-96 translate-y-1/2 bg-secondary/10 blur-[120px] pointer-events-none" />

    <div className="container relative mx-auto px-4 py-12">
      <div className="mb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Column 1 - Brand Info */}
        <div className="flex flex-col gap-6">
          <div className="relative group self-start">
            <img 
              src={logo} 
              alt="PIXLYT" 
              style={{ height: "130px", marginTop: "-35px", marginBottom: "-40px", marginLeft: "-13px" }}
              className="w-auto object-contain brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0" 
            />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            AI-driven IT and Media company empowering brands through smart technology and storytelling.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
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
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-glow"
              >
                <s.icon size={18} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="flex flex-col">
          <div className="relative mb-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/40">Quick Links</h4>
            <div className="absolute -bottom-2 left-0 h-0.5 w-8 gradient-primary rounded-full" />
          </div>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-4 pt-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="group flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-all duration-300 hover:text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="flex flex-col md:col-span-2 lg:col-span-1">
          <div className="relative mb-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/40">Get In Touch</h4>
            <div className="absolute -bottom-2 left-0 h-0.5 w-8 gradient-primary rounded-full" />
          </div>
          
          <div className="mt-2 mb-5 rounded-2xl border border-primary-foreground/10 bg-gradient-to-br from-primary-foreground/[0.03] to-primary-foreground/[0.01] p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:shadow-glow-subtle">
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
              <div className="flex items-center gap-4 py-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 text-primary">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/40">Email</p>
                  <a href="mailto:hello@pixlyt.com" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary">
                    hello@pixlyt.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 py-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 text-primary">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/40">Phone</p>
                  <a href="tel:+918618826965" className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary">
                    +91 86188 26965
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 py-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 text-primary">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/40">Location</p>
                  <p className="text-sm font-medium text-primary-foreground/80">Bangalore, Karnataka, India</p>
                  <p className="text-sm font-medium text-primary-foreground/80">Vellore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="/#contact" 
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-primary/20 bg-primary/10 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
          >
            Let's Build Together 
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row">
        <p className="text-sm text-primary-foreground/40">
          &copy; 2026 PIXLYT Digital Solutions Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-primary-foreground/40">
          <a href="/#privacy" className="transition-colors hover:text-primary">Privacy Policy</a>
          <a href="/#terms" className="transition-colors hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;