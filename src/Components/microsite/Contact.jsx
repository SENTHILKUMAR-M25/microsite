import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info & Branding */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let's Find Your <span className="text-sky-400">Dream Home</span></h2>
              <p className="text-gray-400 text-lg">
                Have questions about the property or want to schedule a private tour? 
                Our team is ready to assist you 24/7.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Visit Us</h4>
                  <p className="text-gray-400">123 Luxury Lane, Sky District, Mumbai 400001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Anytime</h4>
                  <p className="text-gray-400">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-gray-400">sales@vsproperty.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-sky-600 hover:border-sky-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: The Form Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl text-gray-900 relative">
            {/* Subtle background glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 blur-3xl rounded-full -z-0" />
            
            <form className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 234..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all bg-gray-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 ml-1">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your requirements..." 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all bg-gray-50 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                Schedule Site Visit <Send size={18} />
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>

        {/* Mini Footer */}
        <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 VS Property. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;