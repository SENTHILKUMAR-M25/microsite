import React from "react";
import { MapPin, BedDouble, Bath, Square, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  // Fallback data for demonstration
  const {
    title = "Modern Suburban Villa",
    location = "Beverly Hills, CA",
    description = "A stunning contemporary home with open-plan living and panoramic views.",
    price = "$1,250,000",
    beds = 4,
    baths = 3,
    size = "2,400 sqft",
    status = "For Sale",
    image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  } = project;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
            {status}
          </span>
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-sky-600 text-white px-4 py-1.5 rounded-lg font-bold shadow-lg">
            {price}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
            {title}
          </h3>
          <button className="p-2 bg-slate-50 rounded-full hover:bg-sky-50 text-slate-400 hover:text-sky-600 transition-colors">
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
          <MapPin size={14} className="text-sky-500" />
          <span>{location}</span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
          {description}
        </p>

        {/* Property Specs Table-like Grid */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-50">
          <div className="flex flex-col items-center gap-1">
            <BedDouble size={18} className="text-slate-400" />
            <span className="text-xs font-semibold text-slate-700">{beds} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-slate-100">
            <Bath size={18} className="text-slate-400" />
            <span className="text-xs font-semibold text-slate-700">{baths} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Square size={18} className="text-slate-400" />
            <span className="text-xs font-semibold text-slate-700">{size}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;