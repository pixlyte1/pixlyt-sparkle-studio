import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechnologiesContent from "@/components/TechnologiesContent";

const Technologies = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar forceSolid />
    <TechnologiesContent />

    <Contact initialMessage="I'm interested in your technology services." />
    <Footer />
  </div>
);

export default Technologies;
