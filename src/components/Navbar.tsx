import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, QrCode, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onNavigateToDownload?: () => void;
  isDownloadPage?: boolean;
}

export default function Navbar({
  activeSection,
  setActiveSection,
  onNavigateToDownload,
  isDownloadPage = false,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Contact Us", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (isDownloadPage) {
      window.location.href = `/#${id}`;
      return;
    }
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-brand-primary/20 py-3"
          : "bg-transparent backdrop-blur-sm py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary p-[1px] shadow-[0_0_15px_rgba(254,188,30,0.2)] group-hover:shadow-[0_0_20px_rgba(254,188,30,0.4)] transition-all">
              <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center overflow-hidden">
                <img
                  src="./assets/logo/icon.png"
                  alt="NubitSoft Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-brand-primary group-hover:text-brand-primary transition-colors">
                Nu
                <span className="bg-gradient-to-r text-white to-brand-secondary bg-clip-text text-transparent">
                  Intro
                </span>
                <span className="bg-gradient-to-r text-brand-secondary ">
                  X
                </span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white uppercase">
                nubitsoft.
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-medium text-sm tracking-wide transition-all duration-300 py-1.5 cursor-pointer ${
                  activeSection === item.id && !isDownloadPage
                    ? "text-brand-primary"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && !isDownloadPage && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onNavigateToDownload || (() => handleNavClick("app"))}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-gradient-to-br from-brand-primary to-brand-secondary hover:shadow-[0_4px_25px_rgba(254,188,30,0.4)] focus:ring-2 focus:outline-none focus:ring-brand-primary/50 transition-all duration-300 mt-2"
            >
              <span className="relative px-4 py-2 transition-all duration-300 ease-out bg-zinc-950 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                <QrCode className="w-4 h-4 text-white transition-all duration-300 group-hover:text-brand-primary group-hover:rotate-12 group-hover:scale-110" />
                <span className="transition-all duration-300 text-white group-hover:text-brand-primary ">
                  Get App QR
                </span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 transition-all duration-300 group-hover:text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-b border-zinc-900 bg-zinc-950/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    activeSection === item.id && !isDownloadPage
                      ? "bg-zinc-900 text-brand-primary border-l-2 border-brand-primary pl-3"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onNavigateToDownload) {
                      onNavigateToDownload();
                    } else {
                      handleNavClick("app");
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-black font-semibold rounded-xl shadow-lg hover:shadow-brand-primary/20 transition-all active:scale-[0.98]"
                >
                  <QrCode className="w-5 h-5" />
                  <span>Scan QR to Get App</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
