import React from 'react';
import { 
  Waves, 
  Dumbbell, 
  ShieldCheck, 
  Gamepad2, 
  Car, 
  Trees 
} from 'lucide-react';

const amenities = [
  { name: "Swimming Pool", icon: <Waves />, desc: "Infinity pool with a temperature-controlled deck." },
  { name: "Modern Gym", icon: <Dumbbell />, desc: "World-class equipment and dedicated yoga space." },
  { name: "24/7 Security", icon: <ShieldCheck />, desc: "Multi-tier security with smart biometric access." },
  { name: "Kids Play Area", icon: <Gamepad2 />, desc: "Safe, rubberized flooring with modern play zones." },
  { name: "Secure Parking", icon: <Car />, desc: "Spacious multi-level parking with EV charging." },
  { name: "Zen Garden", icon: <Trees />, desc: "Beautifully landscaped spaces for meditation." },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-sky-600">Amenities</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Every detail is designed to provide you with an unparalleled living experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                
                <p className="text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;