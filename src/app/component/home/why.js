"use client";

import { motion } from "framer-motion";
import { Globe, GraduationCap, lineChart, Lightbulb } from "lucide-react";

const reasons = [
  {
    title: "Global University Entry",
    desc: "Exams like LSAT and UCAT are the primary gatekeepers for top-tier Law and Medical schools in the UK, US, and Australia. Without specialized prep, the baseline is rarely enough.",
    img: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop",
    icon: <Globe className="w-6 h-6 text-[#0056b3]" />
  },
  {
    title: "The '5' Standard",
    desc: "In AP and IB, scoring a '5' or '7' isn't just a grade—it's college credit. Our students save thousands in tuition by testing out of introductory college courses.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
    icon: <GraduationCap className="w-6 h-6 text-[#FACC15]" />
  },
  {
    title: "Competitive Distinction",
    desc: "Olympiads (SASMO, AMC) provide the 'spike' in your profile that Ivy League admissions officers look for. It proves you can handle rigor far beyond the standard curriculum.",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000",
    icon: <Lightbulb className="w-6 h-6 text-[#0056b3]" />
  }
];

export default function WhyRequired() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0056b3] block mb-4"
          >
            Strategic Importance
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter"
          >
            Why <span className="text-[#0056b3]">Specialized</span> Prep?
          </motion.h2>
        </div>

        {/* Reason Rows */}
        <div className="space-y-40">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-[#f8faff] rounded-[3rem] -z-10 group-hover:bg-blue-50 transition-colors duration-500" />
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
                >
                  <img 
                    src={reason.img} 
                    alt={reason.title} 
                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </motion.div>
                
                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-2xl">{reason.icon}</div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Verified <br/>Impact</p>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-4xl font-black text-gray-900 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">
                  {reason.desc}
                </p>
                <div className="pt-6">
                  {/* <button className="flex items-center gap-3 text-[#0056b3] font-black text-sm uppercase tracking-widest group">
                    Explore Program 
                    <div className="h-[2px] w-8 bg-[#0056b3] group-hover:w-16 transition-all duration-300" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}