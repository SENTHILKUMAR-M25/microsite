
import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = ({ project }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (img, index) => {
    setSelectedImg(img);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  const nextImg = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % project.images.length;
    setSelectedImg(project.images[nextIdx]);
    setCurrentIndex(nextIdx);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + project.images.length) % project.images.length;
    setSelectedImg(project.images[prevIdx]);
    setCurrentIndex(prevIdx);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 font-bold text-xs tracking-[0.4em] uppercase">Visual Journey</span>
            <div className="h-[1px] w-12 bg-slate-200" />
          </div>
          <h2 className="text-5xl font-bold tracking-tighter text-slate-900">
            Property <span className="text-slate-400 font-light italic">Gallery</span>
          </h2>
        </div>

        {/* Creative Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {project.images.map((img, i) => (
            <div 
              key={i} 
              onClick={() => openLightbox(img, i)}
              className="relative group overflow-hidden rounded-[2rem] cursor-zoom-in bg-slate-100 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <ZoomIn size={24} className="text-slate-900" />
                </div>
              </div>

              {/* Minimalist Caption */}
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-xs font-black tracking-widest uppercase">Perspective 0{i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Controls */}
          <button className="absolute top-8 right-8 p-3 text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
            <X size={32} />
          </button>
          
          <button 
            onClick={prevImg}
            className="absolute left-4 md:left-8 p-4 text-slate-900 bg-slate-100/50 hover:bg-white rounded-full transition-all shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextImg}
            className="absolute right-4 md:right-8 p-4 text-slate-900 bg-slate-100/50 hover:bg-white rounded-full transition-all shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Large Image Container */}
          <div className="max-w-5xl max-h-[85vh] px-4">
            <img 
              src={selectedImg} 
              className="w-full h-full object-contain rounded-3xl shadow-2xl animate-in zoom-in-95 duration-500"
              alt="Enlarged view"
            />
            <div className="mt-6 flex justify-between items-center text-slate-500 font-medium">
               <span className="text-sm tracking-widest uppercase">Project Asset</span>
               <span className="text-sm italic">{currentIndex + 1} / {project.images.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;