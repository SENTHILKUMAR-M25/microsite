import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Sparkles, Image, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <Info size={18} /> },
    { name: 'Amenities', href: '#amenities', icon: <Sparkles size={18} /> },
    { name: 'Gallery', href: '#gallery', icon: <Image size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo with a subtle hover lift */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110">
            VS
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
            Property
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-gray-600 hover:text-sky-600 transition-colors flex items-center gap-1.5 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="bg-sky-600 text-white px-5 py-2.5 rounded-full hover:bg-sky-700 transition-all hover:shadow-md active:scale-95 flex items-center gap-2">
              <Phone size={18} /> Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 md:hidden ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <ul className="flex flex-col p-6 gap-4 border-t">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg text-gray-700 font-medium">
                {link.icon} {link.name}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" className="block text-center bg-sky-600 text-white py-3 rounded-xl font-bold">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;