"use client";

import { motion } from "framer-motion";
import { MessageCircle, Star, CheckCheck } from "lucide-react";

const chats = [
  {
    sender: "Student (Atharv)",
    message: "Ma'am was really good, she was able to explain difficult concepts to me by making them easy to understand. She also paced herself to help me keep up.",
    time: "19:26",
    align: "left"
  },
  {
    sender: "Parent",
    message: "Atharv is very happy with the way classes are going. In his words 'Arpita Mam teaches concepts very well. Gives lot of practice and reinforcement.'",
    time: "10:34",
    align: "right"
  },
  {
    sender: "Student",
    message: "Ma'am your confidence in me made me persistent... Thanks for all the help! Final GRE score sheet has come today: Q-168, V-164.",
    time: "13:09",
    align: "left"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8faff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6"
          >
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
              Real Student Conversations
            </span>
          </motion.div>
          <h2 className="text-5xl font-black text-gray-900 tracking-tight">
            The <span className="text-blue-600">AcademiX</span> Experience.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] -z-10" />

          <div className="space-y-8">
            {chats.map((chat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: chat.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex ${chat.align === "left" ? "justify-start" : "justify-end"}`}
              >
                <div className={`relative max-w-md p-6 rounded-[2rem] shadow-xl border ${
                  chat.align === "left" 
                  ? "bg-white border-gray-100 rounded-bl-none" 
                  : "bg-gray-900 border-gray-800 text-white rounded-br-none"
                }`}>
                  <p className={`text-[10px] font-black uppercase mb-3 tracking-widest ${
                    chat.align === "left" ? "text-blue-600" : "text-gray-500"
                  }`}>
                    {chat.sender}
                  </p>
                  <p className="text-sm md:text-base font-medium leading-relaxed italic">
                    "{chat.message}"
                  </p>
                  <div className={`mt-4 flex items-center justify-end gap-1 ${
                    chat.align === "left" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    <span className="text-[10px] font-bold">{chat.time}</span>
                    <CheckCheck className={`w-3 h-3 ${chat.align === "left" ? "text-blue-500" : "text-blue-400"}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Holistic Prep Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-xl font-black text-gray-900">Student-Centric Support</h4>
              <p className="text-sm text-gray-500 font-medium">Integrated focus on skills, strategy, and mindset[cite: 65, 66].</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-blue-200">
            Join the Community
          </button>
        </motion.div>
      </div>
    </section>
  );
}