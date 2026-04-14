import { Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/pixlyt-logo.png";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="PIXLYT" className="h-8 w-auto brightness-0 invert" />
          <span className="text-primary-foreground/80 text-sm font-medium">Digital Solutions Pvt Ltd</span>
        </div>

        <div className="flex items-center gap-5">
          {[Youtube, Instagram, Facebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="text-primary-foreground/40 text-sm">
          © 2026 PIXLYT Digital Solutions Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
