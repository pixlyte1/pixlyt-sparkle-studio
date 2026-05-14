import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/pixlyt-logo.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

interface NavbarProps {
  forceSolid?: boolean;
}

const Navbar = ({ forceSolid = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSolid = forceSolid || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? "glass-premium shadow-navbar py-3 border-b border-border/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="PIXLYT Logo"
            className={`h-9 w-auto transition-all duration-300 ${!isSolid ? "brightness-0 invert" : ""}`}
          />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 underline-hover ${
                  isSolid ? "text-foreground/70 hover:text-primary" : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden md:inline-flex gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-glow btn-3d animate-glow-pulse"
        >
          Get in Touch
        </a>

        <button
          className={`md:hidden ${isSolid ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-premium border-t border-border/30 overflow-hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 px-4 rounded-xl text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block gradient-primary text-primary-foreground text-center px-5 py-3 rounded-xl text-sm font-semibold shadow-glow"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
