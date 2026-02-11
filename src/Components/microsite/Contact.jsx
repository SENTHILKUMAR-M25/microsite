
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Send, Mail, PhoneCall, Globe } from "lucide-react";

const Contact = ({ project }) => {
  // Only show social links that are provided
  const socials = [
    { icon: <Facebook size={20} />, link: project.facebook },
    { icon: <Instagram size={20} />, link: project.instagram },
    { icon: <Linkedin size={20} />, link: project.linkedin },
    { icon: <Twitter size={20} />, link: project.twitter },
  ].filter(s => s.link);

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-white text-slate-900 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-bl-[10rem] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Concierge Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-blue-600" />
                <span className="text-blue-600 font-bold text-xs tracking-[0.4em] uppercase">Private Concierge</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-slate-900">
                Let's Start a <br />
                <span className="text-slate-400 font-light italic">Conversation</span>
              </h2>
              <p className="text-slate-500 text-lg font-light max-w-md leading-relaxed">
                Ready to secure your piece of <span className="text-slate-900 font-semibold">{project.name}</span>? Our expert advisors are available for private consultations.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Estate Address</span>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">{project.address}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <Mail size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Digital Mail</span>
                </div>
                <p className="text-slate-600 font-medium">concierge@{project.name.toLowerCase().replace(/\s/g, '')}.com</p>
              </div>
            </div>

            {/* Social Links */}
            {socials.length > 0 && (
              <div className="pt-8 space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Follow the Journey</h4>
                <div className="flex gap-4">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Elegant Inquiry Form */}
          <div className="relative">
            {/* Form Shadow Accent */}
            <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10" />
            
            <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Your Name</label>
                    <input type="text" className="contact-input" placeholder="Alexander Graham" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Email Address</label>
                    <input type="email" className="contact-input" placeholder="alex@residence.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Service Required</label>
                  <div className="relative">
                    <select className="contact-input appearance-none cursor-pointer">
                      <option>Request Site Visit</option>
                      <option>Brochure Download</option>
                      <option>Investment Inquiry</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                      <Globe size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Message</label>
                  <textarea className="contact-input h-36 resize-none" placeholder="Describe your interest..." />
                </div>

                <button className="w-full py-5 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-bold tracking-widest uppercase text-xs transition-all flex items-center justify-center gap-3 group shadow-xl shadow-slate-200 hover:shadow-blue-100">
                  Send Inquiry
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-input {
          width: 100%;
          background: #fcfcfc;
          border: 1px solid #f1f5f9;
          border-radius: 1rem;
          padding: 1rem 1.25rem;
          color: #1e293b;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          outline: none;
          background: #fff;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.05);
        }
        .contact-input::placeholder {
          color: #cbd5e1;
        }
      `}</style>
    </section>
  );
};

export default Contact;