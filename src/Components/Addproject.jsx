
// // // import React, { useState } from "react";
// // // import { useDispatch } from "react-redux";
// // // import { addProject } from "../Slice/ProjectSlice";
// // // import { useNavigate } from "react-router-dom";
// // //  import { ArrowLeft, Building2, MapPin, DollarSign,
// // //   Image as ImageIcon, Share2, Layout, Info,
// // //   Dumbbell, Waves, ShieldCheck, ParkingCircle, Wifi
// // // } from "lucide-react";

// // // const AddProject = () => {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const [activeTab, setActiveTab] = useState("hero");

// // //   const AMENITIES = [
// // //   { label: "Gym", icon: Dumbbell },
// // //   { label: "Swimming Pool", icon: Waves },
// // //   { label: "24x7 Security", icon: ShieldCheck },
// // //   { label: "Parking", icon: ParkingCircle },
// // //   { label: "Free WiFi", icon: Wifi },
// // // ];
// // //    const [form, setForm] = useState({
// // //     name: "", title: "", location: "", description: "",
// // //     bg_img: "", tagline: "", price: "", category: "Residential",
// // //     aboutimg: "", abouttitle: "", aboutdesc: "",
// // //     images: [],
// // //     amenities: [],
// // //     address: "",
// // //     facebook: "", linkedin: "", twitter: "", instagram: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     dispatch(
// // //       addProject({
// // //         ...form,
// // //         images: form.images.split(",").map(i => i.trim()),
// // //         amenities: form.amenities.split(",").map(a => a.trim()),
// // //       })
// // //     );
// // //     navigate("/projects");
// // //   };

// // //   // Helper for input styling
// // //   const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 outline-none transition-all bg-slate-50/50";
// // //   const labelClass = "block text-sm font-semibold text-slate-700 mb-1.5 ml-1";

// // //   const TabButton = ({ id, label, icon: Icon }) => (
// // //     <button
// // //       type="button"
// // //       onClick={() => setActiveTab(id)}
// // //       className={`flex items-center gap-2 px-6 py-3 font-medium transition-all border-b-2 ${
// // //         activeTab === id 
// // //         ? "border-sky-600 text-sky-600 bg-sky-50/50" 
// // //         : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
// // //       }`}
// // //     >
// // //       <Icon size={18} /> {label}
// // //     </button>
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-slate-50/50 py-12 px-6">
// // //       <div className="max-w-4xl mx-auto">
        
// // //         <header className="flex justify-between items-center mb-8">
// // //           <div>
// // //             <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors mb-2">
// // //               <ArrowLeft size={18} /> Back to Projects
// // //             </button>
// // //             <h1 className="text-3xl font-bold text-slate-900">Create New Project</h1>
// // //           </div>
// // //           <Building2 size={40} className="text-sky-600 opacity-20" />
// // //         </header>

// // //         <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          
// // //           {/* Internal Navigation Tabs */}
// // //           <div className="flex border-b overflow-x-auto no-scrollbar bg-slate-50/30">
// // //             <TabButton id="hero" label="Hero & Basic" icon={Layout} />
// // //             <TabButton id="about" label="Story" icon={Info} />
// // //             <TabButton id="media" label="Media & Features" icon={ImageIcon} />
// // //             <TabButton id="social" label="Social & SEO" icon={Share2} />
// // //           </div>

// // //           <div className="p-8 md:p-10">
// // //             {/* HERO SECTION */}
// // //             {activeTab === "hero" && (
// // //               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// // //                 <div className="grid md:grid-cols-2 gap-6">
// // //                   <div>
// // //                     <label className={labelClass}>Project Name</label>
// // //                     <input name="name" placeholder="e.g. VS Heights" onChange={handleChange} className={inputClass} />
// // //                   </div>
// // //                   <div>
// // //                     <label className={labelClass}>Price Range</label>
// // //                     <div className="relative">
// // //                       <DollarSign size={16} className="absolute left-4 top-4 text-slate-400" />
// // //                       <input name="price" placeholder="Starting at $..." onChange={handleChange} className={`${inputClass} pl-10`} />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="grid md:grid-cols-2 gap-6">
// // //                   <div>
// // //                     <label className={labelClass}>Property Tagline</label>
// // //                     <input name="tagline" placeholder="Luxury Redefined" onChange={handleChange} className={inputClass} />
// // //                   </div>
// // //                   <div>
// // //                     <label className={labelClass}>Property Category</label>
// // //                     <select name="category" onChange={handleChange} className={inputClass}>
// // //                       <option>Residential</option>
// // //                       <option>Commercial</option>
// // //                       <option>Industrial</option>
// // //                     </select>
// // //                   </div>
// // //                 </div>
// // //                 <div>
// // //                   <label className={labelClass}>Hero Background Image URL</label>
// // //                   <input name="bg_img" placeholder="https://images.unsplash.com/..." onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* ABOUT SECTION */}
// // //             {activeTab === "about" && (
// // //               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// // //                 <div>
// // //                   <label className={labelClass}>About Section Title</label>
// // //                   <input name="abouttitle" placeholder="Why invest in this project?" onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //                 <div>
// // //                   <label className={labelClass}>About Image URL</label>
// // //                   <input name="aboutimg" onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //                 <div>
// // //                   <label className={labelClass}>About Detailed Description</label>
// // //                   <textarea name="aboutdesc" rows="5" onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* MEDIA SECTION */}
// // //             {activeTab === "media" && (
// // //               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
// // //                 <div>
// // //                   <label className={labelClass}>Gallery Images (Comma Separated)</label>
// // //                   <textarea name="images" placeholder="url1, url2, url3..." onChange={handleChange} className={inputClass} rows="3" />
// // //                 </div>
// // //                 <div>
// // //                   <label className={labelClass}>Amenities List (Comma Separated)</label>
// // //                   <input name="amenities" placeholder="Gym, Pool, Security..." onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //                 <div>
// // //                   <label className={labelClass}>Full Address</label>
// // //                   <div className="relative">
// // //                     <MapPin size={16} className="absolute left-4 top-4 text-slate-400" />
// // //                     <textarea name="address" rows="2" className={`${inputClass} pl-10`} onChange={handleChange} />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* SOCIAL SECTION */}
// // //             {activeTab === "social" && (
// // //               <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-2">
// // //                 <div>
// // //                   <label className={labelClass}>Facebook URL</label>
// // //                   <input name="facebook" onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //                 <div>
// // //                   <label className={labelClass}>Instagram URL</label>
// // //                   <input name="instagram" onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //                 <div>
// // //                   <label className={labelClass}>LinkedIn URL</label>
// // //                   <input name="linkedin" onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //                 <div>
// // //                   <label className={labelClass}>Twitter / X URL</label>
// // //                   <input name="twitter" onChange={handleChange} className={inputClass} />
// // //                 </div>
// // //               </div>
// // //             )}

// // //             <div className="mt-12 flex items-center gap-4">
// // //               <button
// // //                 type="submit"
// // //                 className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-sky-600/20 transition-all hover:-translate-y-1 active:scale-[0.98]"
// // //               >
// // //                 Publish Project to Live Site
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddProject;





// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { addProject } from "../Slice/ProjectSlice";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   ArrowLeft, Building2, MapPin, DollarSign,
// //   Image as ImageIcon, Share2, Layout, Info,
// //   Dumbbell, Waves, ShieldCheck, ParkingCircle, Wifi
// // } from "lucide-react";

// // const AMENITIES = [
// //   { label: "Gym", icon: Dumbbell },
// //   { label: "Swimming Pool", icon: Waves },
// //   { label: "24x7 Security", icon: ShieldCheck },
// //   { label: "Parking", icon: ParkingCircle },
// //   { label: "Free WiFi", icon: Wifi },
// // ];

// // const AddProject = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [activeTab, setActiveTab] = useState("hero");

// //   const [form, setForm] = useState({
// //     name: "", tagline: "", price: "", category: "Residential",
// //     bg_img: "", aboutimg: "", abouttitle: "", aboutdesc: "",
// //     images: [],
// //     amenities: [],
// //     address: "",
// //     facebook: "", linkedin: "", twitter: "", instagram: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   // 📸 Local image upload
// //   const handleImageUpload = (e) => {
// //     setForm({ ...form, images: Array.from(e.target.files) });
// //   };

// //   // 🏢 Amenities toggle
// //   const toggleAmenity = (label) => {
// //     setForm((prev) => ({
// //       ...prev,
// //       amenities: prev.amenities.includes(label)
// //         ? prev.amenities.filter(a => a !== label)
// //         : [...prev.amenities, label],
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(addProject(form));
// //     navigate("/projects");
// //   };

// //   const inputClass =
// //     "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 outline-none bg-slate-50/50";
// //   const labelClass =
// //     "block text-sm font-semibold text-slate-700 mb-1.5 ml-1";

// //   const TabButton = ({ id, label, icon: Icon }) => (
// //     <button
// //       type="button"
// //       onClick={() => setActiveTab(id)}
// //       className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition ${
// //         activeTab === id
// //           ? "border-sky-600 text-sky-600 bg-sky-50/50"
// //           : "border-transparent text-slate-500 hover:text-slate-700"
// //       }`}
// //     >
// //       <Icon size={18} /> {label}
// //     </button>
// //   );

// //   return (
// //     <div className="min-h-screen bg-slate-50/50 py-12 px-6">
// //       <div className="max-w-4xl mx-auto">

// //         {/* HEADER */}
// //         <header className="flex justify-between items-center mb-8">
// //           <div>
// //             <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-sky-600 mb-2">
// //               <ArrowLeft size={18} /> Back to Projects
// //             </button>
// //             <h1 className="text-3xl font-bold">Create New Project</h1>
// //           </div>
// //           <Building2 size={40} className="text-sky-600 opacity-20" />
// //         </header>

// //         <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl overflow-hidden border">

// //           {/* TABS */}
// //           <div className="flex border-b bg-slate-50/30">
// //             <TabButton id="hero" label="Hero & Basic" icon={Layout} />
// //             <TabButton id="about" label="Story" icon={Info} />
// //             <TabButton id="media" label="Media & Features" icon={ImageIcon} />
// //             <TabButton id="social" label="Social & SEO" icon={Share2} />
// //           </div>

// //           <div className="p-8 md:p-10">

// //             {/* HERO */}
// //             {activeTab === "hero" && (
// //               <div className="space-y-6">
// //                 <input name="name" placeholder="Project Name" onChange={handleChange} className={inputClass} />
// //                 <input name="tagline" placeholder="Luxury Redefined" onChange={handleChange} className={inputClass} />
// //                 <input name="price" placeholder="Starting at ₹..." onChange={handleChange} className={inputClass} />
// //                 <input name="bg_img" placeholder="Hero Image URL" onChange={handleChange} className={inputClass} />
// //               </div>
// //             )}

// //             {/* ABOUT */}
// //             {activeTab === "about" && (
// //               <div className="space-y-6">
// //                 <input name="abouttitle" placeholder="About Title" onChange={handleChange} className={inputClass} />
// //                 <input name="aboutimg" placeholder="About Image URL" onChange={handleChange} className={inputClass} />
// //                 <textarea name="aboutdesc" rows="4" onChange={handleChange} className={inputClass} />
// //               </div>
// //             )}

// //             {/* MEDIA */}
// //             {activeTab === "media" && (
// //               <div className="space-y-6">

// //                 {/* LOCAL IMAGES */}
// //                 <div>
// //                   <label className={labelClass}>Gallery Images</label>
// //                   <input
// //                     type="file"
// //                     multiple
// //                     accept="image/*"
// //                     onChange={handleImageUpload}
// //                     className={inputClass}
// //                   />
// //                 </div>

// //                 {/* AMENITIES */}
// //                 <div>
// //                   <label className={labelClass}>Amenities</label>
// //                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
// //                     {AMENITIES.map(({ label, icon: Icon }) => (
// //                       <button
// //                         key={label}
// //                         type="button"
// //                         onClick={() => toggleAmenity(label)}
// //                         className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition ${
// //                           form.amenities.includes(label)
// //                             ? "border-sky-600 bg-sky-50 text-sky-600"
// //                             : "border-slate-200 text-slate-600"
// //                         }`}
// //                       >
// //                         <Icon size={18} /> {label}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* ADDRESS */}
// //                 <div className="relative">
// //                   <MapPin size={16} className="absolute left-4 top-4 text-slate-400" />
// //                   <textarea
// //                     name="address"
// //                     rows="2"
// //                     onChange={handleChange}
// //                     className={`${inputClass} pl-10`}
// //                     placeholder="Full Address"
// //                   />
// //                 </div>
// //               </div>
// //             )}

// //             {/* SOCIAL */}
// //             {activeTab === "social" && (
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <input name="facebook" placeholder="Facebook URL" onChange={handleChange} className={inputClass} />
// //                 <input name="instagram" placeholder="Instagram URL" onChange={handleChange} className={inputClass} />
// //                 <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} className={inputClass} />
// //                 <input name="twitter" placeholder="Twitter / X URL" onChange={handleChange} className={inputClass} />
// //               </div>
// //             )}

// //             {/* SUBMIT */}
// //             <div className="mt-12">
// //               <button
// //                 type="submit"
// //                 className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl font-bold"
// //               >
// //                 Publish Project to Live Site
// //               </button>
// //             </div>

// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProject;



// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { addProject } from "../Slice/ProjectSlice";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   ArrowLeft, Building2, MapPin,
// //   Image as ImageIcon, Share2, Layout, Info,
// //   Dumbbell, Waves, ShieldCheck, ParkingCircle, Wifi
// // } from "lucide-react";

// // const AMENITIES = [
// //   { label: "Gym", icon: Dumbbell },
// //   { label: "Swimming Pool", icon: Waves },
// //   { label: "24x7 Security", icon: ShieldCheck },
// //   { label: "Parking", icon: ParkingCircle },
// //   { label: "Free WiFi", icon: Wifi },
// // ];

// // const AddProject = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [activeTab, setActiveTab] = useState("hero");

// //   const [form, setForm] = useState({
// //     name: "",
// //     tagline: "",
// //     price: "",
// //     category: "Residential",
// //     bg_img: "",
// //     aboutimg: "",
// //     abouttitle: "",
// //     aboutdesc: "",
// //     images: [],
// //     amenities: [],
// //     address: "",
// //     facebook: "",
// //     linkedin: "",
// //     twitter: "",
// //     instagram: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   // 📸 Convert files → URL
// //   const handleImageUpload = (e) => {
// //     const files = Array.from(e.target.files);
// //     const imageUrls = files.map((file) => URL.createObjectURL(file));
// //     setForm({ ...form, images: imageUrls });
// //   };

// //   // 🏢 Amenities toggle
// //   const toggleAmenity = (label) => {
// //     setForm((prev) => ({
// //       ...prev,
// //       amenities: prev.amenities.includes(label)
// //         ? prev.amenities.filter((a) => a !== label)
// //         : [...prev.amenities, label],
// //     }));
// //   };

// //   // 🚀 FINAL SUBMIT
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const projectData = {
// //       id: Date.now(),
// //       name: form.name,
// //       tagline: form.tagline,
// //       price: form.price,
// //       category: form.category,
// //       bg_img: form.bg_img,
// //       aboutimg: form.aboutimg,
// //       abouttitle: form.abouttitle,
// //       aboutdesc: form.aboutdesc,
// //       images: form.images,
// //       amenities: form.amenities,
// //       address: form.address,
// //       social: {
// //         facebook: form.facebook,
// //         instagram: form.instagram,
// //         linkedin: form.linkedin,
// //         twitter: form.twitter,
// //       },
// //       status: "Available",
// //     };

// //     dispatch(addProject(projectData));
// //     navigate("/projects");
// //   };

// //   const inputClass =
// //     "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 outline-none bg-slate-50/50";

// //   const TabButton = ({ id, label, icon: Icon }) => (
// //     <button
// //       type="button"
// //       onClick={() => setActiveTab(id)}
// //       className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition ${
// //         activeTab === id
// //           ? "border-sky-600 text-sky-600 bg-sky-50/50"
// //           : "border-transparent text-slate-500"
// //       }`}
// //     >
// //       <Icon size={18} /> {label}
// //     </button>
// //   );

// //   return (
// //     <div className="min-h-screen bg-slate-50/50 py-12 px-6">
// //       <div className="max-w-4xl mx-auto">

// //         {/* HEADER */}
// //         <header className="flex justify-between items-center mb-8">
// //           <div>
// //             <button
// //               onClick={() => navigate(-1)}
// //               className="flex items-center gap-2 text-slate-500 hover:text-sky-600 mb-2"
// //             >
// //               <ArrowLeft size={18} /> Back to Projects
// //             </button>
// //             <h1 className="text-3xl font-bold">Create New Project</h1>
// //           </div>
// //           <Building2 size={40} className="text-sky-600 opacity-20" />
// //         </header>

// //         <form
// //           onSubmit={handleSubmit}
// //           className="bg-white rounded-3xl shadow-xl overflow-hidden border"
// //         >
// //           {/* TABS */}
// //           <div className="flex border-b bg-slate-50/30">
// //             <TabButton id="hero" label="Hero & Basic" icon={Layout} />
// //             <TabButton id="about" label="Story" icon={Info} />
// //             <TabButton id="media" label="Media & Features" icon={ImageIcon} />
// //             <TabButton id="social" label="Social & SEO" icon={Share2} />
// //           </div>

// //           <div className="p-8 md:p-10">

// //             {/* HERO */}
// //             {activeTab === "hero" && (
// //               <div className="space-y-6">
// //                 <input name="name" placeholder="Project Name" onChange={handleChange} className={inputClass} />
// //                 <input name="tagline" placeholder="Luxury Redefined" onChange={handleChange} className={inputClass} />
// //                 <input name="price" placeholder="Starting at ₹..." onChange={handleChange} className={inputClass} />
// //                 <input name="bg_img" placeholder="Hero Image URL" onChange={handleChange} className={inputClass} />
// //               </div>
// //             )}

// //             {/* ABOUT */}
// //             {activeTab === "about" && (
// //               <div className="space-y-6">
// //                 <input name="abouttitle" placeholder="About Title" onChange={handleChange} className={inputClass} />
// //                 <input name="aboutimg" placeholder="About Image URL" onChange={handleChange} className={inputClass} />
// //                 <textarea name="aboutdesc" rows="4" onChange={handleChange} className={inputClass} />
// //               </div>
// //             )}

// //             {/* MEDIA */}
// //             {activeTab === "media" && (
// //               <div className="space-y-6">

// //                 <input
// //                   type="file"
// //                   multiple
// //                   accept="image/*"
// //                   onChange={handleImageUpload}
// //                   className={inputClass}
// //                 />

// //                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
// //                   {AMENITIES.map(({ label, icon: Icon }) => (
// //                     <button
// //                       key={label}
// //                       type="button"
// //                       onClick={() => toggleAmenity(label)}
// //                       className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition ${
// //                         form.amenities.includes(label)
// //                           ? "border-sky-600 bg-sky-50 text-sky-600"
// //                           : "border-slate-200 text-slate-600"
// //                       }`}
// //                     >
// //                       <Icon size={18} /> {label}
// //                     </button>
// //                   ))}
// //                 </div>

// //                 <div className="relative">
// //                   <MapPin size={16} className="absolute left-4 top-4 text-slate-400" />
// //                   <textarea
// //                     name="address"
// //                     rows="2"
// //                     onChange={handleChange}
// //                     className={`${inputClass} pl-10`}
// //                     placeholder="Full Address"
// //                   />
// //                 </div>
// //               </div>
// //             )}

// //             {/* SOCIAL */}
// //             {activeTab === "social" && (
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <input name="facebook" placeholder="Facebook URL" onChange={handleChange} className={inputClass} />
// //                 <input name="instagram" placeholder="Instagram URL" onChange={handleChange} className={inputClass} />
// //                 <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} className={inputClass} />
// //                 <input name="twitter" placeholder="Twitter / X URL" onChange={handleChange} className={inputClass} />
// //               </div>
// //             )}

// //             {/* SUBMIT */}
// //             <div className="mt-12">
// //               <button
// //                 type="submit"
// //                 className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl font-bold"
// //               >
// //                 Publish Project to Live Site
// //               </button>
// //             </div>

// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProject;


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateDraftProject, addProject } from "../Slice/ProjectSlice";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowLeft, Building2, MapPin,
//   Image as ImageIcon, Share2, Layout, Info,
//   Dumbbell, Waves, ShieldCheck, ParkingCircle, Wifi
// } from "lucide-react";

// const AMENITIES = [
//   { label: "Gym", icon: Dumbbell },
//   { label: "Swimming Pool", icon: Waves },
//   { label: "24x7 Security", icon: ShieldCheck },
//   { label: "Parking", icon: ParkingCircle },
//   { label: "Free WiFi", icon: Wifi },
// ];

// const AddProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("hero");

//   // ✅ SAFE SELECTOR
//   const form = useSelector((state) => state.project?.draftProject) || {};

//  const handleChange = (e) => {
//   const { name, value } = e.target;

//   dispatch(
//     updateDraftProject({
//       [name]: value,
//     })
//   );
// };


//   // 📸 Local image upload
//   const handleImageUpload = (e) => {
//     dispatch(
//       updateDraftProject({
//         images: Array.from(e.target.files),
//       })
//     );
//   };

//   // 🏢 Amenities toggle
//   const toggleAmenity = (label) => {
//     const updated = form.amenities?.includes(label)
//       ? form.amenities.filter((a) => a !== label)
//       : [...(form.amenities || []), label];

//     dispatch(updateDraftProject({ amenities: updated }));
//   };

//   // ✅ SUBMIT
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addProject());
//     navigate("/projects");
//   };

//   const inputClass =
//     "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 outline-none bg-slate-50/50";
//   const labelClass =
//     "block text-sm font-semibold text-slate-700 mb-1.5 ml-1";

//   const TabButton = ({ id, label, icon: Icon }) => (
//     <button
//       type="button"
//       onClick={() => setActiveTab(id)}
//       className={`flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition ${
//         activeTab === id
//           ? "border-sky-600 text-sky-600 bg-sky-50/50"
//           : "border-transparent text-slate-500 hover:text-slate-700"
//       }`}
//     >
//       <Icon size={18} /> {label}
//     </button>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50/50 py-12 px-6">
//       <div className="max-w-4xl mx-auto">

//         {/* HEADER */}
//         <header className="flex justify-between items-center mb-8">
//           <div>
//             <button
//               onClick={() => navigate(-1)}
//               className="flex items-center gap-2 text-slate-500 hover:text-sky-600 mb-2"
//             >
//               <ArrowLeft size={18} /> Back to Projects
//             </button>
//             <h1 className="text-3xl font-bold">Create New Project</h1>
//           </div>
//           <Building2 size={40} className="text-sky-600 opacity-20" />
//         </header>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-3xl shadow-xl overflow-hidden border"
//         >
//           {/* TABS */}
//           <div className="flex border-b bg-slate-50/30">
//             <TabButton id="hero" label="Hero & Basic" icon={Layout} />
//             <TabButton id="about" label="Story" icon={Info} />
//             <TabButton id="media" label="Media & Features" icon={ImageIcon} />
//             <TabButton id="social" label="Social & SEO" icon={Share2} />
//           </div>

//           <div className="p-8 md:p-10">

//             {/* HERO */}
//             {activeTab === "hero" && (
//               <div className="space-y-6">
//                 <input
//                   name="name"
//                   placeholder="Project Name"
//                   value={form.name || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />

//                 <input
//                   name="tagline"
//                   placeholder="Luxury Redefined"
//                   value={form.tagline || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />

//                 <input
//                   name="price"
//                   placeholder="Starting at ₹..."
//                   value={form.price || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />

//                 <input
//                   name="bg_img"
//                   placeholder="Hero Image URL"
//                   value={form.bg_img || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>
//             )}

//             {/* ABOUT */}
//             {activeTab === "about" && (
//               <div className="space-y-6">
//                 <input
//                   name="abouttitle"
//                   placeholder="About Title"
//                   value={form.abouttitle || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />

//                 <input
//                   name="aboutimg"
//                   placeholder="About Image URL"
//                   value={form.aboutimg || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />

//                 <textarea
//                   name="aboutdesc"
//                   rows="4"
//                   value={form.aboutdesc || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>
//             )}

//             {/* MEDIA */}
//             {activeTab === "media" && (
//               <div className="space-y-6">

//                 {/* IMAGES */}
//                 <div>
//                   <label className={labelClass}>Gallery Images</label>
//                   <input
//                     type="file"
//                     multiple
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className={inputClass}
//                   />
//                 </div>

//                 {/* AMENITIES */}
//                 <div>
//                   <label className={labelClass}>Amenities</label>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                     {AMENITIES.map(({ label, icon: Icon }) => (
//                       <button
//                         key={label}
//                         type="button"
//                         onClick={() => toggleAmenity(label)}
//                         className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition ${
//                           form.amenities?.includes(label)
//                             ? "border-sky-600 bg-sky-50 text-sky-600"
//                             : "border-slate-200 text-slate-600"
//                         }`}
//                       >
//                         <Icon size={18} /> {label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* ADDRESS */}
//                 <div className="relative">
//                   <MapPin size={16} className="absolute left-4 top-4 text-slate-400" />
//                   <textarea
//                     name="address"
//                     rows="2"
//                     value={form.address || ""}
//                     onChange={handleChange}
//                     className={`${inputClass} pl-10`}
//                     placeholder="Full Address"
//                   />
//                 </div>
//               </div>
//             )}

//             {/* SOCIAL */}
//             {activeTab === "social" && (
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="facebook"
//                   placeholder="Facebook URL"
//                   value={form.facebook || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//                 <input
//                   name="instagram"
//                   placeholder="Instagram URL"
//                   value={form.instagram || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//                 <input
//                   name="linkedin"
//                   placeholder="LinkedIn URL"
//                   value={form.linkedin || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//                 <input
//                   name="twitter"
//                   placeholder="Twitter / X URL"
//                   value={form.twitter || ""}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>
//             )}

//             {/* SUBMIT */}
//             <div className="mt-12">
//               <button
//                 type="submit"
//                 className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl font-bold"
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




// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProject } from "../Slice/ProjectSlice";
// import { useNavigate } from "react-router-dom";

// const AddProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     tagline: "",
//     price: "",
//     bg_img: "",
//     abouttitle: "",
//     aboutimg: "",
//     aboutdesc: "",
//     images: "",
//     amenities: "",
//     address: "",
//     facebook: "",
//     instagram: "",
//     linkedin: "",
//     twitter: ""
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(
//       addProject({
//         ...form,
//         bg_img: form.bg_img.split(","),
//         images: form.images.split(","),
//         amenities: form.amenities.split(",")
//       })
//     );

//     navigate("/projects");
//   };

//   return (
//     <div className="p-10 text-white">
//       <h1 className="text-3xl mb-6">Add Property</h1>

//       <form onSubmit={handleSubmit} className="grid gap-4">
//         <input name="name" placeholder="Project Name" onChange={handleChange} />
//         <input name="tagline" placeholder="Tagline" onChange={handleChange} />
//         <input name="price" placeholder="Price" onChange={handleChange} />
//         <input name="bg_img" placeholder="BG Images comma separated" onChange={handleChange} />

//         <input name="abouttitle" placeholder="About Title" onChange={handleChange} />
//         <input name="aboutimg" placeholder="About Image" onChange={handleChange} />
//         <textarea name="aboutdesc" placeholder="About Desc" onChange={handleChange} />

//         <input name="images" placeholder="Gallery images comma separated" onChange={handleChange} />
//         <input name="amenities" placeholder="Amenities comma separated" onChange={handleChange} />
//         <input name="address" placeholder="Address" onChange={handleChange} />

//         <input name="facebook" placeholder="Facebook" onChange={handleChange} />
//         <input name="instagram" placeholder="Instagram" onChange={handleChange} />
//         <input name="linkedin" placeholder="Linkedin" onChange={handleChange} />
//         <input name="twitter" placeholder="Twitter" onChange={handleChange} />

//         <button className="bg-blue-600 p-3">Save</button>
//       </form>
//     </div>
//   );
// };

// export default AddProject;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProject } from "../Slice/ProjectSlice";
// import { useNavigate } from "react-router-dom";

// const AddProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     tagline: "",
//     price: "",
//     bg_img: "",
//     abouttitle: "",
//     aboutimg: "",
//     aboutdesc: "",
//     images: "",
//     amenities: "",
//     address: "",
//     facebook: "",
//     instagram: "",
//     linkedin: "",
//     twitter: ""
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(
//       addProject({
//         ...form,
//         bg_img: form.bg_img.split(","),
//         images: form.images.split(","),
//         amenities: form.amenities.split(",")
//       })
//     );

//     navigate("/projects");
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 flex justify-center items-center p-6">
//       <div className="w-full max-w-4xl bg-slate-800 p-8 rounded-2xl shadow-xl">
//         <h1 className="text-3xl font-bold text-white mb-8">
//           Add Property
//         </h1>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          
//           {/* Basic */}
//           <input className="input" name="name" placeholder="Project Name" onChange={handleChange} />
//           <input className="input" name="tagline" placeholder="Tagline" onChange={handleChange} />
//           <input className="input" name="price" placeholder="Price" onChange={handleChange} />
//           <input className="input" name="address" placeholder="Address" onChange={handleChange} />

//           {/* Images */}
//           <input className="input md:col-span-2" type="file" name="bg_img" placeholder="Background Images (comma separated)" onChange={handleChange} />
//           <input className="input" type="file" name="aboutimg" placeholder="About Image URL" onChange={handleChange} />
//           <input className="input" name="abouttitle" placeholder="About Title" onChange={handleChange} />

//           <textarea className="input md:col-span-2 h-28" name="aboutdesc" placeholder="About Description" onChange={handleChange} />

//           <input className="input md:col-span-2" type="file" name="images" placeholder="Gallery Images (comma separated)" onChange={handleChange} />
//           <input className="input md:col-span-2" name="amenities" placeholder="Amenities (comma separated)" onChange={handleChange} />

//           {/* Social */}
//           <input className="input" name="facebook" placeholder="Facebook Link" onChange={handleChange} />
//           <input className="input" name="instagram" placeholder="Instagram Link" onChange={handleChange} />
//           <input className="input" name="linkedin" placeholder="LinkedIn Link" onChange={handleChange} />
//           <input className="input" name="twitter" placeholder="Twitter Link" onChange={handleChange} />

//           <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold">
//             Save Project
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProject;




// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProject } from "../Slice/ProjectSlice";
// import { useNavigate } from "react-router-dom";
// import { Camera, MapPin, Globe, Layout, CheckCircle } from "lucide-react";

// const AddProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "", tagline: "", price: "", bg_img: "",
//     abouttitle: "", aboutimg: "", aboutdesc: "",
//     images: "", amenities: "", address: "",
//     facebook: "", instagram: "", linkedin: "", twitter: ""
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       addProject({
//         ...form,
//         bg_img: form.bg_img.split(","),
//         images: form.images.split(","),
//         amenities: form.amenities.split(",")
//       })
//     );
//     navigate("/projects");
//   };

//   const SectionHeader = ({ icon: Icon, title }) => (
//     <div className="flex items-center gap-2 mb-4 mt-6 first:mt-0">
//       <Icon size={18} className="text-blue-400" />
//       <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">{title}</h2>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#0f172a] flex justify-center items-center p-4 md:p-10">
//       <div className="w-full max-w-5xl bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
        
//         <header className="mb-10">
//           <h1 className="text-4xl font-light text-white italic">Create <span className="font-bold not-italic">Project</span></h1>
//           <p className="text-slate-400 mt-2">Enter the details to showcase your new property.</p>
//         </header>

//         <form onSubmit={handleSubmit} className="space-y-8">
          
//           {/* Section: Core Identity */}
//           <section>
//             <SectionHeader icon={Layout} title="Identity & Pricing" />
//             <div className="grid md:grid-cols-2 gap-4">
//               <input className="admin-input" name="name" placeholder="Project Name (e.g. Skyline Heights)" onChange={handleChange} />
//               <input className="admin-input" name="tagline" placeholder="Tagline (e.g. Living Elevated)" onChange={handleChange} />
//               <input className="admin-input" name="price" placeholder="Starting Price (e.g. $1.2M)" onChange={handleChange} />
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3.5 text-slate-500" size={18} />
//                 <input className="admin-input pl-10" name="address" placeholder="Property Address" onChange={handleChange} />
//               </div>
//             </div>
//           </section>

//           {/* Section: Visuals */}
//           <section>
//             <SectionHeader icon={Camera} title="Media Assets" />
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="md:col-span-2">
//                 <label className="text-xs text-slate-500 mb-1 ml-1 block">Hero Backgrounds (URLs, comma-separated)</label>
//                 <input className="admin-input" name="bg_img" placeholder="img1.jpg, img2.jpg..." onChange={handleChange} />
//               </div>
//               <input className="admin-input" name="aboutimg" placeholder="About Section Image URL" onChange={handleChange} />
//               <input className="admin-input" name="abouttitle" placeholder="About Section Title" onChange={handleChange} />
//               <div className="md:col-span-2">
//                 <label className="text-xs text-slate-500 mb-1 ml-1 block">Gallery Collection (URLs, comma-separated)</label>
//                 <input className="admin-input" name="images" placeholder="gallery1.jpg, gallery2.jpg..." onChange={handleChange} />
//               </div>
//             </div>
//           </section>

//           {/* Section: Details */}
//           <section>
//             <SectionHeader icon={CheckCircle} title="Features" />
//             <textarea className="admin-input h-32 mb-4" name="aboutdesc" placeholder="Detailed property description..." onChange={handleChange} />
//             <input className="admin-input" name="amenities" placeholder="Amenities (e.g. Infinity Pool, Gym, 24/7 Security)" onChange={handleChange} />
//           </section>

//           {/* Section: Social */}
//           <section>
//             <SectionHeader icon={Globe} title="Social Links" />
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <input className="admin-input text-sm" name="facebook" placeholder="Facebook" onChange={handleChange} />
//               <input className="admin-input text-sm" name="instagram" placeholder="Instagram" onChange={handleChange} />
//               <input className="admin-input text-sm" name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
//               <input className="admin-input text-sm" name="twitter" placeholder="Twitter" onChange={handleChange} />
//             </div>
//           </section>

//           <div className="pt-6 border-t border-white/5">
//             <button className="w-full md:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/20">
//               Publish Project
//             </button>
//           </div>
//         </form>
//       </div>

//       <style jsx>{`
//         .admin-input {
//           @apply w-full bg-slate-900/50 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AddProject;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProject } from "../Slice/ProjectSlice";
// import { useNavigate } from "react-router-dom";
// import { 
//   Camera, MapPin, Globe, Layout, CheckCircle, 
//   Sparkles, Plus, Trash2, Waves, Dumbbell, ShieldCheck, Car, Send 
// } from "lucide-react";

// // The master list of icons used by both Admin and Frontend
// export const iconOptions = {
//   "Infinity Pool": <Waves />,
//   "Modern Gym": <Dumbbell />,
//   "24/7 Security": <ShieldCheck />,
//   "Private Parking": <Car />,
//   "Green Garden": <Sparkles />,
// };

// const AddProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "", tagline: "", price: "", address: "",
//     bg_img: "", aboutimg: "", abouttitle: "", aboutdesc: "",
//     images: "", facebook: "", instagram: "", linkedin: "", twitter: ""
//   });

//   const [amenities, setAmenities] = useState([{ name: "Infinity Pool", desc: "" }]);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleAmenityChange = (index, field, value) => {
//     const newAmenities = [...amenities];
//     newAmenities[index][field] = value;
//     setAmenities(newAmenities);
//   };

//   const addAmenityField = () => setAmenities([...amenities, { name: "Infinity Pool", desc: "" }]);
//   const removeAmenity = (index) => setAmenities(amenities.filter((_, i) => i !== index));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addProject({
//       ...form,
//       amenities, // Array of objects {name, desc}
//       bg_img: form.bg_img.split(","),
//       images: form.images.split(","),
//     }));
//     navigate("/projects");
//   };

//   return (
//     <div className="min-h-screen bg-[#020617] text-slate-300 p-6 lg:p-12">
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
        
//         {/* FORM COLUMN */}
//         <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
//           <header>
//             <h1 className="text-4xl font-bold text-white tracking-tight">Create Project</h1>
//             <p className="text-slate-500 mt-2 italic">Fill in the details to generate a luxury showcase.</p>
//           </header>

//           {/* Section: Basic Identity */}
//           <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-white/5 space-y-4">
//             <h2 className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
//                <Layout size={18}/> Identity
//             </h2>
//             <div className="grid md:grid-cols-2 gap-4">
//               <input className="creative-input" name="name" placeholder="Project Name" onChange={handleChange} />
//               <input className="creative-input" name="price" placeholder="Price (e.g. $1.5M)" onChange={handleChange} />
//               <input className="creative-input md:col-span-2" name="tagline" placeholder="Tagline" onChange={handleChange} />
//               <input className="creative-input md:col-span-2" name="address" placeholder="Physical Address" onChange={handleChange} />
//             </div>
//           </div>

//           {/* Section: Amenities (Dropdown Logic) */}
//           <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-white/5">
//             <div className="flex justify-between items-center mb-6">
//                <h2 className="text-blue-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
//                  <CheckCircle size={18}/> Amenities
//                </h2>
//                <button type="button" onClick={addAmenityField} className="text-xs bg-blue-600 px-3 py-1 rounded-full text-white hover:bg-blue-500 transition-all">+ Add</button>
//             </div>
//             <div className="space-y-4">
//               {amenities.map((item, index) => (
//                 <div key={index} className="flex flex-col md:flex-row gap-3 bg-slate-950/50 p-4 rounded-xl border border-white/5">
//                   <select 
//                     className="creative-input md:w-1/3" 
//                     value={item.name} 
//                     onChange={(e) => handleAmenityChange(index, "name", e.target.value)}
//                   >
//                     {Object.keys(iconOptions).map(name => <option key={name} value={name}>{name}</option>)}
//                   </select>
//                   <input 
//                     className="creative-input md:w-full" 
//                     placeholder="Brief description..." 
//                     value={item.desc}
//                     onChange={(e) => handleAmenityChange(index, "desc", e.target.value)}
//                   />
//                   <button type="button" onClick={() => removeAmenity(index)} className="text-red-500 px-2"><Trash2 size={18}/></button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Section: Media */}
//           <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-white/5 space-y-4">
//             <h2 className="text-blue-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
//                <Camera size={18}/> Media
//             </h2>
//             <input className="creative-input" name="bg_img" placeholder="Hero Images (comma separated URLs)" onChange={handleChange} />
//             <input className="creative-input" name="images" placeholder="Gallery Images (comma separated URLs)" onChange={handleChange} />
//             <div className="grid md:grid-cols-2 gap-4">
//               <input className="creative-input" name="aboutimg" placeholder="About Image URL" onChange={handleChange} />
//               <input className="creative-input" name="abouttitle" placeholder="About Title" onChange={handleChange} />
//             </div>
//             <textarea className="creative-input h-32" name="aboutdesc" placeholder="Full Description" onChange={handleChange} />
//           </div>

//           <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
//             Publish Property
//           </button>
//         </form>

//         {/* INFO SIDEBAR */}
//         <div className="hidden lg:block space-y-6">
//           <div className="sticky top-10 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-500/20">
//             <h3 className="text-white text-xl font-bold mb-4">Design Guide</h3>
//             <p className="text-blue-100 text-sm leading-relaxed mb-4">
//               The front-end uses a <b>Minimalist-Luxury</b> aesthetic. For the best result:
//             </p>
//             <ul className="text-xs text-blue-50 space-y-3">
//               <li>• Use high-quality landscape photos for the Hero section.</li>
//               <li>• Keep descriptions concise (2-3 sentences).</li>
//               <li>• Amenities will automatically display their corresponding icons.</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .creative-input {
//           @apply w-full bg-slate-950/50 border border-white/10 rounded-xl p-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AddProject;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProject } from "../Slice/ProjectSlice";
// import { useNavigate } from "react-router-dom";
// import { 
//   Camera, MapPin, Globe, Layout, CheckCircle, 
//   Plus, Trash2, Image as ImageIcon, Sparkles, Waves, Dumbbell, ShieldCheck, Car 
// } from "lucide-react";

// const amenityOptions = [
//   { name: "Infinity Pool", icon: <Waves size={18} /> },
//   { name: "Modern Gym", icon: <Dumbbell size={18} /> },
//   { name: "24/7 Security", icon: <ShieldCheck size={18} /> },
//   { name: "Private Parking", icon: <Car size={18} /> },
// ];

// const AddProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "", tagline: "", price: "", address: "",
//     abouttitle: "", aboutdesc: "",
//     facebook: "", instagram: "", linkedin: "", twitter: ""
//   });

//   const [heroImages, setHeroImages] = useState([]);
//   const [aboutImg, setAboutImg] = useState(null);
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [amenities, setAmenities] = useState([{ name: "Infinity Pool", desc: "" }]);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleAmenityChange = (index, field, value) => {
//     const newArr = [...amenities];
//     newArr[index][field] = value;
//     setAmenities(newArr);
//   };

//   const addAmenity = () => setAmenities([...amenities, { name: "Infinity Pool", desc: "" }]);
//   const removeAmenity = (index) => setAmenities(amenities.filter((_, i) => i !== index));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addProject({ ...form, heroImages, aboutImg, galleryImages, amenities }));
//     navigate("/projects");
//   };

//   const SectionHeader = ({ icon: Icon, title, subtitle }) => (
//     <div className="mb-6">
//       <div className="flex items-center gap-3 text-blue-600">
//         <Icon size={22} />
//         <h2 className="text-xl font-bold tracking-tight text-slate-900">{title}</h2>
//       </div>
//       {subtitle && <p className="text-xs text-slate-500 mt-1 ml-9 font-medium">{subtitle}</p>}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-600 p-4 md:p-12">
//       <div className="max-w-6xl mx-auto">
//         <header className="mb-12">
//           <h1 className="text-5xl font-extrabold text-slate-900 tracking-tighter">
//             Publish <span className="text-blue-600">Property</span>
//           </h1>
//           <p className="text-slate-500 mt-2 text-lg">Craft a high-end visual experience for your clients.</p>
//         </header>

//         <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          
//           <div className="lg:col-span-2 space-y-8">
//             {/* 1. Core Details */}
//             <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
//               <SectionHeader icon={Layout} title="Property Identity" subtitle="Basic information and market pricing." />
//               <div className="grid md:grid-cols-2 gap-4 mt-4">
//                 <input className="admin-input" name="name" placeholder="Project Name" onChange={handleChange} />
//                 <input className="admin-input" name="price" placeholder="Price (e.g. $1.5M)" onChange={handleChange} />
//                 <input className="admin-input md:col-span-2" name="tagline" placeholder="Tagline (e.g. Elevating Urban Living)" onChange={handleChange} />
//                 <div className="relative md:col-span-2">
//                   <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
//                   <input className="admin-input pl-10" name="address" placeholder="Physical Address" onChange={handleChange} />
//                 </div>
//               </div>
//             </section>

//             {/* 2. Amenities */}
//             <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
//               <div className="flex justify-between items-center mb-6">
//                 <SectionHeader icon={CheckCircle} title="Amenities" subtitle="Select features and add descriptions." />
//                 <button type="button" onClick={addAmenity} className="p-2 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-all shadow-md">
//                   <Plus size={20}/>
//                 </button>
//               </div>
//               <div className="space-y-3">
//                 {amenities.map((item, index) => (
//                   <div key={index} className="flex gap-3 items-center">
//                     <select 
//                       className="admin-input w-1/3 bg-slate-50" 
//                       value={item.name}
//                       onChange={(e) => handleAmenityChange(index, "name", e.target.value)}
//                     >
//                       {amenityOptions.map(opt => <option key={opt.name} value={opt.name}>{opt.name}</option>)}
//                     </select>
//                     <input 
//                       className="admin-input flex-1" 
//                       placeholder="Short description (e.g. Olympic Sized)"
//                       onChange={(e) => handleAmenityChange(index, "desc", e.target.value)}
//                     />
//                     <button type="button" onClick={() => removeAmenity(index)} className="p-3 text-slate-400 hover:text-red-500 transition-colors">
//                       <Trash2 size={20}/>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* 3. Socials */}
//             <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
//               <SectionHeader icon={Globe} title="Social Links" subtitle="Connect with your community." />
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//                 <input className="admin-input" name="facebook" placeholder="Facebook" onChange={handleChange} />
//                 <input className="admin-input" name="instagram" placeholder="Instagram" onChange={handleChange} />
//                 <input className="admin-input" name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
//                 <input className="admin-input" name="twitter" placeholder="Twitter" onChange={handleChange} />
//               </div>
//             </section>
//           </div>

//           {/* Right Sidebar */}
//           <div className="space-y-8">
//             <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200">
//               <SectionHeader icon={Sparkles} title="Hero Images" />
//               <div className="mt-4 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors relative bg-slate-50/50">
//                 <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setHeroImages([...e.target.files])} />
//                 <ImageIcon className="mx-auto text-slate-400 mb-2" size={32} />
//                 <p className="text-xs font-medium text-slate-500">Upload Hero Backgrounds</p>
//                 {heroImages.length > 0 && <p className="text-blue-600 text-xs mt-2 font-bold">{heroImages.length} files ready</p>}
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200">
//               <SectionHeader icon={Layout} title="About Section" />
//               <input type="file" className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4" onChange={(e) => setAboutImg(e.target.files[0])} />
//               <input className="admin-input mb-3" name="abouttitle" placeholder="About Title" onChange={handleChange} />
//               <textarea className="admin-input h-24" name="aboutdesc" placeholder="About Description" onChange={handleChange} />
//             </div>

//             <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200">
//               <SectionHeader icon={Camera} title="Gallery" />
//               <div className="mt-4 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors relative bg-slate-50/50">
//                 <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setGalleryImages([...e.target.files])} />
//                 <Camera className="mx-auto text-slate-400 mb-2" size={32} />
//                 <p className="text-xs font-medium text-slate-500">Add Gallery Collection</p>
//                 {galleryImages.length > 0 && <p className="text-blue-600 text-xs mt-2 font-bold">{galleryImages.length} images added</p>}
//               </div>
//             </div>

//             <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
//               Publish Project <CheckCircle size={20}/>
//             </button>
//           </div>
//         </form>
//       </div>

//       <style jsx>{`
//         .admin-input {
//           @apply w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AddProject;



// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProject } from "../Slice/ProjectSlice";
// import { useNavigate } from "react-router-dom";

// const AddProject = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     tagline: "",
//     price: "",
//     bg_img: "",
//     abouttitle: "",
//     aboutimg: "",
//     aboutdesc: "",
//     images: "",
//     amenities: "",
//     address: "",
//     facebook: "",
//     instagram: "",
//     linkedin: "",
//     twitter: ""
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(
//       addProject({
//         ...form,
//         bg_img: form.bg_img.split(","),
//         images: form.images.split(","),
//         amenities: form.amenities.split(",")
//       })
//     );

//     navigate("/projects");
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 flex justify-center items-center p-6">
//       <div className="w-full max-w-4xl bg-slate-800 p-8 rounded-2xl shadow-xl">
//         <h1 className="text-3xl font-bold text-white mb-8">
//           Add Property
//         </h1>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          
//           {/* Basic */}
//           <input className="input" name="name" placeholder="Project Name" onChange={handleChange} />
//           <input className="input" name="tagline" placeholder="Tagline" onChange={handleChange} />
//           <input className="input" name="price" placeholder="Price" onChange={handleChange} />
//           <input className="input" name="address" placeholder="Address" onChange={handleChange} />

//           {/* Images */}
//           <input className="input md:col-span-2" name="bg_img" placeholder="Background Images (comma separated)" onChange={handleChange} />
//           <input className="input" name="aboutimg" placeholder="About Image URL" onChange={handleChange} />
//           <input className="input" name="abouttitle" placeholder="About Title" onChange={handleChange} />

//           <textarea className="input md:col-span-2 h-28" name="aboutdesc" placeholder="About Description" onChange={handleChange} />

//           <input className="input md:col-span-2" name="images" placeholder="Gallery Images (comma separated)" onChange={handleChange} />
//           <input className="input md:col-span-2" name="amenities" placeholder="Amenities (comma separated)" onChange={handleChange} />

//           {/* Social */}
//           <input className="input" name="facebook" placeholder="Facebook Link" onChange={handleChange} />
//           <input className="input" name="instagram" placeholder="Instagram Link" onChange={handleChange} />
//           <input className="input" name="linkedin" placeholder="LinkedIn Link" onChange={handleChange} />
//           <input className="input" name="twitter" placeholder="Twitter Link" onChange={handleChange} />

//           <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold">
//             Save Project
//           </button>

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
  Plus, Trash2, Image as ImageIcon, MapPin, Globe, 
  Waves, Dumbbell, ShieldCheck, Car, CheckCircle, 
  Facebook, Instagram, Linkedin, Twitter, UploadCloud, Info
} from "lucide-react";

const amenityOptions = [
  { name: "Infinity Pool", icon: <Waves size={18} className="text-blue-400" /> },
  { name: "Modern Gym", icon: <Dumbbell size={18} className="text-blue-400" /> },
  { name: "24/7 Security", icon: <ShieldCheck size={18} className="text-blue-400" /> },
  { name: "Private Parking", icon: <Car size={18} className="text-blue-400" /> },
];

const AddProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Integrated Form State
  const [form, setForm] = useState({
    name: "", tagline: "", price: "", address: "",
    abouttitle: "", aboutdesc: "", facebook: "",
    instagram: "", linkedin: "", twitter: ""
  });

  // Specialized State for Complex Fields
  const [amenities, setAmenities] = useState([{ name: "Modern Gym", desc: "" }]);
  const [media, setMedia] = useState({ bg_img: [], images: [], aboutimg: null });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e, key, isMultiple = false) => {
    const selected = Array.from(e.target.files);
    setMedia(prev => ({
      ...prev,
      [key]: isMultiple ? [...prev[key], ...selected] : selected[0]
    }));
  };

  const updateAmenity = (idx, field, val) => {
    const updated = [...amenities];
    updated[idx][field] = val;
    setAmenities(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Serialize files for Redux (Generating temporary URLs for local previewing)
    const mediaURLs = {
      bg_img: media.bg_img.map(f => URL.createObjectURL(f)),
      images: media.images.map(f => URL.createObjectURL(f)),
      aboutimg: media.aboutimg ? URL.createObjectURL(media.aboutimg) : ""
    };

    dispatch(addProject({
      ...form,
      ...mediaURLs,
      amenities: amenities.filter(a => a.name) // Removes empty rows
    }));
    
    navigate("/projects");
  };

  const inputStyle = "w-full bg-slate-900/50 border border-white/10 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600";
  const sectionCard = "bg-slate-900/30 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-8 shadow-xl";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-white">Add Property Profile</h1>
          <p className="text-slate-500 mt-2">Create a comprehensive listing with media and luxury features.</p>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT & CENTER: Main Content --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Basic Info */}
            <div className={sectionCard}>
              <h3 className="text-white font-semibold flex items-center gap-2 mb-6 text-xl">
                <MapPin size={20} className="text-blue-500" /> Essential Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 ml-1">Property Name</label>
                  <input className={inputStyle} name="name" placeholder="Skyline Tower" onChange={handleChange} required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 ml-1">Tagline</label>
                  <input className={inputStyle} name="tagline" placeholder="Modern Living Redefined" onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 ml-1">Starting Price</label>
                  <input className={inputStyle} name="price" placeholder="$500,000" onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 ml-1">Location / Address</label>
                  <input className={inputStyle} name="address" placeholder="123 Avenue, Dubai" onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className={sectionCard}>
              <h3 className="text-white font-semibold flex items-center gap-2 mb-6 text-xl">
                <Info size={20} className="text-blue-500" /> Detailed Narrative
              </h3>
              <div className="space-y-6">
                <input className={inputStyle} name="abouttitle" placeholder="About Section Title (e.g. Why Choose Us?)" onChange={handleChange} />
                <textarea className={`${inputStyle} h-32`} name="aboutdesc" placeholder="Write a compelling description of the property..." onChange={handleChange} />
              </div>
            </div>

            {/* Amenities Management */}
            <div className={sectionCard}>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-white font-semibold flex items-center gap-2 text-xl">
                  <CheckCircle size={20} className="text-blue-500" /> Luxury Amenities
                </h3>
                <button 
                  type="button"
                  onClick={() => setAmenities([...amenities, { name: "Modern Gym", desc: "" }])} 
                  className="bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white px-4 py-2 rounded-xl transition-all flex items-center gap-2 text-sm font-bold border border-blue-500/20"
                >
                  <Plus size={16} /> Add Amenity
                </button>
              </div>
              <div className="space-y-4">
                {amenities.map((item, idx) => {
                  const opt = amenityOptions.find(o => o.name === item.name);
                  return (
                    <div key={idx} className="flex gap-4 items-center p-5 bg-slate-950/40 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-all">
                      <div className="h-12 w-12 flex items-center justify-center bg-slate-900 rounded-xl border border-white/10 text-blue-400">
                        {opt?.icon}
                      </div>
                      <div className="flex-1 grid md:grid-cols-2 gap-4">
                        <select 
                          className="bg-transparent text-white font-bold outline-none cursor-pointer" 
                          value={item.name} 
                          onChange={(e) => updateAmenity(idx, "name", e.target.value)}
                        >
                          {amenityOptions.map(o => <option key={o.name} value={o.name} className="bg-slate-900">{o.name}</option>)}
                        </select>
                        <input 
                          className="bg-transparent border-b border-white/10 text-sm focus:border-blue-500 outline-none transition-colors" 
                          placeholder="Feature details (e.g. 24/7 access)..." 
                          value={item.desc}
                          onChange={(e) => updateAmenity(idx, "desc", e.target.value)}
                        />
                      </div>
                      <button type="button" onClick={() => setAmenities(amenities.filter((_, i) => i !== idx))} className="opacity-0 group-hover:opacity-100 p-2 text-slate-500 hover:text-red-500 transition-all">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Media & Social --- */}
          <div className="space-y-8">
            
            {/* Media Assets */}
            <div className={sectionCard}>
              <h3 className="text-white font-semibold flex items-center gap-2 mb-6 text-xl">
                <ImageIcon size={20} className="text-blue-500" /> Property Media
              </h3>
              <div className="space-y-5">
                {/* Hero BG Upload */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-500">Background Images</label>
                  <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:border-blue-500/50 bg-slate-900/50 transition-all">
                    <UploadCloud className="text-slate-500 mb-1" size={20} />
                    <span className="text-[10px] text-slate-400">Select Files</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleFileChange(e, "bg_img", true)} />
                    {media.bg_img.length > 0 && <span className="mt-1 text-[10px] text-blue-400 font-bold">{media.bg_img.length} added</span>}
                  </label>
                </div>

                {/* About Image Upload */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-500">About Feature Image</label>
                  <label className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-white/5 cursor-pointer hover:bg-slate-800 transition-all">
                    <ImageIcon size={18} className="text-slate-500" />
                    <span className="text-xs">{media.aboutimg ? "Image Selected" : "Upload Image"}</span>
                    <input type="file" className="hidden" onChange={(e) => handleFileChange(e, "aboutimg")} />
                  </label>
                </div>

                {/* Gallery Upload */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-500">Gallery Photos</label>
                  <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:border-blue-500/50 bg-slate-900/50 transition-all">
                    <span className="text-[10px] text-slate-400">Click to upload gallery</span>
                    <input type="file" multiple className="hidden" onChange={(e) => handleFileChange(e, "images", true)} />
                    {media.images.length > 0 && <span className="mt-1 text-[10px] text-blue-400 font-bold">{media.images.length} files</span>}
                  </label>
                </div>
              </div>
            </div>

            {/* Social Connectivity */}
            <div className={sectionCard}>
              <h3 className="text-white font-semibold flex items-center gap-2 mb-6 text-xl">
                <Globe size={20} className="text-blue-500" /> Social Links
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-xl border border-white/5">
                  <Facebook size={16} className="ml-2 text-slate-600" />
                  <input className="bg-transparent w-full text-xs outline-none" name="facebook" placeholder="Facebook URL" onChange={handleChange} />
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-xl border border-white/5">
                  <Instagram size={16} className="ml-2 text-slate-600" />
                  <input className="bg-transparent w-full text-xs outline-none" name="instagram" placeholder="Instagram URL" onChange={handleChange} />
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-xl border border-white/5">
                  <Linkedin size={16} className="ml-2 text-slate-600" />
                  <input className="bg-transparent w-full text-xs outline-none" name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-xl border border-white/5">
                  <Twitter size={16} className="ml-2 text-slate-600" />
                  <input className="bg-transparent w-full text-xs outline-none" name="twitter" placeholder="Twitter URL" onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* Submission */}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-5 rounded-[2rem] font-bold text-white shadow-2xl shadow-blue-600/20 transition-all transform active:scale-95 text-lg">
              Publish Listing
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProject;