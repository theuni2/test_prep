// "use client";

// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      
//       {/* Hard-Coded Gradient Background */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {/* Top Left Blue Glow */}
//         <div 
//           className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[120px]"
//           style={{ backgroundColor: '#0056b3' }}
//         />
//         {/* Bottom Right Yellow/Gold Glow */}
//         <div 
//           className="absolute bottom-[10%] -right-[5%] w-[45%] h-[45%] rounded-full opacity-30 blur-[100px]"
//           style={{ backgroundColor: '#FACC15' }} 
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
//         <div className="text-center">
//           {/* Brand Badge */}
//           <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase bg-blue-50 text-[#0056b3] mb-8 border border-[#0056b3]/10">
//             A Specialized Test-Prep Division 
//           </span>

//           {/* Core Mission Heading */}
//           <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[1.05] mb-8">
//             We train harder so <br />
//             <span className="text-[#0056b3]">exam day</span> feels effortless. 
//           </h1>

//           {/* Targeted Subtext */}
//           <p className="max-w-3xl mx-auto text-lg lg:text-xl text-gray-600 leading-relaxed mb-12">
//             Niche and competitive exam preparation with structured learning and expert mentoring 
//             for <span className="font-bold text-gray-900">LSAT, UCAT, and Olympiads.</span> 
//           </p>

//           {/* Primary Actions */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
//             <Link 
//               href="/demo" 
//               className="w-full sm:w-auto px-12 py-5 bg-[#0056b3] text-white font-bold rounded-2xl shadow-2xl shadow-blue-300/50 hover:bg-black transition-all hover:-translate-y-1 active:scale-95"
//             >
//               Book Free Demo 
//             </Link>
//             <Link 
//               href="/diagnostic" 
//               className="w-full sm:w-auto px-12 py-5 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-100 hover:border-gray-900 transition-all active:scale-95 shadow-sm"
//             >
//               Diagnostic Test 
//             </Link>
//           </div>

//           {/* Exam Authority Section */}
//           <div className="mt-24">
//             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-10">
//               Specialized Divisions 
//             </p>
//             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
//               <span className="text-2xl font-black tracking-tighter text-slate-900">LSAT </span>
//               <span className="text-2xl font-black tracking-tighter text-slate-900">UCAT</span>
//               <span className="text-2xl font-black tracking-tighter text-slate-900">LNAT</span>
//               <span className="text-2xl font-black tracking-tighter text-slate-900">OLYMPIADS</span>
//               <span className="text-2xl font-black tracking-tighter text-slate-900">IB</span>
//               <span className="text-2xl font-black tracking-tighter text-slate-900">APs</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Link from 'next/link';
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
//       {/* Fixed Mesh Gradient Background */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#0056b3]/10 blur-[120px]" />
//         <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-yellow-100/40 blur-[100px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Side: Content */}
//           <div className="text-left">
//             <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-blue-50 text-[#0056b3] mb-6 border border-blue-100/50">
//               A Specialized Test-Prep Division [cite: 14]
//             </span>

//             <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1] mb-8">
//               We train harder so <br />
//               <span className="text-[#0056b3]">exam day</span> feels effortless. [cite: 67]
//             </h1>

//             <p className="max-w-xl text-lg text-gray-600 leading-relaxed mb-10">
//               Structured learning, expert mentoring, and personalized academic support [cite: 19] for 
//               competitive exams like <span className="font-semibold text-gray-900 underline decoration-[#0056b3]/30">LSAT, UCAT, and Olympiads.</span> 
//             </p>

//             <div className="flex flex-col sm:flex-row items-center gap-4">
//               <Link 
//                 href="/demo" 
//                 className="w-full sm:w-auto px-10 py-4 bg-[#0056b3] text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-black transition-all hover:-translate-y-1 active:scale-95 text-center"
//               >
//                 Book Free Demo [cite: 180]
//               </Link>
//               <Link 
//                 href="/diagnostic" 
//                 className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 font-bold rounded-2xl border border-gray-200 hover:border-gray-900 transition-all text-center"
//               >
//                 Diagnostic Test [cite: 72]
//               </Link>
//             </div>

//             {/* Micro Trust Icons */}
//             <div className="mt-12 flex items-center gap-4">
//               <div className="flex -space-x-3">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
//                     <div className="w-full h-full bg-blue-100 flex items-center justify-center text-[10px] font-bold">A+</div>
//                   </div>
//                 ))}
//               </div>
//               <p className="text-sm text-gray-500 font-medium">
//                 Joined by <span className="text-gray-900 font-bold">500+ ambitious students</span> [cite: 19]
//               </p>
//             </div>
//           </div>

//           {/* Right Side: Visual Image */}
//           <div className="relative">
//             <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 border-[12px] border-white">
//               {/* Using a placeholder image that matches the "Modern Student" vibe */}
//               <img 
//                 src="https://images.unsplash.com/photo-1523240715630-38890288897b?auto=format&fit=crop&q=80&w=1000" 
//                 alt="AcademiX Student Mentorship"
//                 className="w-full h-[500px] object-cover"
//               />
//               {/* Floating Card Detail */}
//               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
//                 <p className="text-xs font-bold text-[#0056b3] uppercase tracking-wider mb-1">Success Story</p>
//                 <p className="text-gray-900 font-bold italic">"120+ Exam Success Stories under expert guidance." </p>
//               </div>
//             </div>
            
//             {/* Decorative Element behind image */}
//             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#0056b3]/20 rounded-3xl -z-10" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import Link from 'next/link';
// import { Trophy, Star, Sparkles } from 'lucide-react';

// export default function Hero() {
//   // Animation variants for staggered reveal
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      
//       {/* 1. ANIMATED MESH BACKGROUND */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <motion.div 
//           animate={{ 
//             x: [0, 50, 0], 
//             y: [0, 30, 0],
//             scale: [1, 1.1, 1] 
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-[0.15] blur-[120px]"
//           style={{ backgroundColor: '#0056b3' }}
//         />
//         <motion.div 
//           animate={{ 
//             x: [0, -40, 0], 
//             y: [0, 50, 0],
//             scale: [1, 1.2, 1] 
//           }}
//           transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 1 }}
//           className="absolute bottom-[10%] -right-[5%] w-[45%] h-[45%] rounded-full opacity-[0.25] blur-[100px]"
//           style={{ backgroundColor: '#FACC15' }} 
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative">
        
//         {/* 2. FLOATING BADGES (Visual Interest) */}
//         <motion.div 
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 right-[10%] hidden lg:flex items-center gap-3 bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl shadow-blue-900/5"
//         >
//           <div className="bg-blue-600 p-2 rounded-lg"><Trophy className="w-5 h-5 text-white" /></div>
//           <div>
//             <p className="text-[10px] font-black uppercase text-gray-400 leading-none">Proven Results</p>
//             <p className="text-sm font-black text-gray-900 leading-tight">120+ Success Stories</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//           className="absolute bottom-[20%] left-[5%] hidden lg:flex items-center gap-3 bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl"
//         >
//           <div className="bg-yellow-400 p-2 rounded-lg"><Star className="w-5 h-5 text-black" /></div>
//           <div>
//             <p className="text-[10px] font-black uppercase text-gray-400 leading-none">Experience</p>
//             <p className="text-sm font-black text-gray-900 leading-tight">10+ Years Expertise</p>
//           </div>
//         </motion.div>

//         {/* 3. MAIN CONTENT */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center relative z-10"
//         >
//           {/* Badge */}
//           <motion.span 
//             variants={itemVariants}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase bg-blue-50 text-[#0056b3] mb-8 border border-[#0056b3]/10"
//           >
//             <Sparkles className="w-3 h-3" /> A Specialized Test-Prep Division 
//           </motion.span>

//           {/* Title */}
//           <motion.h1 
//             variants={itemVariants}
//             className="text-6xl lg:text-[92px] font-black tracking-tighter text-gray-900 leading-[0.95] mb-8"
//           >
//             We train harder so <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] to-blue-400">exam day</span> feels effortless. 
//           </motion.h1>

//           {/* Subtext */}
//           <motion.p 
//             variants={itemVariants}
//             className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-600 font-medium leading-relaxed mb-12"
//           >
//             Niche and competitive exam preparation with structured learning and expert mentoring 
//             for <span className="text-gray-900 font-black underline decoration-[#0056b3]/30 underline-offset-4">LSAT, UCAT, and Olympiads.</span> 
//           </motion.p>

//           {/* CTAs */}
//           <motion.div 
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6"
//           >
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//               <Link 
//                 href="/demo" 
//                 className="group relative px-12 py-5 bg-[#0056b3] text-white font-black rounded-2xl shadow-2xl shadow-blue-400/30 overflow-hidden block"
//               >
//                 <span className="relative z-10">Book Free Demo</span>
//                 <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//               </Link>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//               <Link 
//                 href="/diagnostic" 
//                 className="px-12 py-5 bg-white text-gray-900 font-black rounded-2xl border-2 border-gray-100 hover:border-gray-900 transition-all shadow-sm block"
//               >
//                 Diagnostic Test 
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Authority Logos */}
//           <motion.div 
//             variants={itemVariants}
//             className="mt-24 pt-10 border-t border-gray-50"
//           >
//             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-10">
//               Our Specialized Divisions 
//             </p>
//             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-all duration-700">
//               {['LSAT', 'UCAT', 'LNAT', 'OLYMPIADS', 'IB', 'APs'].map((logo) => (
//                 <span key={logo} className="text-2xl font-black tracking-tighter text-slate-900 hover:text-[#0056b3] cursor-default transition-colors">
//                   {logo}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import Link from 'next/link';
// import { Trophy, Star, Sparkles } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      
//       {/* 1. HIGH-END MESH BACKGROUND (Fixed for Visibility) */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         {/* Top Left Blue Glow */}
//         <div 
//           className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[140px] opacity-[0.12]"
//           style={{ backgroundColor: '#0056b3' }}
//         />
//         {/* Bottom Right Yellow/Gold Glow */}
//         <div 
//           className="absolute bottom-[5%] right-[0%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-[0.18]"
//           style={{ backgroundColor: '#FACC15' }} 
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        
//         {/* 2. FLOATING BADGES (Refined Shadows) */}
//         <motion.div 
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-10 right-[15%] hidden lg:flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50"
//         >
//           <div className="bg-[#0056b3] p-2.5 rounded-2xl"><Trophy className="w-5 h-5 text-white" /></div>
//           <div>
//             <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Proven Results</p>
//             <p className="text-sm font-black text-gray-900">120+ Success Stories</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//           className="absolute bottom-[25%] left-[5%] hidden lg:flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50"
//         >
//           <div className="bg-[#FACC15] p-2.5 rounded-2xl"><Star className="w-5 h-5 text-black" /></div>
//           <div>
//             <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Experience</p>
//             <p className="text-sm font-black text-gray-900">10+ Years Expertise</p>
//           </div>
//         </motion.div>

//         <div className="text-center">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.25em] uppercase bg-blue-50 text-[#0056b3] mb-10 border border-blue-100"
//           >
//             <Sparkles className="w-3.5 h-3.5" /> A Specialized Test-Prep Division 
//           </motion.div>

//           {/* Heading with Text Gradient */}
//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-6xl lg:text-[96px] font-black tracking-tighter text-gray-900 leading-[0.9] mb-10"
//           >
//             We train harder so <br />
//             <span className="text-[#0056b3] bg-gradient-to-r from-[#0056b3] to-blue-400 bg-clip-text text-transparent">exam day</span> feels effortless. 
//           </motion.h1>

//           <motion.p 
//              initial={{ opacity: 0 }}
//              animate={{ opacity: 1 }}
//              transition={{ delay: 0.4 }}
//              className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-14"
//           >
//             Niche preparation with expert mentoring for <span className="text-gray-900 font-bold underline decoration-[#0056b3]/20 underline-offset-8">LSAT, UCAT, and Olympiads.</span> 
//           </motion.p>

//           {/* CTAs */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6"
//           >
//             <Link 
//               href="/demo" 
//               className="group px-14 py-5 bg-[#0056b3] text-white font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,86,179,0.4)] hover:bg-black transition-all hover:-translate-y-1 active:scale-95"
//             >
//               Book Free Demo 
//             </Link>
//             <Link 
//               href="/diagnostic" 
//               className="px-14 py-5 bg-white text-gray-900 font-black rounded-2xl border border-gray-200 hover:border-gray-900 transition-all shadow-sm"
//             >
//               Diagnostic Test 
//             </Link>
//           </motion.div>

//           {/* Authority Section */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="mt-28"
//           >
//             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-12">
//               Divisions Under Uni Discovery 
//             </p>
//             <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
//               {['LSAT', 'UCAT', 'LNAT', 'OLYMPIADS', 'IB', 'APs'].map((logo) => (
//                 <span key={logo} className="text-2xl font-black tracking-tighter text-gray-300 hover:text-[#0056b3] transition-colors cursor-default">
//                   {logo}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Link from 'next/link';
// import { Trophy, Star, Sparkles, Plus } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      
//       {/* 1. LUXURY LAYERED BACKGROUND */}
//     <div className="absolute inset-0 z-0 pointer-events-none">
  
//   {/* 1. THE IMAGE LAYER (Forced to the front of the background stack) */}
//   <div 
//     className="absolute inset-0 z-10 opacity-[0.12] transition-opacity duration-1000"
//     style={{ 
//       backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       filter: 'grayscale(100%) contrast(110%)',
//       mixBlendMode: 'multiply'
//     }}
//   />

//   {/* 2. THE GRADIENT GLOWS (Blue & Yellow) */}
//   <div 
//     className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[140px] opacity-[0.2] z-0"
//     style={{ backgroundColor: '#0056b3' }}
//   />
//   <div 
//     className="absolute bottom-[5%] right-[0%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-[0.25] z-0"
//     style={{ backgroundColor: '#FACC15' }} 
//   />

//   {/* 3. THE WHITE OVERLAY MASK (Prevents the image from being too 'busy') */}
//   <div className="absolute inset-0 z-[5] bg-white/60 backdrop-blur-[2px]" />

// </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-20">
        
//         {/* 2. FLOATING BADGES (Framer Motion) */}
//         <motion.div 
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-10 right-[15%] hidden lg:flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
//         >
//           <div className="bg-[#0056b3] p-2.5 rounded-2xl"><Trophy className="w-5 h-5 text-white" /></div>
//           <div>
//             <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Proven Results</p>
//             <p className="text-sm font-black text-gray-900">120+ Success Stories</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//           className="absolute bottom-[25%] left-[5%] hidden lg:flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
//         >
//           <div className="bg-[#FACC15] p-2.5 rounded-2xl"><Star className="w-5 h-5 text-black" /></div>
//           <div>
//             <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Experience</p>
//             <p className="text-sm font-black text-gray-900">10+ Years Expertise</p>
//           </div>
//         </motion.div>

//         <div className="text-center relative z-20">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.25em] uppercase bg-blue-50 text-[#0056b3] mb-10 border border-blue-100"
//           >
//             <Sparkles className="w-3.5 h-3.5" /> A Specialized Test-Prep Division 
//           </motion.div>

//           {/* Heading */}
//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-6xl lg:text-[96px] font-black tracking-tighter text-gray-900 leading-[0.9] mb-10"
//           >
//             We train harder so <br />
//             <span className="text-[#0056b3] bg-gradient-to-r from-[#0056b3] to-blue-400 bg-clip-text text-transparent">exam day</span> feels effortless. 
//           </motion.h1>

//           <motion.p 
//              initial={{ opacity: 0 }}
//              animate={{ opacity: 1 }}
//              transition={{ delay: 0.4 }}
//              className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-14"
//           >
//             Niche preparation with expert mentoring for <span className="text-gray-900 font-bold underline decoration-[#0056b3]/20 underline-offset-8">LSAT, UCAT, and Olympiads.</span> 
//           </motion.p>

//           {/* CTAs */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6"
//           >
//             <Link 
//               href="/demo" 
//               className="group px-14 py-5 bg-[#0056b3] text-white font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,86,179,0.4)] hover:bg-black transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
//             >
//               <Plus className="w-4 h-4" /> Book Free Demo 
//             </Link>
//             <Link 
//               href="/diagnostic" 
//               className="px-14 py-5 bg-white text-gray-900 font-black rounded-2xl border border-gray-200 hover:border-gray-900 transition-all shadow-sm"
//             >
//               Diagnostic Test 
//             </Link>
//           </motion.div>

//           {/* Authority Section */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="mt-28"
//           >
//             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-12">
//               Our Specialized Divisions 
//             </p>
//             <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 hover:opacity-100 transition-opacity duration-700">
//               {['LSAT', 'UCAT', 'LNAT', 'OLYMPIADS', 'IB', 'APs'].map((logo) => (
//                 <span key={logo} className="text-2xl font-black tracking-tighter text-slate-900 hover:text-[#0056b3] cursor-default Transition-colors">
//                   {logo}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { Trophy, Star, Sparkles, Plus, FileText, Download } from 'lucide-react';

export default function LuxuryHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      
      {/* 1. LUXURY LAYERED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 1: Brand Gradients (The Glow) */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[140px] opacity-[0.18] z-0"
          style={{ backgroundColor: '#0056b3' }}
        />
        <div 
          className="absolute bottom-[5%] right-[0%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-[0.22] z-0"
          style={{ backgroundColor: '#FACC15' }} 
        />

        {/* Layer 2: White Overlay Mask with subtle Glass Blur */}
        <div className="absolute inset-0 z-[5] bg-white/60 backdrop-blur-[2px]" />

        {/* Layer 3: The Textured Image (Force-Visible) */}
        <div 
          className="absolute inset-0 z-10 opacity-[0.08] mix-blend-multiply" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(110%) brightness(0.9)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-20">
        
        {/* 2. FLOATING BADGES (Framer Motion) */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 right-[15%] hidden lg:flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
        >
          <div className="bg-[#0056b3] p-2.5 rounded-2xl"><Trophy className="w-5 h-5 text-white" /></div>
          <div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Proven Results</p>
            <p className="text-sm font-black text-gray-900">120+ Success Stories</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[25%] left-[5%] hidden lg:flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
        >
          <div className="bg-[#FACC15] p-2.5 rounded-2xl"><Star className="w-5 h-5 text-black" /></div>
          <div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Experience</p>
            <p className="text-sm font-black text-gray-900">10+ Years Expertise</p>
          </div>
        </motion.div>

        <div className="text-center relative z-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.25em] uppercase bg-blue-50 text-[#0056b3] mb-10 border border-blue-100"
          >
            <Sparkles className="w-3.5 h-3.5" /> A Specialized Test-Prep Division 
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl lg:text-[96px] font-black tracking-tighter text-gray-900 leading-[0.9] mb-10"
          >
            We train harder so <br />
            <span className="text-[#0056b3] bg-gradient-to-r from-[#0056b3] to-blue-400 bg-clip-text text-transparent">exam day</span> feels effortless. 
          </motion.h1>

          {/* Subtext */}
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-500 font-medium leading-relaxed mb-14"
          >
            Niche preparation with expert mentoring for <span className="text-gray-900 font-bold underline decoration-[#0056b3]/20 underline-offset-8">LSAT, UCAT, and Olympiads.</span> 
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/contact" 
              className="group px-14 py-5 bg-[#0056b3] text-white font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,86,179,0.4)] hover:bg-black transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Book Free Demo 
            </Link>

            {/* UPDATED: Download Brochure Button */}
      <a 
  href="/AcademiX.pdf" 
  download="AcademiX_Brochure_2026.pdf"
  className="group flex items-center gap-3 px-14 py-5 bg-white text-gray-900 font-black rounded-2xl border-2 border-gray-100 hover:border-gray-900 transition-all shadow-sm active:scale-95 cursor-pointer"
>
  <FileText className="w-5 h-5 text-[#0056b3]" />
  <span>Download Brochure</span>
  <Download className="w-4 h-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
</a>
          </motion.div>

          {/* Authority Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-28"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-12">
              Our Specialized Divisions 
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 hover:opacity-100 transition-opacity duration-700">
              {['LSAT', 'UCAT', 'LNAT', 'OLYMPIADS', 'IB', 'APs'].map((logo) => (
                <span key={logo} className="text-2xl font-black tracking-tighter text-slate-900 hover:text-[#0056b3] cursor-default transition-colors">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}