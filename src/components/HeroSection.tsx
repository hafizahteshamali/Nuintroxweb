import { motion } from "motion/react";
import { ArrowRight, Sparkles, Smartphone, Share2, Leaf, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onExploreApp: () => void;
}

export default function HeroSection({ onExploreApp }: HeroSectionProps) {
  // Stagger children container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingCards = [
    {
      id: "card-1",
      name: "Digital Contact",
      title: "In your pocket",
      company: ".Co",
      gradient: "from-amber-400 via-brand-primary to-amber-600",
      textColor: "text-black",
      rotate: -8,
      yOffset: -30,
      delay: 0,
    },
    {
      id: "card-2",
      name: "Don't waste your time",
      title: "Just connect",
      
      gradient: "from-zinc-900 to-zinc-850 border border-zinc-700",
      textColor: "text-white",
      rotate: 6,
      yOffset: 40,
      delay: 0.5,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-black bg-grid-pattern"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-80 h-80 rounded-full bg-brand-secondary/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md uppercase">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
               Let's get connect.
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none"
            >
              Ditch Paper. <br />
              Go Instant With <br />
              <span className="bg-gradient-to-r from-brand-primary via-amber-400 to-brand-secondary bg-clip-text text-transparent">
                NuIntroX
              </span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Generate your premium digital e-cards and share them in a flash through a simple QR code. Ideal for business owners, creators, and professionals who demand a sleek, eco-friendly network experience. No app install required for recipients!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onExploreApp}
                className="px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-amber-400 hover:to-amber-500 shadow-[0_4px_20px_rgba(254,188,30,0.25)] hover:shadow-[0_4px_30px_rgba(254,188,30,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Create Your E-Card</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#about"
                className="px-8 py-4 rounded-xl font-bold text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>How It Works</span>
              </a>
            </motion.div>

            {/* Key Benefits Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-900/80"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Leaf className="w-4 h-4 text-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-semibold">100% Eco-Friendly</span>
                  <span className="text-zinc-500 text-[10px]">Zero paper waste</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Share2 className="w-4 h-4 text-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-semibold">Instant Share</span>
                  <span className="text-zinc-500 text-[10px]">Via QR or wallet</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-semibold">Reliable Sync</span>
                  <span className="text-zinc-500 text-[10px]">Real-time cloud backup</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visuals - Completely Animated 3D Phone and Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[450px] lg:min-h-[500px]">
            {/* Glowing background behind mockup */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full opacity-20 blur-3xl" />
            
            {/* Phone Frame Mockup container */}
            <motion.div
              className="relative w-[280px] h-[540px] bg-zinc-950 rounded-[40px] border-4 border-zinc-800 p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] z-20 flex flex-col overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Speaker / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-900 rounded-full z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-zinc-800 rounded-full" />
              </div>

              {/* Internal Screen Content -- App Splash Screen (Scan & Generate) */}
              <div className="flex-1 bg-[#141414] rounded-[30px] overflow-hidden relative flex flex-col select-none">
                {/* Fake status bar */}
                <div className="flex justify-between items-center px-4 pt-3 pb-1 relative z-20">
                  <span className="text-white text-[10px] font-semibold">11:34</span>
                  <div className="flex items-center gap-1 text-white/80 text-[9px]">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Ambient background circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-brand-primary/5 blur-2xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/[0.03] blur-2xl pointer-events-none" />

                {/* Center QR glyph */}
                <motion.div
                  className="flex-1 flex items-center justify-center relative z-10"
                  animate={{ scale: [0.97, 1.02, 0.97] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                >
                  <div className="relative w-44 h-44">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Outer L-shaped corner brackets */}
                      <path d="M 10,30 L 10,15 C 10,12 12,10 15,10 L 30,10" stroke="#FEBC1E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M 70,10 L 85,10 C 88,10 90,12 90,15 L 90,30" stroke="#FEBC1E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M 10,70 L 10,85 C 10,88 12,90 15,90 L 30,90" stroke="#FEBC1E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M 70,90 L 85,90 C 88,90 90,88 90,85 L 90,70" stroke="#FEBC1E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                      {/* Top Left Square + Dot */}
                      <rect x="20" y="20" width="22" height="22" rx="2" stroke="#FFFFFF" strokeWidth="5" fill="none" />
                      <rect x="27.5" y="27.5" width="7" height="7" rx="1" fill="#FEBC1E" />

                      {/* Top Right Square + Dot */}
                      <rect x="58" y="20" width="22" height="22" rx="2" stroke="#FFFFFF" strokeWidth="5" fill="none" />
                      <rect x="65.5" y="27.5" width="7" height="7" rx="1" fill="#FEBC1E" />

                      {/* Bottom Left Square + Dot */}
                      <rect x="20" y="58" width="22" height="22" rx="2" stroke="#FFFFFF" strokeWidth="5" fill="none" />
                      <rect x="27.5" y="65.5" width="7" height="7" rx="1" fill="#FEBC1E" />

                      {/* Bottom Right scattered bits */}
                      <rect x="58" y="58" width="6" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="70" y="58" width="10" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="58" y="70" width="6" height="10" rx="1" fill="#FFFFFF" />
                      <rect x="70" y="70" width="6" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="80" y="70" width="4" height="4" rx="1" fill="#FEBC1E" />
                      <rect x="70" y="80" width="4" height="4" rx="1" fill="#FEBC1E" />
                      <rect x="80" y="80" width="4" height="4" rx="1" fill="#FEBC1E" />

                      {/* Horizontal scan line */}
                      <path d="M 12,48 L 88,48" stroke="#FEBC1E" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </svg>

                    {/* Glowing laser sweep - travels across the full QR height */}
                    <motion.div
                      className="absolute left-[7%] w-[86%] h-[3px] rounded-full bg-brand-primary shadow-[0_0_15px_3px_rgba(254,188,30,0.8)]"
                      animate={{ top: ["6%", "94%", "6%"] }}
                      transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>

                {/* Bottom curved white card */}
                <div className="relative z-10 bg-transparent">
                  <svg viewBox="0 0 280 24" className="block w-full" preserveAspectRatio="none">
                    <path d="M 0,24 C 70,-4 210,-4 280,24 Z" fill="#FFFFFF" />
                  </svg>
                  <div className="bg-white border-white px-6 pt-1 pb-6 -mt-[1px] rounded-b-[27px] flex flex-col items-center">
                    <h4 className="font-display font-extrabold text-black text-xl tracking-tight text-center">
                      Scan &amp; Generate
                    </h4>
                    <p className="text-zinc-500 text-[10px] font-medium text-center leading-snug mt-2 max-w-[200px]">
                      Your all-in-one QR code solution. Fast, easy, and secure.
                    </p>

                    <button
                      onClick={onExploreApp}
                      className="mt-4 w-11 h-11 rounded-full flex items-center justify-center border-2 border-black bg-gradient-to-br from-amber-300 via-brand-primary to-amber-500 shadow-[0_6px_16px_rgba(254,188,30,0.5)] active:scale-95 transition-transform"
                      aria-label="Get started"
                    >
                      <ArrowRight className="w-5 h-5 text-black" strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating cards revolving around the phone */}
            {floatingCards.map((card, idx) => (
              <motion.div
                key={card.id}
                className={`absolute hidden md:block w-56 p-4 rounded-xl bg-gradient-to-br ${card.gradient} shadow-2xl z-30`}
                style={{ rotate: `${card.rotate}deg` }}
                initial={{ opacity: 0, x: idx === 0 ? -150 : 150, y: card.yOffset + 50 }}
                animate={{ 
                  opacity: 1, 
                  x: idx === 0 ? -200 : 200, 
                  y: [card.yOffset, card.yOffset - 15, card.yOffset]
                }}
                transition={{
                  opacity: { duration: 0.8, delay: card.delay },
                  x: { duration: 0.8, delay: card.delay },
                  y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    delay: idx * 1.5,
                  }
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className={`font-display font-bold text-sm leading-tight ${card.textColor}`}>{card.name}</h5>
                    <p className={`text-[8px] font-mono opacity-80 uppercase tracking-widest ${card.textColor}`}>{card.title}</p>
                  </div>
                  <span className={`text-[9px] font-mono font-bold border border-current px-1 rounded ${card.textColor}`}>ν</span>
                </div>
                <div className="text-[7px] font-mono opacity-60 flex flex-col gap-0.5 pt-2 border-t border-current/15 text-zinc-800">
                  <span className={card.textColor}>{card.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
