import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Maximize, Tag, Circle } from "lucide-react";

const Projects = () => {
  const projects = useSelector((state) => state.portfolio.projects);

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header with Counter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h1 className="text-5xl font-light tracking-tight text-slate-900">
              Featured <span className="font-semibold text-sky-600">Portfolio</span>
            </h1>
            <p className="text-slate-500 mt-2 text-lg">Curated properties meeting the highest standards of modern living.</p>
          </div>
          <div className="text-sm font-mono text-slate-400 uppercase tracking-widest">
            {projects.length} Results Found
          </div>
        </div>

        {projects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-slate-200 rounded-3xl"
          >
            <p className="text-slate-400 text-lg italic">No architectural projects are currently listed.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {projects.map((p, index) => (
                <ProjectCard key={p.id || index} project={p} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const isAvailable = project.status?.toLowerCase() === "available";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
    >
      {/* Decorative Image Placeholder (Innovative Touch) */}
      <div className="h-48 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-6 left-6 flex gap-2">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm ${
            isAvailable ? "bg-white text-emerald-600" : "bg-white text-slate-400"
          }`}>
            <Circle size={8} fill="currentColor" className={isAvailable ? "animate-pulse" : ""} />
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 text-slate-400 mt-1">
              <MapPin size={14} />
              <span className="text-sm font-medium">{project.location}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-50 my-6">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-400">Value</p>
            <p className="font-bold text-slate-700">{project.price}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-400">Total Area</p>
            <p className="font-bold text-slate-700">{project.area} <span className="text-[10px] font-normal">SQFT</span></p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold px-3 py-1 bg-slate-50 text-slate-500 rounded-lg group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
            {project.type}
          </span>
          <button className="text-sky-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
            Details <Maximize size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;