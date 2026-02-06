import React from 'react';
import { ShieldCheck, Award, Zap, Trees } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="text-sky-600" />,
      title: "RERA Approved",
      desc: "Fully compliant with all legal and safety regulations."
    },
    {
      icon: <Award className="text-sky-600" />,
      title: "Premium Finish",
      desc: "Italian marble flooring and top-tier modular kitchens."
    },
    {
      icon: <Zap className="text-sky-600" />,
      title: "Smart Homes",
      desc: "Integrated automation for lighting and security."
    },
    {
      icon: <Trees className="text-sky-600" />,
      title: "Eco-Friendly",
      desc: "Solar power and rainwater harvesting systems."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <img 
                src="/about-exterior.jpg" 
                alt="Property Architecture" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element - Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-sky-600 text-white p-8 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-4xl font-bold italic">25+</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Years of Excellence</p>
            </div>
            {/* Background decorative blob */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky-50 rounded-full -z-0" />
          </div>

          {/* Right Side: Content & Features */}
          <div className="w-full lg:w-1/2">
            <span className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Redefining Comfort
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where Elegance Meets <br /> Modern Functionality
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              At <span className="font-semibold text-gray-900">VS Property</span>, we don't just build apartments; we craft homes. Our focus on architectural integrity and sustainable living ensures your investment stands the test of time.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;