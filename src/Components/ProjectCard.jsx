
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="group block">
      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)] group-hover:border-blue-100">
        
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={project.bg_img[0]} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
          />
          
          {/* Price Badge Overlay */}
          <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
            <p className="text-slate-900 font-bold text-sm tracking-tight">
              {project.price}
            </p>
          </div>

          {/* Location Badge (Lower Left) */}
          <div className="absolute bottom-5 left-5 flex items-center gap-1.5 bg-slate-900/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
            <MapPin size={12} className="text-white" />
            <span className="text-[10px] text-white font-semibold uppercase tracking-widest">
              {project.address?.split(',')[0] || "Featured"}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 space-y-4 relative">
          {/* Floating Action Button */}
          <div className="absolute -top-6 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight size={20} />
          </div>

          <div className="space-y-1">
            <p className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase">
              Exclusive Estate
            </p>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tighter transition-colors group-hover:text-blue-600">
              {project.name}
            </h2>
          </div>

          <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-2">
            {project.tagline || "Redefining the standard of luxury living through architectural innovation and design."}
          </p>

          <div className="pt-4 flex items-center gap-4 text-slate-300">
             <div className="h-[1px] flex-1 bg-slate-100 group-hover:bg-blue-100 transition-colors" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-500">
               View Property
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;