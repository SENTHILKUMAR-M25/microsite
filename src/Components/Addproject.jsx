import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../Slice/ProjectSlice";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, MapPin, DollarSign, FileText, Plus } from "lucide-react";

const AddProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    price: "",
    category: "Residential",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject({ ...form, id: Date.now() }));
    navigate("/projects");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-sky-600 mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </button>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="bg-sky-600 p-8 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Plus className="bg-white/20 rounded-lg p-1" />
              New Property Listing
            </h2>
            <p className="text-sky-100 text-sm mt-1">Fill in the details to add a new property to your portfolio.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Title Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Building2 size={16} className="text-sky-500" /> Project Title
              </label>
              <input
                name="title"
                required
                className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="e.g. Blue Horizon Luxury Villas"
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Location Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <MapPin size={16} className="text-sky-500" /> Location
                </label>
                <input
                  name="location"
                  required
                  className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition"
                  placeholder="City, State"
                  onChange={handleChange}
                />
              </div>

              {/* Price Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <DollarSign size={16} className="text-sky-500" /> Asking Price
                </label>
                <input
                  name="price"
                  type="text"
                  className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition"
                  placeholder="e.g. $500,000"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Category Toggle */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Property Category</label>
              <select 
                name="category"
                className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition bg-white"
                onChange={handleChange}
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Land">Land</option>
              </select>
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <FileText size={16} className="text-sky-500" /> Detailed Description
              </label>
              <textarea
                name="description"
                rows="4"
                className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="Highlight the key features, amenities, and selling points..."
                onChange={handleChange}
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="bg-sky-600 text-white font-bold py-4 rounded-xl w-full shadow-lg shadow-sky-200 hover:bg-sky-700 hover:-translate-y-0.5 transition-all"
              >
                Publish Listing
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                By publishing, this project will be immediately visible in your portfolio grid.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;