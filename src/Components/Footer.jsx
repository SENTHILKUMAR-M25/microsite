import { useSelector } from "react-redux";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footer = useSelector((state) => state.portfolio.footer);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-400">
      {/* Top Section: The Final Hook */}
      <div className="border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
            Ready to secure your <span className="font-serif italic text-sky-400">next asset?</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-sky-400 hover:text-white transition-all"
          >
            Get Started Now <ArrowUpRight size={18} />
          </motion.button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase mb-6">
              {footer.brandName || "ESTATE"}
              <span className="text-sky-500">.</span>
            </h2>
            <p className="text-base leading-relaxed max-w-sm">
              {footer.description || "Providing bespoke real estate solutions and strategic investment guidance for a discerning clientele."}
            </p>
          </div>

          {/* Quick Links Column - Adding structure */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="/projects" className="hover:text-sky-400 transition-colors">Properties</a></li>
              <li><a href="/about" className="hover:text-sky-400 transition-colors">About Me</a></li>
              <li><a href="/contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6">Inquiries</h3>
            <div className="space-y-4">
              <ContactItem icon={<MapPin size={18} />} text={footer.location} />
              <ContactItem icon={<Phone size={18} />} text={footer.phone} />
              <ContactItem icon={<Mail size={18} />} text={footer.email} />
            </div>

            {/* Social Icons with Tooltips or Style */}
            <div className="flex gap-3 mt-8">
              <SocialIcon icon={<Facebook size={18} />} link={footer.facebook} />
              <SocialIcon icon={<Instagram size={18} />} link={footer.instagram} />
              <SocialIcon icon={<Linkedin size={18} />} link={footer.linkedin} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#080e1b] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold">
          <p>© {currentYear} {footer.brandName}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Sub-components
const ContactItem = ({ icon, text }) => (
  <div className="group flex items-center gap-3 text-sm hover:text-white transition-colors cursor-pointer">
    <div className="text-sky-500 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="font-mono">{text}</span>
  </div>
);

const SocialIcon = ({ icon, link }) => (
  <a 
    href={link} 
    className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;