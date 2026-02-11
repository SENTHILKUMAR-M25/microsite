
import React from "react";
import { Waves, Dumbbell, ShieldCheck, Car, CheckCircle2, Sparkles } from "lucide-react";

// Updated map for a clean editorial look
const iconMap = {
  "Infinity Pool": <Waves size={28} strokeWidth={1.5} />,
  "Modern Gym": <Dumbbell size={28} strokeWidth={1.5} />,
  "24/7 Security": <ShieldCheck size={28} strokeWidth={1.5} />,
  "Private Parking": <Car size={28} strokeWidth={1.5} />,
};

const Amenities = ({ project }) => {
  return (
    <section className="px-6 py-24 md:px-20 bg-[#FCFCFC] overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Editorial Flair */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-blue-600 font-bold text-[10px] tracking-[0.4em] uppercase">
                Lifestyle & Amenities
              </span>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">
              The <span className="text-slate-400 font-light italic">Standard</span> of Living
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-light leading-relaxed">
            Every detail is meticulously crafted to ensure a life of absolute comfort and sophistication.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {project.amenities.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-blue-200 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
            >
              {/* Animated Icon Container */}
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg]">
                {iconMap[item.name] || <CheckCircle2 size={28} strokeWidth={1.5} />}
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight transition-colors">
                  {item.name}
                </h4>
                
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {item.desc || "Refining the essence of contemporary architecture and comfort."}
                </p>
              </div>

              {/* Subtle Decorative Line */}
              <div className="mt-8 h-[1px] w-0 bg-blue-100 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;