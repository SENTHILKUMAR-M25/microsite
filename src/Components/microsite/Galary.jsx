import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { src: '/img1.jpg', title: 'Modern Living Room', size: 'md:col-span-2 md:row-span-2' },
    { src: '/img2.jpg', title: 'Master Bedroom', size: 'col-span-1' },
    { src: '/img3.jpg', title: 'Modular Kitchen', size: 'col-span-1' },
    { src: '/img4.jpg', title: 'Balcony View', size: 'col-span-1' },
    { src: '/img5.jpg', title: 'Infinity Pool', size: 'md:col-span-2' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sky-600 font-bold tracking-widest uppercase text-sm">Visual Tour</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Inside the Residence</h2>
          </div>
          <p className="text-gray-500 max-w-md text-right hidden md:block">
            Take a glimpse into the sophisticated interiors and breathtaking architecture of your future home.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.size}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image with subtle zoom on hover */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Glassmorphic Overlay */}
              <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col justify-end p-6 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-sky-400 mb-1">
                    <Camera size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Interior</span>
                  </div>
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;