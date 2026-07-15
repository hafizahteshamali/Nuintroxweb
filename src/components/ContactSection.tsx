import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, MessageSquare, Mail, User, ShieldAlert, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "Business Partnership",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    // Simulate sending email api call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "Business Partnership",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-zinc-950 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Contact details & brand value */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-xs text-brand-primary uppercase tracking-widest font-semibold block">
                GET IN TOUCH WITH US
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Let's revolutionize <br />
                your company's <br />
                <span className="bg-gradient-to-r from-brand-primary via-amber-400 to-brand-secondary bg-clip-text text-transparent font-extrabold">
                  digital identity
                </span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                Have questions about enterprise pricing, custom templates, API access, or standard deployment for your corporate team? Fill out our secure form, and a corporate relationship manager from <strong>nubitsoft</strong> will reach out in under 24 hours.
              </p>
            </div>

            <div className="space-y-6 mt-12 lg:mt-0 pt-8 border-t border-zinc-900">
              <div className="flex gap-4 items-center">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-850 text-brand-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">Corporate Email</h4>
                  <p className="text-sm font-semibold text-white">info@nubitsoft.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-850 text-brand-primary shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">Live Web Support</h4>
                  <p className="text-sm font-semibold text-white">nubitsoft.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Form Panel */}
          <div className="lg:col-span-7">
            <motion.div
              className="bg-black/50 border border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {error && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Your Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter Your Name"
                            className="w-full bg-zinc-900/60 border border-zinc-850 focus:border-brand-primary text-white rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium focus:ring-1 focus:ring-brand-primary/40 outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Your Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter Your Email"
                            className="w-full bg-zinc-900/60 border border-zinc-850 focus:border-brand-primary text-white rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium focus:ring-1 focus:ring-brand-primary/40 outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company Input */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter Your Company Name"
                          className="w-full bg-zinc-900/60 border border-zinc-850 focus:border-brand-primary text-white rounded-xl py-2.5 px-4 text-xs font-medium focus:ring-1 focus:ring-brand-primary/40 outline-none transition-colors"
                        />
                      </div>

                      {/* Subject select */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Inquiry Reason</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-900 border border-zinc-850 focus:border-brand-primary text-white rounded-xl py-2.5 px-4 text-xs font-medium focus:ring-1 focus:ring-brand-primary/40 outline-none transition-colors cursor-pointer"
                        >
                          <option value="Business Partnership">Business Partnership</option>
                          <option value="Enterprise License">Enterprise Licensing</option>
                          <option value="Custom Template Design">Custom Template Design</option>
                          <option value="Technical Support">Technical Support</option>
                        </select>
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Your Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your team size, custom branding requirements..."
                        className="w-full bg-zinc-900/60 border border-zinc-850 focus:border-brand-primary text-white rounded-xl py-3 px-4 text-xs font-medium focus:ring-1 focus:ring-brand-primary/40 outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-amber-400 hover:to-amber-500 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Routing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Secure Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-prompt"
                    className="py-12 text-center space-y-6 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <CheckCircle2 className="w-8 h-8 animate-bounce" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-white">Inquiry Received!</h3>
                      <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Your secure contact transmission has reached the nubitsoft relationship queue. A representative will contact you shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-white hover:bg-zinc-900/50 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Send another message</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
