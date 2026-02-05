import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Save, Plus, Trash2, Home, User, Briefcase, Layout, 
  MapPin, Phone, Mail, Globe, Layers, ArrowRight, CheckCircle2 
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

import {
  updateHome,
  updateProfile,
  updateFooter,
  addProject,
  deleteProject
} from "../Slice/portfolioslice";

const PortfolioForm = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector((state) => state.portfolio);
  const [activeTab, setActiveTab] = useState("home");
  const [isSaved, setIsSaved] = useState(false);

  /* ---------------- STATE MANAGEMENT ---------------- */
  const [homeData, setHomeData] = useState({
    name: portfolio.name || "",
    tagline: portfolio.tagline || "",
    description: portfolio.description || "",
    phone: portfolio.phone || "",
    email: portfolio.email || "",
    location: portfolio.location || "",
  });

  const [profileData, setProfileData] = useState({
    name: portfolio.profile?.name || "",
    experience: portfolio.profile?.experience || "",
    description: portfolio.profile?.description || "",
    projectsCount: portfolio.profile?.projectsCount || "",
    clientsCount: portfolio.profile?.clientsCount || "",
    location: portfolio.profile?.location || "",
  });

  const [projectData, setProjectData] = useState({
    title: "",
    location: "",
    price: "",
    type: "",
    status: "",
    area: "",
  });

  const [footerData, setFooterData] = useState({
    brandName: portfolio.footer?.brandName || "",
    description: portfolio.footer?.description || "",
    phone: portfolio.footer?.phone || "",
    email: portfolio.footer?.email || "",
    location: portfolio.footer?.location || "",
    facebook: portfolio.footer?.facebook || "",
    instagram: portfolio.footer?.instagram || "",
    linkedin: portfolio.footer?.linkedin || "",
  });

  /* ---------------- HANDLERS ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!homeData.name || !homeData.email) {
      alert("Primary Identity fields (Name & Email) are required.");
      return;
    }

    dispatch(updateHome(homeData));
    dispatch(updateProfile(profileData));
    dispatch(updateFooter(footerData));

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleProjectSubmit = () => {
    if (!projectData.title || !projectData.location) {
      alert("Project title and location are required");
      return;
    }
    dispatch(addProject({ id: uuidv4(), ...projectData }));
    setProjectData({ title: "", location: "", price: "", type: "", status: "", area: "" });
  };

  const tabs = [
    { id: "home", label: "Identity", icon: <Home size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "projects", label: "Portfolio", icon: <Briefcase size={18} /> },
    { id: "footer", label: "Footer", icon: <Layout size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* TOP BAR */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-2">
              <Layers className="text-sky-600" /> Admin <span className="text-sky-600">Console</span>
            </h1>
            <p className="text-slate-400 text-sm font-medium">Manage your professional digital footprint</p>
          </div>
          <button
            onClick={handleSubmit}
            className={`flex items-center justify-center gap-2 px-8 py-3 rounded-2xl font-bold transition-all shadow-lg ${
              isSaved ? "bg-emerald-500 text-white" : "bg-slate-900 text-white hover:bg-sky-600"
            }`}
          >
            {isSaved ? <CheckCircle2 size={18} /> : <Save size={18} />}
            {isSaved ? "Changes Synced" : "Global Save"}
          </button>
        </header>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id 
                  ? "bg-white text-sky-600 shadow-xl shadow-slate-200/50 translate-x-1" 
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-100/50"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </aside>

          {/* MAIN FORM AREA */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100"
              >
                {/* IDENTITY TAB */}
                {activeTab === "home" && (
                  <div className="space-y-10">
                    <TabHeader title="Hero & Branding" desc="Primary contact information and introduction." />
                    <div className="grid md:grid-cols-2 gap-8">
                      <Input label="Display Name" value={homeData.name} onChange={(e) => setHomeData({ ...homeData, name: e.target.value })} />
                      <Input label="Tagline" value={homeData.tagline} onChange={(e) => setHomeData({ ...homeData, tagline: e.target.value })} />
                      <Input label="Phone Number" value={homeData.phone} onChange={(e) => setHomeData({ ...homeData, phone: e.target.value })} />
                      <Input label="Email Address" type="email" value={homeData.email} onChange={(e) => setHomeData({ ...homeData, email: e.target.value })} />
                      <Input label="Office Location" value={homeData.location} onChange={(e) => setHomeData({ ...homeData, location: e.target.value })} />
                    </div>
                    <Textarea label="Hero Biography" value={homeData.description} onChange={(e) => setHomeData({ ...homeData, description: e.target.value })} />
                  </div>
                )}

                {/* ABOUT TAB */}
                {activeTab === "about" && (
                  <div className="space-y-10">
                    <TabHeader title="Professional Profile" desc="Details for the deep-dive about section." />
                    <div className="grid md:grid-cols-2 gap-8">
                      <Input label="Profile Title" value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} />
                      <Input label="Years of Experience" type="number" value={profileData.experience} onChange={(e) => setProfileData({ ...profileData, experience: e.target.value })} />
                      <Input label="Total Projects" type="number" value={profileData.projectsCount} onChange={(e) => setProfileData({ ...profileData, projectsCount: e.target.value })} />
                      <Input label="Happy Clients" type="number" value={profileData.clientsCount} onChange={(e) => setProfileData({ ...profileData, clientsCount: e.target.value })} />
                    </div>
                    <Textarea label="Detailed Bio" value={profileData.description} onChange={(e) => setProfileData({ ...profileData, description: e.target.value })} />
                  </div>
                )}

                {/* PROJECTS TAB */}
                {activeTab === "projects" && (
                  <div className="space-y-10">
                    <TabHeader title="Property Catalog" desc="Showcase your architectural or real estate portfolio." />
                    
                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                      <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                        <Plus size={16} /> New Listing
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input label="Property Title" value={projectData.title} onChange={(e) => setProjectData({ ...projectData, title: e.target.value })} />
                        <Input label="Location" value={projectData.location} onChange={(e) => setProjectData({ ...projectData, location: e.target.value })} />
                        <Input label="Price / Value" value={projectData.price} onChange={(e) => setProjectData({ ...projectData, price: e.target.value })} />
                        <Select label="Type" value={projectData.type} options={["Apartment", "Villa", "Plot", "Commercial"]} onChange={(e) => setProjectData({ ...projectData, type: e.target.value })} />
                        <Select label="Status" value={projectData.status} options={["Ready to Move", "Under Construction", "Sold"]} onChange={(e) => setProjectData({ ...projectData, status: e.target.value })} />
                        <Input label="Total Area (Sqft)" value={projectData.area} onChange={(e) => setProjectData({ ...projectData, area: e.target.value })} />
                      </div>
                      <button onClick={handleProjectSubmit} className="mt-8 w-full bg-white border-2 border-dashed border-slate-200 py-4 rounded-2xl font-bold text-slate-500 hover:border-sky-500 hover:text-sky-600 transition-all flex items-center justify-center gap-2">
                        Push to Live Catalog <ArrowRight size={18}/>
                      </button>
                    </div>

                    <div className="grid gap-4 mt-10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Listings ({portfolio.projects.length})</h4>
                      {portfolio.projects.map((p) => (
                        <div key={p.id} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:border-sky-100 hover:bg-sky-50/20 transition-all group">
                          <div>
                            <p className="font-bold text-slate-800">{p.title}</p>
                            <p className="text-xs text-slate-400 uppercase tracking-wide">{p.location} • {p.price}</p>
                          </div>
                          <button onClick={() => dispatch(deleteProject(p.id))} className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FOOTER TAB */}
                {activeTab === "footer" && (
                  <div className="space-y-10">
                    <TabHeader title="Site Endcap" desc="Social links and global site footer details." />
                    <div className="grid md:grid-cols-2 gap-8">
                      <Input label="Brand Name" value={footerData.brandName} onChange={(e) => setFooterData({ ...footerData, brandName: e.target.value })} />
                      <Input label="Contact Phone" value={footerData.phone} onChange={(e) => setFooterData({ ...footerData, phone: e.target.value })} />
                    </div>
                    <Textarea label="Footer Summary" value={footerData.description} onChange={(e) => setFooterData({ ...footerData, description: e.target.value })} />
                    <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-slate-50">
                      <Input label="LinkedIn" value={footerData.linkedin} onChange={(e) => setFooterData({ ...footerData, linkedin: e.target.value })} />
                      <Input label="Instagram" value={footerData.instagram} onChange={(e) => setFooterData({ ...footerData, instagram: e.target.value })} />
                      <Input label="Facebook" value={footerData.facebook} onChange={(e) => setFooterData({ ...footerData, facebook: e.target.value })} />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

/* ---------------- HELPER COMPONENTS ---------------- */

const TabHeader = ({ title, desc }) => (
  <div className="border-b border-slate-50 pb-6">
    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm mt-1">{desc}</p>
  </div>
);

const Input = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 ml-1">{label}</label>
    <input
      {...props}
      className="w-full bg-slate-50/50 border border-slate-100 p-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-medium text-slate-700"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 ml-1">{label}</label>
    <textarea
      {...props}
      rows="4"
      className="w-full bg-slate-50/50 border border-slate-100 p-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-medium text-slate-700"
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 ml-1">{label}</label>
    <select
      {...props}
      className="w-full bg-slate-50/50 border border-slate-100 p-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-medium text-slate-700 appearance-none cursor-pointer"
    >
      <option value="">Select Option</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default PortfolioForm;