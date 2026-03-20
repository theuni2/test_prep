"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, BarChart, CheckCircle } from "lucide-react";

export default function IBHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0056b3] border border-blue-100 mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">IB Diploma Specialists</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.9] mb-8">
            Elevate Your <br />
            <span className="text-[#0056b3]">IB Score.</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
            Customized, exam-specific courses for IB Psychology, Economics, and Physics. From Internal Assessments to the final Paper 3, we provide 1-on-1 handholding[cite: 55, 60].
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-[#0056b3] text-white font-black rounded-2xl shadow-xl shadow-blue-200 hover:bg-black transition-all active:scale-95">
              Book IB Demo
            </button>
            <div className="flex items-center gap-3 px-6">
              <div className="w-12 h-12 rounded-full border-2 border-[#0056b3] flex items-center justify-center font-bold text-[#0056b3]">45</div>
              <p className="text-xs font-bold text-gray-500 uppercase">Targeting the <br/>Perfect Score</p>
            </div>
          </div>
        </motion.div>

        {/* Visual Composition Side */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-gray-50"
          >
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000" 
              alt="IB Student Study"
              className="w-full h-[550px] object-cover"
            />
          </motion.div>
          
          {/* Floating Achievement from PDF */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100"
          >
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Top Performer</p>
            <p className="text-xl font-black text-gray-900">Harsh Kumar: 43/45 </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}