
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpen, Fingerprint } from "lucide-react";

const competitions = [
  { 
    name: "SASMO", 
    fullName: "Singapore & Asian Schools Math Olympiad", 
    highlight: "Gold Sector Prep",
    color: "#0056b3" 
  },
  { 
    name: "AMC", 
    fullName: "American Mathematics Competitions", 
    highlight: "Top 1% Achievement",
    color: "#FACC15" 
  },
  { 
    name: "UKMT", 
    fullName: "United Kingdom Mathematics Trust", 
    highlight: "Junior/Inter/Senior",
    color: "#ef4444" 
  },
  { 
    name: "SEAMO", 
    fullName: "Southeast Asian Mathematical Olympiad", 
    highlight: "Global Ranking Focus",
    color: "#10b981" 
  }
];

export default function OlympiadGrid() {
  return (
    <section className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-12 bg-blue-500" />
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">
              Competitions We Cover
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white leading-tight"
          >
            Niche Exams. <br />
            <span className="text-gray-500">Elite Results.</span>
          </motion.h2>
        </div>

        {/* Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitions.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2rem] bg-gray-800/50 border border-white/5 hover:border-white/20 transition-all duration-500 backdrop-blur-xl"
            >
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-[2rem] transition-opacity duration-500"
                style={{ backgroundColor: comp.color, filter: 'blur(40px)' }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg"
                    style={{ backgroundColor: comp.color }}
                  >
                    {comp.name[0]}
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="p-2 rounded-full bg-white/5 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-black text-white mb-2">{comp.name}</h3>
                <p className="text-gray-400 text-sm font-medium mb-6 leading-relaxed">
                  {comp.fullName}
                </p>

                <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 w-fit border border-white/5">
                  <Award className="w-3 h-3 text-yellow-400" />
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                    {comp.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-8"
        >
          <div className="flex items-center gap-4">
            <Fingerprint className="text-blue-500 w-8 h-8" />
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Every student gets a <span className="text-white font-bold">Customized, exam-specific course</span>  designed for their proficiency level.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-2xl font-black text-white">110+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Students Prepared</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">10+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}