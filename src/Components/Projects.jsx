
import React from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import { LayoutGrid, Plus, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = useSelector((state) => state.project.projects);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 p-6 md:p-12 lg:p-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <LayoutGrid size={24} />
              </div>
              <span className="text-blue-600 font-bold text-[10px] tracking-[0.4em] uppercase">
                Portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900">
              Our <span className="text-slate-400 font-light italic">Collections</span>
            </h1>
            <p className="text-slate-500 max-w-md text-lg font-light leading-relaxed">
              Explore our curated selection of ultra-luxury residences and architectural masterpieces.
            </p>
          </div>

          <Link 
            to="/add-project" 
            className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200"
          >
            <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            <span>List New Property</span>
          </Link>
        </header>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((p) => (
              <div key={p.id} className="transition-all duration-500">
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        ) : (
          /* Professional Empty State (Light Version) */
          <div className="flex flex-col items-center justify-center py-32 border border-slate-200 rounded-[3rem] bg-white shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
              <Building2 size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No properties listed</h3>
            <p className="text-slate-500 mb-8 max-w-xs text-center font-light leading-relaxed">
              Your architectural portfolio is currently empty. Start by adding your first luxury project.
            </p>
            <Link 
              to="/add-project" 
              className="px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
            >
              Get Started <Plus size={16} />
            </Link>
          </div>
        )}

        {/* Footer Stats */}
        {projects.length > 0 && (
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
            <p className="tracking-wide uppercase">Showing {projects.length} Exclusive Properties</p>
            <div className="flex gap-8 uppercase tracking-[0.2em]">
              <span className="text-blue-600">Residential</span>
              <span className="hover:text-slate-900 cursor-pointer transition-colors">Commercial</span>
              <span className="hover:text-slate-900 cursor-pointer transition-colors">Off-Plan</span>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Projects;