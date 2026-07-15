import { motion } from "motion/react";
import { ArrowRight, Trash2, Edit3, HeartHandshake, Eye } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const painPoints = [
    {
      icon: <Trash2 className="w-6 h-6 text-red-500" />,
      stat: "88%",
      title: "Thrown Away Instantly",
      desc: "Nearly 9 out of 10 paper cards end up in the trash within a single week of exchange.",
    },
    {
      icon: <Edit3 className="w-6 h-6 text-yellow-500" />,
      stat: "Static",
      title: "Hard to Update",
      desc: "Changed your number or email? You have to reprint hundreds of paper cards, wasting money and trees.",
    },
  ];

  const valueProps = [
    {
      icon: <Eye className="w-6 h-6 text-brand-primary" />,
      title: "1. Register & Create Your Digital Profile",
      desc: "Sign up and create your secure account. Add your personal information, emergency contacts, and other essential details that you want to make instantly accessible.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-primary" />,
      title: "2. Generate Your Unique QR E-Card",
      desc: "Once your profile is complete, the app generates a unique QR-based digital e-card. Every QR code is securely linked to your profile and can be accessed only through authorized scanning.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-primary" />,
      title: "3. Instant QR Code Scanning",
      desc: "When someone scans your QR code using the nuIntroX application, your authorized profile information is displayed instantly. This enables quick identification and seamless information sharing.",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-zinc-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-900/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            The Ultimate Replacement for <br />
            <span className="bg-gradient-to-r from-brand-primary via-amber-400 to-brand-secondary bg-clip-text text-transparent">
              Physical Visiting Cards
            </span>
          </motion.h2>
          <motion.p
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            In today's digital landscape, printing and carrying physical paper
            cards is not only expensive and cluttered, but also harms the
            planet. nuIntroX bridges the physical-digital divide instantly.
          </motion.p>
        </div>

        {/* Bento/Comparison Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Pain Point Column: The Old Way (Left side, takes 5 cols) */}
          <motion.div
            className="lg:col-span-5 bg-black/40 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between"
            variants={cardVariants}
          >
            <div>
              <span className="font-mono text-xs text-red-500 uppercase tracking-widest block mb-4">
                The Legacy Friction
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Why paper cards are slowing your business down
              </h3>

              <div className="space-y-8 mt-4">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-bold text-xl text-white">
                          {point.stat}
                        </span>
                        <h4 className="font-semibold text-zinc-300 text-sm">
                          {point.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900 text-xs text-zinc-500 flex items-center gap-1.5 font-mono">
              ❌ Expensive, wasteful, and easily lost.
            </div>
          </motion.div>

          {/* Solution Column: The nuIntroX Way (Right side, takes 7 cols) */}
          <motion.div
            className="lg:col-span-7 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 border border-zinc-800/80 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
            variants={cardVariants}
          >
            {/* Top gold glow effect */}
            <div className="absolute top-0 right-1/4 w-48 h-48 bg-brand-primary/5 rounded-full blur-[60px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-brand-primary uppercase tracking-widest">
                  How it works
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                  ECO-INTELLIGENT
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-8">
                Using nuIntroX is simple, secure, and takes only a few steps.
              </h3>

              <div className="space-y-8">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-3 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl text-brand-primary shrink-0">
                      {prop.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-white mb-1">
                        {prop.title}
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {prop.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight callout */}
            <div className="mt-10 p-5 bg-black/60 rounded-2xl border border-zinc-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white text-xs font-semibold">
                  Perfect for individuals & corporate teams
                </p>
                <p className="text-zinc-500 text-[10px] mt-0.5">
                  Control organization-wide templates from a centralized console
                </p>
              </div>
              {/* <div className="font-mono font-bold text-[10px] text-brand-primary flex items-center gap-1.5 shrink-0 bg-brand-primary/5 px-3 py-1.5 rounded-lg border border-brand-primary/10">
                <span>POWERED BY NUBITSOFT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Brand Mission Statement */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto p-8 rounded-3xl bg-zinc-900/30 border border-zinc-900"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display font-medium text-lg sm:text-xl text-zinc-300 italic">
            "At <span className="text-white font-semibold">nubitsoft</span>, we
            design products that streamline corporate interaction. With
            nuIntroX, our goal is to empower small business owners and massive
            enterprise teams alike to capture leads, distribute contact
            credentials, and leave an unforgettable digital signature."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
