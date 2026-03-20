"use client";

import { motion } from "framer-motion";
import { Plus, MessageSquare, Phone, Globe } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How does the Diagnostic Test work?",
    a: "Every student begins with a 40-minute baseline assessment featuring 27 specialized questions to evaluate current proficiency levels."
  },
  {
    q: "Is the mentorship really 1-on-1?",
    a: "Yes. We focus on personalized, consistent mentorship and 'handholding' to ensure students master complex Olympiad concepts at their own pace."
  },
  {
    q: "What materials are provided?",
    a: "Students receive unit-wise notes, focused drills, and original full-length mocks with predictive scoring accuracy."
  }
];

export default function OlympiadFre() {
  return (
    <section className="bg-white">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors group"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-black text-gray-900">{faq.q}</h4>
                <Plus className="w-5 h-5 text-blue-600 group-hover:rotate-90 transition-transform" />
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white pt-24 pb-12 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 mb-20">
            
            {/* Brand Story */}
            <div className="space-y-6">
              <h3 className="text-3xl font-black italic">Academi<span className="text-blue-500">X</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                A sister division by the leadership team at Uni Discovery. 
                Dedicated to preparing ambitious students for niche and competitive exams.
              </p>
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors cursor-pointer">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Program Links */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Specializations</h4>
              <ul className="space-y-4 font-bold text-gray-300">
                <li className="hover:text-blue-500 cursor-pointer">Olympiad Prep (SASMO/AMC)</li>
                <li className="hover:text-blue-500 cursor-pointer">Advanced Placement (AP)</li>
                <li className="hover:text-blue-500 cursor-pointer">International Baccalaureate (IB)</li>
                <li className="hover:text-blue-500 cursor-pointer">Test Prep (LSAT/UCAT)</li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="p-8 rounded-[2.5rem] bg-blue-600 relative overflow-hidden group">
              <h4 className="text-white font-black text-xl mb-6 relative z-10">Get in Touch</h4>
              <div className="space-y-4 relative z-10">
                <p className="text-blue-100 font-bold">Milki (Coordinator)</p>
                <Link 
                  href="tel:+919888661618" 
                  className="text-2xl font-black flex items-center gap-3 hover:scale-105 transition-transform origin-left"
                >
                  <Phone className="w-6 h-6 fill-white" />
                  +91 98886 61618
                </Link>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <p>© 2026 AcademiX • Powered by Uni Discovery</p>
            <div className="flex gap-8">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}