
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProject } from "../Slice/ProjectSlice";
// import { useNavigate } from "react-router-dom";
//  import { ArrowLeft, Building2, MapPin, DollarSign,
//   Image as ImageIcon, Share2, Layout, Info,
//   Dumbbell, Waves, ShieldCheck, ParkingCircle, Wifi
// } from "lucide-react";

// const AddProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("hero");

//   const AMENITIES = [
//   { label: "Gym", icon: Dumbbell },
//   { label: "Swimming Pool", icon: Waves },
//   { label: "24x7 Security", icon: ShieldCheck },
//   { label: "Parking", icon: ParkingCircle },
//   { label: "Free WiFi", icon: Wifi },
// ];
//    const [form, setForm] = useState({
//     name: "", title: "", location: "", description: "",
//     bg_img: "", tagline: "", price: "", category: "Residential",
//     aboutimg: "", abouttitle: "", aboutdesc: "",
//     images: [],
//     amenities: [],
//     address: "",
//     facebook: "", linkedin: "", twitter: "", instagram: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       addProject({
//         ...form,
//         images: form.images.split(",").map(i => i.trim()),
//         amenities: form.amenities.split(",").map(a => a.trim()),
//       })
//     );
//     navigate("/projects");
//   };

//   // Helper for input styling
//   const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 outline-none transition-all bg-slate-50/50";
//   const labelClass = "block text-sm font-semibold text-slate-700 mb-1.5 ml-1";

//   const TabButton = ({ id, label, icon: Icon }) => (
//     <button
//       type="button"
//       onClick={() => setActiveTab(id)}
//       className={`flex items-center gap-2 px-6 py-3 font-medium transition-all border-b-2 ${
//         activeTab === id 
//         ? "border-sky-600 text-sky-600 bg-sky-50/50" 
//         : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
//       }`}
//     >
//       <Icon size={18} /> {label}
//     </button>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50/50 py-12 px-6">
//       <div className="max-w-4xl mx-auto">
        
//         <header className="flex justify-between items-center mb-8">
//           <div>
//             <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors mb-2">
//               <ArrowLeft size={18} /> Back to Projects
//             </button>
//             <h1 className="text-3xl font-bold text-slate-900">Create New Project</h1>
//           </div>
//           <Building2 size={40} className="text-sky-600 opacity-20" />
//         </header>

//         <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          
//           {/* Internal Navigation Tabs */}
//           <div className="flex border-b overflow-x-auto no-scrollbar bg-slate-50/30">
//             <TabButton id="hero" label="Hero & Basic" icon={Layout} />
//             <TabButton id="about" label="Story" icon={Info} />
//             <TabButton id="media" label="Media & Features" icon={ImageIcon} />
//             <TabButton id="social" label="Social & SEO" icon={Share2} />
//           </div>

//           <div className="p-8 md:p-10">
//             {/* HERO SECTION */}
//             {activeTab === "hero" && (
//               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className={labelClass}>Project Name</label>
//                     <input name="name" placeholder="e.g. VS Heights" onChange={handleChange} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Price Range</label>
//                     <div className="relative">
//                       <DollarSign size={16} className="absolute left-4 top-4 text-slate-400" />
//                       <input name="price" placeholder="Starting at $..." onChange={handleChange} className={`${inputClass} pl-10`} />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className={labelClass}>Property Tagline</label>
//                     <input name="tagline" placeholder="Luxury Redefined" onChange={handleChange} className={inputClass} />
//                   </div>
//                   <div>
//                     <label className={labelClass}>Property Category</label>
//                     <select name="category" onChange={handleChange} className={inputClass}>
//                       <option>Residential</option>
//                       <option>Commercial</option>
//                       <option>Industrial</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label className={labelClass}>Hero Background Image URL</label>
//                   <input name="bg_img" placeholder="https://images.unsplash.com/..." onChange={handleChange} className={inputClass} />
//                 </div>
//               </div>
//             )}

//             {/* ABOUT SECTION */}
//             {activeTab === "about" && (
//               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
//                 <div>
//                   <label className={labelClass}>About Section Title</label>
//                   <input name="abouttitle" placeholder="Why invest in this project?" onChange={handleChange} className={inputClass} />
//                 </div>
//                 <div>
//                   <label className={labelClass}>About Image URL</label>
//                   <input name="aboutimg" onChange={handleChange} className={inputClass} />
//                 </div>
//                 <div>
//                   <label className={labelClass}>About Detailed Description</label>
//                   <textarea name="aboutdesc" rows="5" onChange={handleChange} className={inputClass} />
//                 </div>
//               </div>
//             )}

//             {/* MEDIA SECTION */}
//             {activeTab === "media" && (
//               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
//                 <div>
//                   <label className={labelClass}>Gallery Images (Comma Separated)</label>
//                   <textarea name="images" placeholder="url1, url2, url3..." onChange={handleChange} className={inputClass} rows="3" />
//                 </div>
//                 <div>
//                   <label className={labelClass}>Amenities List (Comma Separated)</label>
//                   <input name="amenities" placeholder="Gym, Pool, Security..." onChange={handleChange} className={inputClass} />
//                 </div>
//                 <div>
//                   <label className={labelClass}>Full Address</label>
//                   <div className="relative">
//                     <MapPin size={16} className="absolute left-4 top-4 text-slate-400" />
//                     <textarea name="address" rows="2" className={`${inputClass} pl-10`} onChange={handleChange} />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* SOCIAL SECTION */}
//             {activeTab === "social" && (
//               <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-2">
//                 <div>
//                   <label className={labelClass}>Facebook URL</label>
//                   <input name="facebook" onChange={handleChange} className={inputClass} />
//                 </div>
//                 <div>
//                   <label className={labelClass}>Instagram URL</label>
//                   <input name="instagram" onChange={handleChange} className={inputClass} />
//                 </div>
//                 <div>
//                   <label className={labelClass}>LinkedIn URL</label>
//                   <input name="linkedin" onChange={handleChange} className={inputClass} />
//                 </div>
//                 <div>
//                   <label className={labelClass}>Twitter / X URL</label>
//                   <input name="twitter" onChange={handleChange} className={inputClass} />
//                 </div>
//               </div>
//             )}

//             <div className="mt-12 flex items-center gap-4">
//               <button
//                 type="submit"
//                 className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-sky-600/20 transition-all hover:-translate-y-1 active:scale-[0.98]"
//               >
//                 Publish Project to Live Site
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProject;





import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../Slice/ProjectSlice";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Building2, MapPin, DollarSign,
  Image as ImageIcon, Share2, Layout, Info,
  Dumbbell, Waves, ShieldCheck, ParkingCircle, Wifi
} from "lucide-react";

const AMENITIES = [
  { label: "Gym", icon: Dumbbell },
  { label: "Swimming Pool", icon: Waves },
  { label: "24x7 Security", icon: ShieldCheck },
  { label: "Parking", icon: ParkingCircle },
  { label: "Free WiFi", icon: Wifi },
];

const AddProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hero");

  const [form, setForm] = useState({
    name: "", tagline: "", price: "", category: "Residential",
    bg_img: "", aboutimg: "", abouttitle: "", aboutdesc: "",
    images: [],
    amenities: [],
    address: "",
    facebook: "", linkedin: "", twitter: "", instagram: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📸 Local image upload
  const handleImageUpload = (e) => {
    setForm({ ...form, images: Array.from(e.target.files) });
  };

  // 🏢 Amenities toggle
  const toggleAmenity = (label) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(label)
        ? prev.amenities.filter(a => a !== label)
        : [...prev.amenities, label],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(form));
    navigate("/projects");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 outline-none bg-slate-50/50";
  const labelClass =
    "block text-sm font-semibold text-slate-700 mb-1.5 ml-1";

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      type="button"
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition ${
        activeTab === id
          ? "border-sky-600 text-sky-600 bg-sky-50/50"
          : "border-transparent text-slate-500 hover:text-slate-700"
      }`}
    >
      <Icon size={18} /> {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-sky-600 mb-2">
              <ArrowLeft size={18} /> Back to Projects
            </button>
            <h1 className="text-3xl font-bold">Create New Project</h1>
          </div>
          <Building2 size={40} className="text-sky-600 opacity-20" />
        </header>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl overflow-hidden border">

          {/* TABS */}
          <div className="flex border-b bg-slate-50/30">
            <TabButton id="hero" label="Hero & Basic" icon={Layout} />
            <TabButton id="about" label="Story" icon={Info} />
            <TabButton id="media" label="Media & Features" icon={ImageIcon} />
            <TabButton id="social" label="Social & SEO" icon={Share2} />
          </div>

          <div className="p-8 md:p-10">

            {/* HERO */}
            {activeTab === "hero" && (
              <div className="space-y-6">
                <input name="name" placeholder="Project Name" onChange={handleChange} className={inputClass} />
                <input name="tagline" placeholder="Luxury Redefined" onChange={handleChange} className={inputClass} />
                <input name="price" placeholder="Starting at ₹..." onChange={handleChange} className={inputClass} />
                <input name="bg_img" placeholder="Hero Image URL" onChange={handleChange} className={inputClass} />
              </div>
            )}

            {/* ABOUT */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <input name="abouttitle" placeholder="About Title" onChange={handleChange} className={inputClass} />
                <input name="aboutimg" placeholder="About Image URL" onChange={handleChange} className={inputClass} />
                <textarea name="aboutdesc" rows="4" onChange={handleChange} className={inputClass} />
              </div>
            )}

            {/* MEDIA */}
            {activeTab === "media" && (
              <div className="space-y-6">

                {/* LOCAL IMAGES */}
                <div>
                  <label className={labelClass}>Gallery Images</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className={inputClass}
                  />
                </div>

                {/* AMENITIES */}
                <div>
                  <label className={labelClass}>Amenities</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {AMENITIES.map(({ label, icon: Icon }) => (
                      <button
                        key={label}
                        type="button"
                        onClick={() => toggleAmenity(label)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition ${
                          form.amenities.includes(label)
                            ? "border-sky-600 bg-sky-50 text-sky-600"
                            : "border-slate-200 text-slate-600"
                        }`}
                      >
                        <Icon size={18} /> {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="relative">
                  <MapPin size={16} className="absolute left-4 top-4 text-slate-400" />
                  <textarea
                    name="address"
                    rows="2"
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                    placeholder="Full Address"
                  />
                </div>
              </div>
            )}

            {/* SOCIAL */}
            {activeTab === "social" && (
              <div className="grid md:grid-cols-2 gap-6">
                <input name="facebook" placeholder="Facebook URL" onChange={handleChange} className={inputClass} />
                <input name="instagram" placeholder="Instagram URL" onChange={handleChange} className={inputClass} />
                <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} className={inputClass} />
                <input name="twitter" placeholder="Twitter / X URL" onChange={handleChange} className={inputClass} />
              </div>
            )}

            {/* SUBMIT */}
            <div className="mt-12">
              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl font-bold"
              >
                Publish Project to Live Site
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
