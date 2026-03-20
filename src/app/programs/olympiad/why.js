"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Trophy, Zap } from "lucide-react";

export default function OlympiadInfo() {
  const whyUs = [
    {
      title: "Specialized Expertise",
      desc: "10+ years of experience in niche competitive exams like SASMO and AMC.",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "1-on-1 Handholding",
      desc: "Personalized, consistent mentorship that focuses on your specific gaps.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Predictive Analytics",
      desc: "Milestone-based assessments that accurately predict exam-day performance.",
      icon: <Zap className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* What is Olympiad Prep? */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-gray-50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Olympiad Preparation"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-[2rem] -z-10 flex items-center justify-center p-8 text-white font-black text-center leading-tight">
              A+ Quality Mentorship
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              What is <span className="text-blue-600">Olympiad</span> Prep?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Olympiads are world-renowned competitive exams like **SASMO**, **SEAMO**, and **AMC** that test logical reasoning and advanced mathematical problem-solving[cite: 26, 39, 41, 47, 50].
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Preparing for these requires more than just formulas; it requires a **holistic preparation** strategy involving skills, mindset, and predictive scoring[cite: 64, 65, 90].
            </p>
          </motion.div>
        </div>

        {/* Why AcademiX? */}
        <div className="bg-gray-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">
              Why <span className="text-blue-500">AcademiX?</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whyUs.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-black text-white mb-4">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] -z-0" />
        </div>

      </div>
    </section>
  );
}