import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AppSection from "./components/AppSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Router check and hash scroll handling on mount
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          setActiveSection(targetId);
        }
      }, 500);
    }
  }, []);

  // Scroll spy to highlight current active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "app", "contact"];
      const scrollPosition = window.scrollY + 160; // offset of navbar + trigger margin

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-100 bg-black selection:bg-brand-primary selection:text-black">
      {/* Sticky, Semi-Transparent Navbar */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={handleScrollToSection}
      />

      <main className="flex-grow">
        {/* Animated Hero Banner */}
        <HeroSection onExploreApp={() => handleScrollToSection("app")} />

        {/* Benefits & Problem-Solving About Section */}
        <AboutSection />

        {/* Dynamic App Mockup Showcase & Interactive Customizer */}
        <AppSection />

        {/* Integrated Contact Form */}
        <ContactSection />
      </main>

      {/* Powered by nubitsoft footer */}
      <Footer />
    </div>
  );
}
