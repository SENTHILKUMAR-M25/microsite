import React from 'react';
import { ArrowRight, MapPin, Home as HomeIcon } from 'lucide-react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay for Readability */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 scale-105 hover:scale-100"
        style={{ 
          backgroundImage: 'https://media.istockphoto.com/id/2155879454/photo/this-is-an-exterior-photo-of-a-home-for-sale-in-beverly-hills-ca.jpg?s=612x612&w=0&k=20&c=uSKacMQvmaYX5Pf5Br7pUfErYQbNt_UWXRTjfwrdSDQ=',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sky-600/20 border border-sky-400/30 backdrop-blur-md px-3 py-1 rounded-full text-sky-400 text-sm font-semibold mb-6 animate-fade-in">
            <HomeIcon size={14} />
            <span>Limited Units Available</span>
          </div>

          {/* Typography with better scaling */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Luxury Living <br /> 
            <span className="text-sky-500">Redefined.</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
            Experience the pinnacle of comfort in our premium 2 & 3 BHK apartments, 
            designed for those who appreciate the finer things in life.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group bg-sky-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-600/20 active:scale-95"
            >
              Book a Site Visit
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#amenities"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              View Amenities
            </a>
          </div>

          {/* Trust Indicators / Quick Info */}
          <div className="mt-12 flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-sky-500" />
              <span className="text-sm font-medium">Prime District, Mumbai</span>
            </div>
            <div className="h-4 w-[1px] bg-white/30" />
            <div className="text-sm font-medium">
              Starting from <span className="text-white font-bold">$1.2M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Edge Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Home;