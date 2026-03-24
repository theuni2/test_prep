// "use client";

// import { motion } from "framer-motion";
// import { Users, BarChart3, Target, Zap, ArrowUpRight } from "lucide-react";

// const features = [
//   {
//     title: "1-on-1 Handholding",
//     desc: "Personalized mentorship from experts with 10+ years of specialized experience.",
//     icon: <Users className="w-8 h-8 text-white" />,
//     className: "md:col-span-2 bg-[#0056b3] text-white overflow-hidden relative",
//     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     title: "Predictive Scoring",
//     desc: "Original mocks with high accuracy.",
//     icon: <BarChart3 className="w-8 h-8 text-[#0056b3]" />,
//     className: "md:col-span-1 bg-gray-50 border border-gray-100",
//     image: ""
//   },
//   {
//     title: "Diagnostic Intelligence",
//     desc: "40-minute baseline assessment to evaluate your starting proficiency.",
//     icon: <Target className="w-8 h-8 text-yellow-600" />,
//     className: "md:col-span-1 bg-[#FACC15]/10 border border-[#FACC15]/20",
//     image: ""
//   },
//   {
//     title: "Specialized Curriculum",
//     desc: "Exam-specific courses for LSAT, UCAT, and Olympiads.",
//     icon: <Zap className="w-8 h-8 text-[#0056b3]" />,
//     className: "md:col-span-2 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]",
//     image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
//   },
// ];

// export default function WhyUs() {
//   return (
//     <section className="py-32 bg-white relative">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header with Luxury Typography */}
//         <div className="mb-20">
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0056b3] mb-4"
//           >
//             The AcademiX Standard
//           </motion.p>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.85]"
//           >
//             We don't just teach. <br />
//             <span className="text-[#0056b3]">We Strategize.</span>
//           </motion.h2>
//         </div>

//         {/* Bento Grid with Image Overlays */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[320px]">
//           {features.map((feature, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 0.98 }}
//               className={`group relative p-12 rounded-[3.5rem] flex flex-col justify-between transition-all duration-700 ${feature.className}`}
//             >
//               {/* Background Image Texture (Visible on Hover) */}
//               {feature.image && (
//                 <div 
//                   className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 grayscale"
//                   style={{ 
//                     backgroundImage: `url(${feature.image})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center'
//                   }}
//                 />
//               )}

//               <div className="relative z-10">
//                 <div className="flex justify-between items-start mb-8">
//                   <div className={`p-4 rounded-2xl ${feature.className.includes('bg-[#0056b3]') ? 'bg-white/20' : 'bg-white shadow-lg'}`}>
//                     {feature.icon}
//                   </div>
//                   <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" />
//                 </div>
                
//                 <h3 className="text-3xl font-black tracking-tight mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className={`text-lg font-medium leading-tight max-w-[280px] ${feature.className.includes('text-white') ? 'text-white/70' : 'text-gray-400'}`}>
//                   {feature.desc}
//                 </p>
//               </div>

//               {/* Decorative Corner Glow */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Target, Zap, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "1-on-1 Handholding",
    desc: "Personalized mentorship from experts with 10+ years of specialized experience.",
    icon: <Users className="w-6 h-6 text-white" />,
    className: "md:col-span-2 bg-[#0056b3] text-white relative overflow-hidden",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Predictive Scoring",
    desc: "Original mocks with high accuracy and strategy-led feedback.",
    icon: <BarChart3 className="w-6 h-6 text-[#0056b3]" />,
    className: "md:col-span-1 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]",
  },
  {
    title: "Diagnostic Intelligence",
    desc: "Every journey begins with a 40-minute baseline assessment.",
    icon: <Target className="w-6 h-6 text-yellow-600" />,
    className: "md:col-span-1 bg-[#FACC15]/5 border border-[#FACC15]/20",
  },
  {
    title: "Specialized Curriculum",
    desc: "Exam-specific courses for AP, IB, IGCSE, LSAT, UCAT, and Olympiads—tailored to you.",
    icon: <Zap className="w-6 h-6 text-[#0056b3]" />,
    className: "md:col-span-2 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]",
  },
];

export default function LuxuryWhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Heavy Weight Typography */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0056b3] mb-4"
          >
            The AcademiX Standard
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9]"
          >
            We don't just teach. <br />
            <span className="text-[#0056b3]">We Strategize.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 0.99 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`group p-10 rounded-[3rem] min-h-[300px] flex flex-col justify-between transition-all ${feature.className}`}
            >
              {/* Image Background for Blue Card only */}
              {feature.img && (
                <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
                  <img src={feature.img} alt="" className="w-full h-full object-cover grayscale" />
                </div>
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-4 rounded-2xl ${feature.className.includes('bg-[#0056b3]') ? 'bg-white/20' : 'bg-white shadow-lg'}`}>
                    {feature.icon}
                  </div>
                  <ArrowUpRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all ${
                    feature.className.includes('text-white') ? 'text-white' : 'text-[#0056b3]'
                  }`} />
                </div>

                <h3 className={`text-2xl font-black mb-3 tracking-tight ${
                  feature.className.includes('bg-[#0056b3]') ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm font-bold leading-relaxed max-w-[260px] ${
                  feature.className.includes('bg-[#0056b3]') ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}