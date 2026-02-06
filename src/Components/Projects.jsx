// import { useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, Maximize, Tag, Circle } from "lucide-react";
// import { Link } from "react-router-dom";

// const Projects = () => {
//   const projects = useSelector((state) => state.portfolio.projects);

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] px-6 md:px-16 py-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with Counter */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
//           <div>
//             <h1 className="text-5xl font-light tracking-tight text-slate-900">
//               Featured <span className="font-semibold text-sky-600">Portfolio</span>
//             </h1>
//             <p className="text-slate-500 mt-2 text-lg">Curated properties meeting the highest standards of modern living.</p>
//           </div>
//           <div>
//                   <Link to={`/add-project`}>Add Project</Link>

//           <div className="text-sm font-mono text-slate-400 uppercase tracking-widest">
//             {projects.length} Results Found
//           </div></div>
//         </div>

//         {projects.length === 0 ? (
//           <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }}
//             className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-slate-200 rounded-3xl"
//           >
//             <p className="text-slate-400 text-lg italic">No architectural projects are currently listed.</p>
//           </motion.div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             <AnimatePresence>
//               {projects.map((p, index) => (
//                 <ProjectCard key={p.id || index} project={p} />
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const ProjectCard = ({ project }) => {
//   const isAvailable = project.status?.toLowerCase() === "available";

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -8 }}
//       className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
//     >
//       {/* Decorative Image Placeholder (Innovative Touch) */}
//       <div className="h-48 bg-slate-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-700" />
//         <div className="absolute top-6 left-6 flex gap-2">
//           <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm ${
//             isAvailable ? "bg-white text-emerald-600" : "bg-white text-slate-400"
//           }`}>
//             <Circle size={8} fill="currentColor" className={isAvailable ? "animate-pulse" : ""} />
//             {project.status}
//           </span>
//         </div>
//       </div>

//       <div className="p-8">
//         <div className="flex justify-between items-start mb-4">
//           <div>
//             <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
//               {project.title}
//             </h3>
//             <div className="flex items-center gap-1 text-slate-400 mt-1">
//               <MapPin size={14} />
//               <span className="text-sm font-medium">{project.location}</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-50 my-6">
//           <div className="space-y-1">
//             <p className="text-[10px] uppercase tracking-widest text-slate-400">Value</p>
//             <p className="font-bold text-slate-700">{project.price}</p>
//           </div>
//           <div className="space-y-1">
//             <p className="text-[10px] uppercase tracking-widest text-slate-400">Total Area</p>
//             <p className="font-bold text-slate-700">{project.area} <span className="text-[10px] font-normal">SQFT</span></p>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <span className="text-xs font-bold px-3 py-1 bg-slate-50 text-slate-500 rounded-lg group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
//             {project.type}
//           </span>
//           <button className="text-sky-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
//             Details <Maximize size={16} />
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Projects;

import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Maximize, Circle, Plus, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  // Accessing projects from Redux
  const projects = useSelector((state) => state.portfolio.projects);

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Fixed Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-100 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-12 bg-sky-600 rounded-full" />
              <span className="text-sky-600 font-bold uppercase tracking-widest text-xs">Featured Works</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900">
              Featured <span className="font-semibold text-sky-600">Portfolio</span>
            </h1>
            <p className="text-slate-500 mt-3 text-lg max-w-md leading-relaxed">
              Curated properties meeting the highest standards of modern living.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <Link 
              to="/add-project" 
              className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-600/20 active:scale-95"
            >
              <Plus size={20} className="transition-transform group-hover:rotate-90" />
              Add Project
            </Link>
            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <LayoutGrid size={14} className="text-slate-400" />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none">
                {projects.length} Results Found
              </span>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {projects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-slate-200 rounded-[3rem] bg-white/50"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-300">
              <Plus size={32} />
            </div>
            <p className="text-slate-400 text-lg font-medium">No architectural projects listed yet.</p>
            <Link to="/add-project" className="text-sky-600 mt-2 font-bold hover:underline">Start by adding one</Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
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
  // Defaulting to "Available" if no status is provided
  const status = project.status || "Available";
  const isAvailable = status.toLowerCase() === "available";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
    >
      {/* Dynamic Image Section */}
      <div className="h-64 bg-slate-200 relative overflow-hidden">
        {project.bg_img ? (
          <img 
            src={project.bg_img} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">
            No Preview
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-6 left-6">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-md ${
            isAvailable ? "bg-white/90 text-emerald-600" : "bg-slate-900/80 text-white"
          }`}>
            <Circle size={8} fill="currentColor" className={isAvailable ? "animate-pulse" : ""} />
            {status}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
            {project.title || "Untitled Project"}
          </h3>
          <div className="flex items-center gap-1 text-slate-400 mt-1">
            <MapPin size={14} />
            <span className="text-sm font-medium">{project.location || "Location TBD"}</span>
          </div>
        </div>

        {/* Dynamic Data Grid */}
        <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-50 my-6">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Value</p>
            <p className="font-bold text-slate-700">{project.price || "Contact Us"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Category</p>
            <p className="font-bold text-slate-700">{project.category || "Residential"}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
            {project.tagline || "Exclusive"}
          </span>
          <Link 
            to={`/project/${project.id}`} 
            className="text-sky-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            Details <Maximize size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;