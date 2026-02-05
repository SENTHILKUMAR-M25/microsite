import { useSelector } from "react-redux";
import { motion } from "framer-motion"; // Highly recommended for a "pro" feel
import { Award, Briefcase, Users, MapPin } from "lucide-react";

const About = () => {
  const profile = useSelector((state) => state.portfolio.profile);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-sky-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        
        {/* Header Section with Vertical Accent */}
        <div className="relative mb-20">
          <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: "100%" }} 
            className="absolute -left-6 top-0 w-[2px] bg-sky-600 hidden md:block" 
          />
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-900">
            A legacy of <span className="font-serif italic font-medium text-sky-700">excellence</span>.
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-400 font-semibold">
            About {profile.name || "the Specialist"}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Description - Editorial Style */}
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-3xl leading-relaxed text-slate-700 font-light">
              {profile.description || "Passionate about delivering high-end results through strategic planning and modern execution."}
            </p>
            
            <div className="mt-12 flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl w-fit shadow-sm">
              <div className="bg-sky-50 p-2 rounded-full text-sky-600">
                <MapPin size={20} />
              </div>
              <span className="text-slate-600 font-medium">Currently based in {profile.location}</span>
            </div>
          </div>

          {/* Metrics Column - Modern Minimalist Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <MetricCard 
              icon={<Award />} 
              label="Years of Experience" 
              value={`${profile.experience}+`} 
              subtext="Proven industry expertise"
            />
            <MetricCard 
              icon={<Briefcase />} 
              label="Successful Projects" 
              value={profile.projectsCount} 
              subtext="Across diverse sectors"
            />
            <MetricCard 
              icon={<Users />} 
              label="Global Clients" 
              value={profile.clientsCount} 
              subtext="Trust-based partnerships"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon, label, value, subtext }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="group flex items-center justify-between p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-sky-200 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center gap-6">
      <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:text-sky-600 group-hover:bg-sky-50 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-xs text-slate-300 group-hover:text-sky-400 transition-colors">{subtext}</p>
      </div>
    </div>
    <span className="text-4xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
      {value}
    </span>
  </motion.div>
);

export default About;