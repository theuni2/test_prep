// "use client";

// import Link from 'next/link';

// const topResults = [
//   { name: "Aditya Dev", school: "Daly College", course: "AP Calculus BC", score: "5" },
//   { name: "Sankalp Kukreja", school: "Step by Step", course: "AP Calculus BC", score: "5" },
//   { name: "Harsh Kumar", school: "Modern School", course: "IB Score", score: "43" },
// ];

// export default function HomeSuccessSection() {
//   return (
//     <section style={{ 
//       padding: '100px 24px', 
//       backgroundColor: '#ffffff',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
//         {/* Header */}
//         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//           <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#111827', letterSpacing: '-1px' }}>
//             Our Results Speak for <span style={{ color: '#0056b3' }}>Themselves</span>
//           </h2>
//           <p style={{ color: '#6b7280', marginTop: '16px', fontSize: '18px' }}>
//             Join 120+ success stories from top international schools.
//           </p>
//         </div>

//         {/* Results Cards */}
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
//           gap: '30px' 
//         }}>
//           {topResults.map((result, idx) => (
//             <div key={idx} style={{ 
//               padding: '40px', 
//               borderRadius: '32px', 
//               backgroundColor: '#f8faff', 
//               border: '1px solid #e5e7eb',
//               position: 'relative'
//             }}>
//               <div style={{ 
//                 fontSize: '48px', 
//                 fontWeight: '900', 
//                 color: '#0056b3', 
//                 marginBottom: '10px',
//                 opacity: '0.8'
//               }}>
//                 {result.score}
//               </div>
//               <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#111827' }}>{result.name}</h3>
//               <p style={{ color: '#4b5563', fontWeight: '600', margin: '8px 0' }}>{result.course}</p>
//               <p style={{ fontSize: '12px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px' }}>
//                 {result.school}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//           <Link href="/results" style={{ 
//             fontSize: '16px', 
//             fontWeight: '700', 
//             color: '#0056b3', 
//             textDecoration: 'none',
//             borderBottom: '2px solid #0056b3',
//             paddingBottom: '4px'
//           }}>
//             View All Success Stories →
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, ArrowRight, Star, Quote } from 'lucide-react';

const topResults = [
  { name: "Harsh Kumar", school: "Modern School, Delhi", course: "IB Diploma", score: "43", total: "/45", highlight: "Top 1% Worldwide", color: "#0056b3" },
  { name: "Aditya Dev", school: "Daly College", course: "AP Calculus BC", score: "5", total: "/5", highlight: "Perfect Score", color: "#FACC15" },
  { name: "Khushi Singh", school: "Heritage School", course: "IB Score", score: "40", total: "/45", highlight: "Distinction", color: "#0056b3" },
  { name: "Sankalp Kukreja", school: "Step by Step", course: "AP Calculus BC", score: "5", total: "/5", highlight: "Perfect Score", color: "#FACC15" },
];

export default function Success() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="results">
      {/* Subtle Background Branding */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] flex items-center justify-center">
        <h1 className="text-[20vw] font-black uppercase select-none">Excellence</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <Star size={14} className="fill-[#0056b3] text-[#0056b3]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0056b3]">
              The AcademiX Hall of Fame
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter mb-8"
          >
            Results that <br />
            <span className="text-[#0056b3]">Define Futures.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Join 120+ high achievers from India's most prestigious institutions who turned ambition into global reality.
          </motion.p>
        </div>

        {/* Dynamic Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topResults.map((result, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -20 }}
              className="group relative p-10 rounded-[3.5rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,86,179,0.12)] transition-all duration-500 overflow-hidden"
            >
              {/* Corner Accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                style={{ backgroundColor: result.color }}
              />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <span className="text-7xl font-black text-[#0056b3] tracking-tighter leading-none">
                      {result.score}
                    </span>
                    <span className="text-xl font-bold text-gray-300 self-end mb-2">
                      {result.total}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-[#0056b3] transition-colors">
                    {result.name}
                  </h3>
                  <div className="px-3 py-1 bg-gray-50 rounded-lg inline-block border border-gray-100 mb-6">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
                      {result.course}
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-50">
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">
                    {result.school}
                  </p>
                  <div className="flex items-center gap-2 text-[#0056b3]">
                    <Award size={14} />
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      {result.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA - Levelled Up */}
        <div className="mt-24 text-center">
          {/* <Link href="/results" className="group relative inline-flex items-center gap-6 px-12 py-6 bg-gray-900 text-white rounded-[2rem] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <span className="relative z-10 font-black text-lg tracking-tight">Explore All 120+ Success Stories</span>
            <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0056b3] transition-colors">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
            {/* Background Glow on Hover */}
            {/* <div className="absolute inset-0 bg-[#0056b3] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link> */} 
          
          <p className="mt-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
            A division of <span className="text-gray-900">Uni Discovery</span>
          </p>
        </div>
      </div>
    </section>
  );
}