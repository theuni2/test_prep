"use client";

import { motion } from "framer-motion";
import { Activity, Layers, BarChart3, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Diagnostic Baseline",
    desc: "A 40-minute assessment with 27 specialized questions to evaluate your starting proficiency level.",
    icon: <Activity className="w-6 h-6 text-blue-500" />,
    stats: "27 Questions"
  },
  {
    title: "Concept Deep-Dive",
    desc: "1-on-1 handholding using unit-wise notes and focused drills to reinforce difficult Olympiad concepts.",
    icon: <Layers className="w-6 h-6 text-yellow-500" />,
    stats: "Topic-Wise Drills"
  },
  {
    title: "Milestone Tracking",
    desc: "Sectional tests acting as milestones to track progress and predict future exam performance.",
    icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
    stats: "Predictive Analytics"
  },
  {
    title: "Full Simulation",
    desc: "Original full-length mock exams with predictive scoring accuracy to ensure exam day feels effortless.",
    icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
    stats: "99% Accuracy"
  }
];

export default function OlympiadProcess() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black tracking-tight text-gray-900 mb-6">
            The <span className="text-blue-600">AcademiX</span> Engine
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            We train harder so exam day feels effortless[cite: 68].
          </p>
        </div>

        <div className="relative">
          {/* Central Animated Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 hidden md:block" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Hub */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-4 border-gray-50 rounded-2xl flex items-center justify-center -translate-x-1/2 z-10 shadow-xl hidden md:flex">
                  {step.icon}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className={`p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-500 group ${
                    idx % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? "justify-start" : "md:justify-end"}`}>
                       <span className="px-3 py-1 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 border border-blue-100">
                         Step 0{idx + 1}
                       </span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                      {step.desc} [cite: 74, 76, 88, 91]
                    </p>
                    <div className={`flex items-center gap-2 ${idx % 2 === 0 ? "justify-start" : "md:justify-end"}`}>
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                        {step.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty Space for Grid alignment */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Bridge */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="mt-32 p-12 rounded-[3rem] bg-black text-white text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-6">Ready to start your baseline?</h3>
            <button className="px-12 py-5 bg-blue-600 hover:bg-white hover:text-black transition-all rounded-2xl font-black text-lg">
              Take Diagnostic Test
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] -z-0" />
        </motion.div>
      </div>
    </section>
  );
}