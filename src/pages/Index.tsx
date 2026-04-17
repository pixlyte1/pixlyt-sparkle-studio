import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Products from "@/components/Products";
import Media from "@/components/Media";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <Hero />
    <StatsBar />
    <About />
    <Services />
    <Projects />
    <Products />
    <Media />
    <SocialMedia />
    <Contact />
    <Footer />
  </div>
);

export default Index;
