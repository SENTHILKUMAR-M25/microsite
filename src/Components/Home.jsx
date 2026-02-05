import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { motion } from "framer-motion";
import { Settings } from "lucide-react"; // Professional icon for the edit button

const Home = () => {
  const navigate = useNavigate();
  const { name, tagline, description, phone, email, location } = useSelector(
    (state) => state.portfolio
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-serif relative">
      {/* --- Floating Edit Button --- */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/setup")}
        className="fixed bottom-10 right-10 z-50 p-4 bg-white border border-slate-200 shadow-2xl rounded-full text-slate-400 hover:text-sky-600 hover:border-sky-100 transition-all group"
        title="Edit Portfolio"
      >
        <Settings size={24} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Configure
        </span>
      </motion.button>

      {/* Subtle Navigation Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-900" />

      <main className="max-w-6xl mx-auto px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Left Column: Essential Branding */}
          <div className="md:col-span-4 border-l border-slate-200 pl-8 flex flex-col justify-between py-2">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-light tracking-widest uppercase mb-2"
              >
                {name || "Signature"}
              </motion.h1>
              <p className="text-sm tracking-widest text-slate-400 uppercase">
                {tagline || "Private Consultant"}
              </p>
            </div>

            <div className="mt-20 space-y-4 text-sm font-sans tracking-wide text-slate-500">
              <p className="hover:text-slate-900 transition-colors cursor-default">{location}</p>
              <p className="hover:text-slate-900 transition-colors">{email}</p>
              <p className="hover:text-slate-900 transition-colors">{phone}</p>
            </div>
          </div>

          {/* Right Column: Hero Content */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-7xl leading-[1.1] font-medium text-slate-900 mb-12">
                {description || "Crafting exceptional experiences in modern real estate."}
              </h2>

              <Link
                to="/projects"
                className="group relative inline-flex items-center overflow-hidden"
              >
                <span className="text-lg font-sans font-medium pr-12 transition-all group-hover:pr-16">
                  Explore Portfolio
                </span>
                <span className="absolute right-0 w-10 h-[1px] bg-slate-900 transition-all group-hover:w-14" />
              </Link>
            </motion.div>

            {/* Visual Anchor */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-32 h-[400px] w-full bg-slate-100 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;