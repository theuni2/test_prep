"use client";

import { motion } from "framer-motion";
import { Trophy, Target, Zap, Globe } from "lucide-react";
import Link from "next/link";

export default function OlympiadHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-yellow-50/50 blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Animated Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-blue-600 text-white mb-8">
            <Globe className="w-3 h-3" /> Global Math Excellence
          </span>

          <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[0.9] mb-8">
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Olympiads</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-lg">
            Personalized, 1-on-1 handholding [cite: 60, 62] for the world's toughest math competitions. We train harder so you win bigger[cite: 68].
          </p>

          <div className="flex flex-wrap gap-5">
            <Link 
              href="/demo" 
              className="px-10 py-5 bg-black text-white font-black rounded-2xl shadow-2xl hover:bg-blue-600 transition-all hover:-translate-y-2 active:scale-95"
            >
              Book Free Demo
            </Link>
            <div className="flex items-center gap-4 px-6 border-l-2 border-gray-100">
              <div className="p-3 bg-yellow-400 rounded-xl">
                <Trophy className="w-6 h-6 text-black" />
              </div>
              <p className="text-sm font-bold text-gray-900 leading-tight">
                110+ Olympiad <br />Success Stories 
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Premium Image Composition */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[16px] border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
              alt="Olympiad Student"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          {/* Floating Achievement Cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 z-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <Target className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-gray-400">Accuracy</p>
                <p className="text-lg font-black text-gray-900">99.4%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-16 z-20 bg-black text-white p-6 rounded-3xl shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <Zap className="text-yellow-400 w-6 h-6 fill-yellow-400" />
              <div>
                <p className="text-[10px] font-black uppercase text-gray-500">Speed</p>
                <p className="text-lg font-black italic">Olympiad Prep </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}