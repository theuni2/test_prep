// "use client";

// const tutors = [
//   {
//     name: "Mr. Motwani",
//     subjects: ["AP Calculus (BC/AB)", "Pre-Calculus", "Statistics", "TMUA"],
//     achievement: "120+ Exam Success Stories",
//     color: "bg-blue-50"
//   },
//   {
//     name: "Ms. Shruti",
//     subjects: ["AP English Lit."],
//     achievement: "100+ High Achievers Mentored",
//     color: "bg-yellow-50"
//   },
//   {
//     name: "Mr. Kabra",
//     subjects: ["IB/AP Chemistry"],
//     achievement: "140+ Students Excelled",
//     color: "bg-blue-50"
//   },
//   {
//     name: "Dr. Fahima/Malya",
//     subjects: ["AP Psychology", "Env. Sci", "IB: Geography", "Economics"],
//     achievement: "110+ Students Prepared",
//     color: "bg-yellow-50"
//   }
// ];

// export default function Tutors() {
//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="max-w-2xl">
//             <span className="text-[#0056b3] text-xs font-black uppercase tracking-[0.2em] mb-4 block">
//               Elite Faculty
//             </span>
//             <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
//               Learn from the <span className="text-[#0056b3]">Master Mentors</span> who deliver results.
//             </h2>
//           </div>
//           <div className="pb-2">
//             <p className="text-gray-500 font-medium border-l-2 border-[#0056b3] pl-4">
//               Specialized experience of <br /> 10+ years in global curriculums.
//             </p>
//           </div>
//         </div>

//         {/* Tutors Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {tutors.map((tutor, idx) => (
//             <div 
//               key={idx} 
//               className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#0056b3]/20 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
//             >
//               {/* Decorative Icon Circle */}
//               <div className={`w-16 h-16 rounded-2xl ${tutor.color} mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
//                  <span className="text-[#0056b3] font-black text-xl">
//                    {tutor.name.charAt(4)}
//                  </span>
//               </div>

//               <h3 className="text-2xl font-black text-gray-900 mb-2">{tutor.name}</h3>
              
//               <div className="space-y-1 mb-8">
//                 {tutor.subjects.map((sub, i) => (
//                   <p key={i} className="text-sm font-bold text-gray-500">{sub}</p>
//                 ))}
//               </div>

//               {/* Achievement Badge - Hardcoded Colors */}
//               <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-bold tracking-tight group-hover:bg-[#0056b3] transition-colors">
//                 <svg className="w-3 h-3 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 {tutor.achievement}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Star, ChevronRight } from "lucide-react";

const tutors = [
  {
    name: "Mr. Motwani",
    subjects: ["AP Calculus (BC/AB)", "Pre-Calculus", "Statistics", "TMUA"],
    achievement: "120+ Exam Success Stories",
    specialty: "Math Specialist",
    color: "#0056b3"
  },
  {
    name: "Ms. Shruti",
    subjects: ["AP English Lit."],
    achievement: "100+ High Achievers Mentored",
    specialty: "Literature Expert",
    color: "#FACC15"
  },
  {
    name: "Mr. Kabra",
    subjects: ["IB/AP Chemistry"],
    achievement: "140+ Students Excelled",
    specialty: "Chemistry Lead",
    color: "#0056b3"
  },
  {
    name: "Dr. Fahima/Malya",
    subjects: ["AP Psychology", "Env. Sci", "IB: Geography", "Economics"],
    achievement: "110+ Students Prepared",
    specialty: "Social Sciences",
    color: "#FACC15"
  }
];

export default function Tutors() {
  return (
    <section className="py-32 bg-[#fcfcfc] overflow-hidden" id="tutors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-[#0056b3]" />
              <span className="text-[#0056b3] text-xs font-black uppercase tracking-[0.3em]">
                Elite Academic Faculty
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter"
            >
              Learn from the <br />
              <span className="text-[#0056b3]">Master Mentors.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:max-w-xs border-l-4 border-yellow-400 pl-6 py-2"
          >
            <p className="text-gray-500 font-bold leading-relaxed italic">
              "We don't just teach subjects; we mentor the mindset required for Ivy League success."
            </p>
          </motion.div>
        </div>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutors.map((tutor, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative p-10 rounded-[3rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,86,179,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500"
                style={{ backgroundColor: tutor.color }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Visual Icon Header */}
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}
                       style={{ backgroundColor: tutor.color === '#0056b3' ? '#eff6ff' : '#fffbeb' }}>
                    {tutor.color === '#0056b3' ? 
                      <GraduationCap className="w-8 h-8 text-[#0056b3]" /> : 
                      <Star className="w-8 h-8 text-yellow-600" />
                    }
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#0056b3] transition-colors">
                    {tutor.specialty}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                  {tutor.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {tutor.subjects.map((sub, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-500 border border-gray-100 uppercase tracking-tighter">
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Achievement Bar */}
                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-gray-900 text-white group-hover:bg-[#0056b3] transition-all duration-300">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-[11px] font-black uppercase tracking-wider leading-none">
                      {tutor.achievement}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors">
                    View Profile <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-gray-100 flex flex-wrap items-center justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <div className="flex items-center gap-3">
             <BookOpen className="w-5 h-5 text-[#0056b3]" />
             <span className="text-xs font-black uppercase tracking-widest text-gray-900">10+ Years Specialized Experience</span>
          </div>
          <div className="flex items-center gap-3">
             <Award className="w-5 h-5 text-[#0056b3]" />
             <span className="text-xs font-black uppercase tracking-widest text-gray-900">Customized Exam Strategies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}