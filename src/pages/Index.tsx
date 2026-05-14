import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Products from "@/components/Products";
import Performance from "@/components/Performance";
import Media from "@/components/Media";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Solutions />
      <Technologies />
      <Projects />
      <Products />
      <Performance />
      <Media />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
