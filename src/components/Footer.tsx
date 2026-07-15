import { motion } from "motion/react";
import { ArrowUp, Mail, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-zinc-900/80 py-16 relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top footer deck */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary p-[1px]">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-black text-brand-primary text-sm">
                    NX
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-brand-primary">
                Nu
                <span className="bg-gradient-to-r from-white to-brand-secondary bg-clip-text text-transparent">
                  IntroX
                </span>
              </span>
            </div>
            <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
              Simplifying the bridge between business cards and native address
              books.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-8 text-xs font-mono text-zinc-500">
            <a
              href="#home"
              className="hover:text-brand-primary transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              className="hover:text-brand-primary transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#app"
              className="hover:text-brand-primary transition-colors"
            >
              APP SHOWCASE
            </a>
            <a
              href="#contact"
              className="hover:text-brand-primary transition-colors"
            >
              CONTACT
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-brand-primary hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom footer deck */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12">
          {/* Copyrights */}
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left text-[11px] text-white">
            <p>© {new Date().getFullYear()} NuIntroX. All rights reserved.</p>
          </div>

          {/* POWERED BY BRANDING WITH CUSTOM LOGO */}
          <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-zinc-950 border border-zinc-900">
            <div className="text-right">
              <span className="text-[9px] font-mono tracking-widest text-zinc-600 uppercase block leading-none">
                DEVELOPED BY
              </span>
              <span className="text-xs font-display font-semibold text-zinc-400 tracking-tight block mt-0.5 leading-none">
                powered by{" "}
                <span className="text-white hover:text-brand-primary transition-colors">
                  NUBITSOFT (PVT) LTD.
                </span>
              </span>
            </div>

            {/* The exact logo/image.png path requested by the user */}
            <div className="w-9 h-9 rounded-lg bg-zinc-900 overflow-hidden border border-zinc-800 p-0.5 flex items-center justify-center shrink-0">
              <img
                src="/assets/logo/nubit.gif"
                alt="nubitsoft logo"
                className="w-full h-full object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
