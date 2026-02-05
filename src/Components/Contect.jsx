import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Linkedin, Instagram, ArrowRight, Sparkles } from "lucide-react";

const Contact = () => {
  const profile = useSelector((state) => state.portfolio?.profile) || {};

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 overflow-hidden relative">
      {/* Decorative Blur background */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: The Hook & Info */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} /> Available for New Projects
              </div>
              <h1 className="text-6xl font-medium tracking-tight leading-[1.1] mb-8">
                Let's build your <span className="font-serif italic">vision</span> together.
              </h1>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                Expert guidance for luxury investments and residential excellence. 
                I typically respond within 2 business hours.
              </p>
            </motion.div>

            <div className="space-y-4">
              <ContactMethod icon={<Phone size={20}/>} label="Direct" value={profile.phone} />
              <ContactMethod icon={<Mail size={20}/>} label="Inquiries" value={profile.email} />
              <ContactMethod icon={<MapPin size={20}/>} label="Studio" value={profile.location} />
            </div>

            {/* Premium Social Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="mt-12 p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl shadow-slate-200"
            >
              <div className="relative z-10">
                <p className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-[0.2em]">Digital Presence</p>
                <div className="flex gap-4">
                  <SocialButton icon={<Linkedin />} label="LinkedIn" />
                  <SocialButton icon={<Instagram />} label="Instagram" />
                </div>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
                <MessageSquare size={180} />
              </div>
            </motion.div>
          </div>

          {/* Right Column: The "Glass" Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white/70 backdrop-blur-xl border border-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FloatingInput label="Full Name" placeholder="Jane Cooper" />
                <FloatingInput label="Email" placeholder="jane@company.com" type="email" />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Inquiry Type</label>
                <div className="flex flex-wrap gap-3">
                  {["Buying", "Selling", "Investment", "Consulting"].map((type) => (
                    <button 
                      key={type} 
                      type="button"
                      className="px-6 py-3 rounded-full border border-slate-100 text-sm font-medium hover:border-sky-500 hover:text-sky-600 transition-all focus:bg-sky-500 focus:text-white"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <textarea
                  placeholder="Tell me about your project or inquiry..."
                  rows="4"
                  className="w-full bg-transparent border-b border-slate-200 py-4 focus:border-sky-500 focus:outline-none transition-all text-lg font-light placeholder:text-slate-300"
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-sky-600 text-white h-16 rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-sky-100"
              >
                Send Message
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactMethod = ({ icon, label, value }) => (
  <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-50">
    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-sky-600">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold leading-none mb-1">{label}</p>
      <p className="text-lg font-medium text-slate-700">{value || "Available on request"}</p>
    </div>
  </div>
);

const FloatingInput = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">{label}</label>
    <input
      {...props}
      className="w-full bg-transparent border-b border-slate-200 py-3 focus:border-sky-500 focus:outline-none transition-all text-lg font-light"
    />
  </div>
);

const SocialButton = ({ icon, label }) => (
  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white text-white hover:text-slate-900 transition-all duration-300 text-sm font-medium">
    {icon}
    <span>{label}</span>
  </button>
);

export default Contact;