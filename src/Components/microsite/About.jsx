

import React from "react";
import { MoveRight, ShieldCheck, Leaf } from "lucide-react";

const About = ({ project }) => {
  return (
    <section className="relative px-6 py-24 md:px-20 bg-white overflow-hidden">
      {/* Subtle Background Text or Watermark for Creative Touch */}
      <div className="absolute top-10 left-10 text-[12rem] font-bold text-slate-50 opacity-[0.03] select-none pointer-events-none uppercase">
        Estate
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left: Image with Minimalist Framing */}
        <div className="relative group">
          {/* Accent Box behind image */}
          <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-blue-50 rounded-2xl -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
          
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
            <img 
              src={project.aboutimg} 
              alt={project.abouttitle} 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
          
          {/* Floating Badge - Glassmorphism Light Version */}
          <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-3xl hidden lg:block shadow-2xl">
            <p className="text-blue-600 text-sm font-black tracking-widest uppercase mb-1">Established</p>
            <p className="text-slate-900 text-lg font-light italic">MMXXVI Edition</p>
          </div>
        </div>

        {/* Right: Content Area */}
        <div className="space-y-10">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="text-blue-600 font-bold text-xs tracking-[0.4em] uppercase">The Vision</span>
              <div className="h-[1px] w-12 bg-slate-200" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
              {project.abouttitle}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-xl text-slate-600 leading-relaxed font-light italic border-l-4 border-blue-500 pl-6">
              {project.aboutdesc}
            </p>
            
            <div className="grid grid-cols-2 gap-10 pt-8">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                   <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg tracking-tight">Premium Quality</p>
                  <p className="text-slate-500 text-sm font-medium">Curated Materials</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                   <Leaf size={20} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg tracking-tight">Sustainable</p>
                  <p className="text-slate-500 text-sm font-medium">Eco-Conscious</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="relative overflow-hidden group px-8 py-4 bg-slate-900 text-white rounded-xl font-bold transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 flex items-center gap-3">
                <span className="relative z-10">Explore Floor Plans</span>
                <MoveRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;