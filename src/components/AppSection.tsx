import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Smartphone,
  QrCode,
  Mail,
  Phone,
  Globe,
  Download,
  ArrowRight,
  Star,
  ShieldCheck,
  Check,
} from "lucide-react";

// ==========================================
// CONFIGURATION: SET YOUR REAL APP IMAGES HERE
// ==========================================
// Replace the empty strings with the paths to your actual app screenshots.
// Example: SCREEN_ONE_IMAGE = "/images/home_screen.png";
const SCREEN_ONE_IMAGE = "../../assets/logo/login.png";
const SCREEN_TWO_IMAGE = "../../assets/logo/Dashboard.png";

interface PhoneProps {
  screenshotUrl?: string;
  fallbackTitle: string;
  offsetY?: boolean;
}

function PhoneMockup({
  screenshotUrl,
  fallbackTitle,
  offsetY = false,
}: PhoneProps) {
  return (
    <motion.div
      className={`relative w-full max-w-[270px] h-[530px] bg-zinc-950 rounded-[42px] border-4 border-zinc-800/80 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden mx-auto ${
        offsetY ? "lg:translate-y-12" : ""
      }`}
      animate={{ y: offsetY ? [48, 36, 48] : [0, -12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
        delay: offsetY ? 1 : 0,
      }}
    >
      {/* Dynamic Island Notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-900 rounded-full z-30 flex items-center justify-center border border-zinc-800/40">
        <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full mr-2" />
        <div className="w-8 h-1 bg-zinc-800 rounded-full" />
      </div>

      {/* Screen area – shows your image or a placeholder */}
      <div className="flex-1 bg-[#09090a] rounded-[32px] overflow-hidden relative flex flex-col p-4 pt-7 select-none">
        {screenshotUrl ? (
          <img
            src={screenshotUrl} // ✅ Now uses the prop you pass
            alt={fallbackTitle}
            className="w-full h-full object-cover rounded-[22px]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center bg-zinc-900/20 rounded-[22px] border-2 border-dashed border-zinc-700">
            <div className="text-zinc-500 text-xs text-center p-4">
              <div className="text-4xl mb-2">📱</div>
              <p className="font-mono text-[10px] uppercase tracking-wider">
                Insert App Screenshot
              </p>
              <p className="text-[8px] mt-1 text-zinc-600">
                Set SCREEN_ONE_IMAGE / SCREEN_TWO_IMAGE
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function AppSection() {
  const [copiedLink, setCopiedLink] = useState(false);

  // Link for the QR redirection simulation or direct app acquisition
  const rawDownloadUrl = `https://nuintrox.nubitsoft.com/get`;
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(rawDownloadUrl)}`;

  const copyDownloadLink = () => {
    navigator.clipboard.writeText(rawDownloadUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section
      id="app"
      className="relative py-28 bg-black overflow-hidden bg-grid-pattern"
    >
      {/* Background glowing radial gradients for premium eye-catching look */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md uppercase mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Get nuIntroX Today
          </motion.div>
          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Scan to Download & <br />
            <span className="bg-gradient-to-r from-brand-primary via-amber-400 to-brand-secondary bg-clip-text text-transparent font-extrabold">
              Revolutionize Your Networking
            </span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience lightning-fast digital card creation and contactless lead
            scanning on your smartphone. Simple, sustainable, and highly
            professional.
          </motion.p>
        </div>

        {/* Main Combined Layout: Mobiles Showcase on Left, QR & Download Center on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Phone Mockups with your app images */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-md lg:max-w-none relative">
              {/* Phone 1 – replace SCREEN_ONE_IMAGE with your screenshot */}
              <PhoneMockup
                screenshotUrl={SCREEN_ONE_IMAGE}
                fallbackTitle="nuIntroX App Screen 1"
              />

              {/* Phone 2 – replace SCREEN_TWO_IMAGE with your screenshot */}
              <PhoneMockup
                screenshotUrl={SCREEN_TWO_IMAGE}
                fallbackTitle="nuIntroX App Screen 2"
                offsetY={true}
              />
            </div>
          </div>

          {/* Right Column: Premium QR Code & Device Installation Cards */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-900 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Outer corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl" />

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-brand-primary uppercase tracking-widest font-extrabold block mb-2">
                    NATIVE MOBILE UTILITY
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    Get nuIntroX Instantly
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-2">
                    Open your phone's camera and point it at the QR code below.
                    It will automatically detect your OS and redirect you
                    straight to the correct App Store or Google Play page.
                  </p>
                </div>

                {/* Centered QR Box */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-black border border-zinc-900">
                  <div className="p-3 bg-white rounded-2xl relative border-2 border-brand-primary shrink-0">
                    <img
                      src={qrCodeApiUrl}
                      alt="Scan to download"
                      className="w-32 h-32"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 m-auto w-8 h-8 bg-black border border-brand-primary rounded-lg flex items-center justify-center font-display font-black text-brand-primary text-xs shadow-lg">
                      νX
                    </div>
                  </div>

                  <div className="space-y-3 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-amber-400 bg-amber-400/5 px-2.5 py-1 rounded border border-amber-400/10">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>UNIVERSAL QR DETECTOR</span>
                    </div>
                    <h4 className="text-white text-sm font-bold">
                      Fast-setup across all teams
                    </h4>
                    <p className="text-zinc-500 text-xs leading-normal">
                      Supports instant organization provisioning, corporate
                      custom logos, and local CRM sync with offline
                      capabilities.
                    </p>
                  </div>
                </div>

                {/* Store Action Buttons */}
                <div className="pt-2">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3.5 text-center sm:text-left">
                    Available stores
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    {/* App Store */}
                    <a
                      href="#app"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Redirecting to Apple App Store...");
                      }}
                      className="flex items-center gap-3 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all select-none cursor-pointer group"
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover:text-brand-primary transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05 1.88-3.08 1.88-1.02 0-1.4-.62-2.56-.62-1.18 0-1.58.6-2.56.62-1 .02-2.18-1-3.15-1.94-2.02-1.94-3.56-5.46-3.56-8.77 0-5.23 3.39-8 6.55-8 1.05 0 2.05.62 2.7.62.66 0 1.9-.76 3.16-.63 1.34.05 2.53.53 3.32 1.39-2.73 1.63-2.27 5.25.43 6.36-1.03 2.53-2.48 5-3.8 7.37zM12.03 4.14c.64-.78 1.08-1.85.96-2.94-.95.04-2.1.63-2.78 1.41-.59.66-1.11 1.76-.97 2.81 1.05.08 2.15-.5 2.79-1.28z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-[9px] font-mono text-zinc-500 leading-none">
                          Download on the
                        </p>
                        <p className="text-xs font-semibold text-white mt-1 leading-none group-hover:text-brand-primary transition-colors">
                          App Store
                        </p>
                      </div>
                    </a>

                    {/* Play Store */}
                    <a
                      href="#app"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Redirecting to Google Play Store...");
                      }}
                      className="flex items-center gap-3 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all select-none cursor-pointer group"
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover:text-brand-primary transition-colors"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M5 3.25a2.25 2.25 0 0 0-2.25 2.25v13a2.25 2.25 0 0 0 2.25 2.25h14A2.25 2.25 0 0 0 21.25 18.5V5.5A2.25 2.25 0 0 0 19 3.25H5zm.25 2h13.5a.25.25 0 0 1 .25.25V7.5L12 11.25 5 7.5V5.5a.25.25 0 0 1 .25-.25zM5 9.15l7 3.75 7-3.75v9.35a.25.25 0 0 1-.25.25H5.25a.25.25 0 0 1-.25-.25V9.15z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-[9px] font-mono text-zinc-500 leading-none">
                          Get it on
                        </p>
                        <p className="text-xs font-semibold text-white mt-1 leading-none group-hover:text-brand-primary transition-colors">
                          Google Play
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Link Sharing Utility */}
                <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10.5px] text-zinc-500 font-mono">
                      Verified Secure Package
                    </span>
                  </div>

                  <button
                    onClick={copyDownloadLink}
                    className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-750 text-xs font-mono text-zinc-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-brand-primary" />
                        <span className="text-brand-primary">
                          Share Link Copied!
                        </span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Copy App URL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Benefits Checklist - Ultra Easy to Understand */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "100% Free digital e-cards for individuals",
                "Instant offline-capable card scans",
                "Eco-friendly business alternative",
                "Export contacts to CSV or CRM tools",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-950/40 border border-zinc-900"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-zinc-300 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
