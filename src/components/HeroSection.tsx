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

              {/* Internal Screen Content */}
              <div className="flex-1 bg-zinc-950 rounded-[30px] overflow-hidden relative flex flex-col p-4 pt-6 select-none">
                {/* Simulated App Header */}
                <div className="flex justify-between items-center mb-6 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center p-[0.5px]">
                      <div className="w-full h-full bg-black rounded flex items-center justify-center">
                        <span className="text-brand-primary text-[10px] font-extrabold">.NX</span>
                      </div>
                    </div>
                    <span className="text-xs font-display font-semibold text-white">NuIntroX</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] bg-brand-primary/10 text-brand-primary font-mono font-bold">LIVE PREVIEW</span>
                </div>

                {/* Simulated E-Card Inside Phone */}
                <motion.div
                  className="rounded-2xl bg-gradient-to-br from-amber-400 via-brand-primary to-amber-600 p-5 shadow-lg relative overflow-hidden"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="font-display font-bold text-black text-lg tracking-tight leading-tight">Your multi e-cards in your pocket</h4>

                    </div>
                    <span className="text-xs font-mono font-bold text-black border border-black/30 px-1.5 py-0.5 rounded">.Co</span>
                  </div>

                  <div className="space-y-1.5 pt-4 text-black border-t border-black/15">
                    <p className="text-[10px] font-medium flex items-center gap-1.5">

                    </p>
                    <p className="text-[10px] font-medium flex items-center gap-1.5">

                    </p>
                    <p className="text-[10px] font-medium flex items-center gap-1.5">

                    </p>
                  </div>
                </motion.div>

                {/* Simulated Sharing Trigger QR Code */}
                <div className="flex-1 flex flex-col items-center justify-center mt-6">
                  <div className="p-3 bg-white rounded-2xl shadow-xl border-2 border-brand-primary/40 relative">
                    {/* Simulated QR Code matrix */}
                    <svg className="w-24 h-24 text-black" viewBox="0 0 100 100">
                      <path d="M0,0 h30 v10 h-20 v20 h-10 z M70,0 h30 v30 h-10 v-20 h-20 z M0,70 h10 v20 h20 v10 h-30 z M70,100 h30 v-30 h-10 v20 h-20 z" fill="currentColor" />
                      <rect x="15" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="70" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="15" y="70" width="15" height="15" fill="currentColor" />
                      <rect x="42" y="42" width="16" height="16" fill="currentColor" />
                      {/* Random spots for QR */}
                      <rect x="35" y="15" width="5" height="10" fill="currentColor" />
                      <rect x="45" y="25" width="10" height="5" fill="currentColor" />
                      <rect x="15" y="45" width="10" height="5" fill="currentColor" />
                      <rect x="70" y="45" width="10" height="10" fill="currentColor" />
                      <rect x="45" y="70" width="15" height="5" fill="currentColor" />
                      <rect x="70" y="70" width="5" height="10" fill="currentColor" />
                    </svg>
                    <div className="absolute inset-0 m-auto w-7 h-7 bg-black border border-brand-primary rounded flex items-center justify-center text-[10px] font-extrabold text-brand-primary">
                      νX
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 mt-3 tracking-widest uppercase">Tap to share</span>
                </div>
              </div>
            </motion.div>

            {/* Floating cards revolving around the phone */}
            {floatingCards.map((card, idx) => (
              <motion.div
                key={card.id}
                className={`absolute hidden md:block w-56 p-4 rounded-xl bg-gradient-to-br ${card.gradient} shadow-2xl z-30`}
                style={{ rotate: `${card.rotate}deg` }}
                initial={{ opacity: 0, x: idx === 0 ? -120 : 120, y: card.yOffset + 50 }}
                animate={{ 
                  opacity: 1, 
                  x: idx === 0 ? -150 : 150, 
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
