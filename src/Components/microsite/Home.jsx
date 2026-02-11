

import React, { useState, useEffect } from "react";
import { MapPin, MousePointer2 } from "lucide-react";

const Home = ({ project }) => {
  const [currentBg, setCurrentBg] = useState(0);

  // Auto-slide background if there are multiple images
  useEffect(() => {
    if (project.bg_img?.length > 1) {
      const timer = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % project.bg_img.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [project.bg_img]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden bg-slate-950">
      {/* Dynamic Background with Fade Effect */}
      {project.bg_img?.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBg ? "opacity-100 scale-110 animate-ken-burns" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-1" />
      <div className="absolute inset-0 bg-black/20 z-1" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 space-y-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-[1px] w-12 bg-blue-500"></span>
          <p className="uppercase tracking-[0.4em] text-sm font-medium text-blue-400">
            Exclusive Listing
          </p>
          <span className="h-[1px] w-12 bg-blue-500"></span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight drop-shadow-2xl">
          {project.name}
        </h1>

        <p className="text-xl md:text-3xl font-light text-slate-200 tracking-wide max-w-2xl mx-auto italic opacity-90">
          "{project.tagline}"
        </p>

        <div className="pt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <MapPin size={18} className="text-blue-400" />
            <span className="text-sm md:text-base font-medium tracking-wide">
              {project.address}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
             <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Starting From</p>
             <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
               {project.price}
             </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover</span>
        <MousePointer2 size={20} />
      </div>

      {/* Custom Styles for Ken Burns Effect */}
      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 10s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Home;