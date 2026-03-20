// "use client";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // Organizing navigation based on document categories
// const programs = [
//   { name: 'AP Courses', href: '/programs/ap' },
//   { name: 'IB Program', href: '/programs/ib' },
//   { name: 'Olympiad Prep', href: '/programs/olympiads' },
//   { name: 'Test Prep (LSAT/UCAT)', href: '/programs/test-prep' },
// ];

// export default function AcademiXNavbar() {
//   const pathname = usePathname();

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        
//         {/* Brand - Reflecting the logo in the PDF */}
//         <Link href="/" className="flex items-center space-x-3">
//           <div className="relative w-10 h-10 bg-[#0056b3] rounded-full flex items-center justify-center">
//              {/* Simple representation of the cap/bulb logo from p.14 */}
//             <span className="text-white text-xs font-bold underline decoration-yellow-400">A</span>
//           </div>
//           <span className="text-2xl font-black tracking-tighter text-gray-900">
//             Academi<span className="text-[#0056b3]">X</span>
//           </span>
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex items-center space-x-12">
//           <div className="group relative py-2">
//             <button className="text-sm font-semibold text-gray-700 group-hover:text-[#0056b3] transition-colors">
//               Programs
//             </button>
//             {/* Premium Dropdown/Mega Menu */}
//             <div className="absolute top-full -left-4 w-64 bg-white shadow-2xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-50">
//               {programs.map((item) => (
//                 <Link key={item.name} href={item.href} className="block p-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-600 hover:text-black">
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
          
//           <Link href="/tutors" className="text-sm font-semibold text-gray-700 hover:text-[#0056b3]">Tutors</Link>
//           <Link href="/results" className="text-sm font-semibold text-gray-700 hover:text-[#0056b3]">Success Stories</Link>
//         </div>

//         {/* Action: Based on the "Get in Touch" section of the PDF */}
//         <div className="flex items-center space-x-6">
//           <Link href="https://wa.me/919888661618" target="_blank" className="hidden sm:block text-sm font-bold text-gray-900">
//             Contact: +91 98886 61618
//           </Link>
//           <Link 
//             href="/demo" 
//             className="px-8 py-3 bg-[#0056b3] text-white text-sm font-bold rounded-full hover:bg-black transition-all shadow-md active:scale-95"
//           >
//             Book Free Demo
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: 'Programs', href: '/#programs', hasDropdown: false },
  { name: 'Tutors', href: '/#tutors' },
  { name: 'Success Stories', href: '/#results' },
];

const programItems = [
  { name: 'AP Courses', href: '/programs/ap' },
  { name: 'IB Program', href: '/programs/ib' },
  { name: 'Olympiad Prep', href: '/programs/olympiads' },
  { name: 'Test Prep', href: '/programs/test-prep' },
];

export default function AcademiXNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex items-center justify-between px-8 rounded-[2rem] transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,86,179,0.08)] border border-white/20 py-4" 
            : "bg-transparent py-0"
        }`}>
          
          {/* Brand - Styled per Deck p.14 */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="w-10 h-10 bg-[#0056b3] rounded-full flex items-center justify-center shadow-lg shadow-blue-200"
            >
              {/* <span className="text-white text-[10px] font-black underline decoration-yellow-400 decoration-2 underline-offset-4">A</span> */}
              <img src='logo.png' alt="logo" className="w-5 h-5" />
            </motion.div>
            <span className="text-2xl font-black tracking-tighter text-gray-900">
              Academi<span className="text-[#0056b3]">X</span>
            </span>
          </Link>

          {/* Desktop Nav - Staggered Animation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <div key={link.name} className="relative group py-2">
                <Link 
                  href={link.href}
                  className={`text-sm font-bold tracking-tight transition-colors flex items-center gap-1 ${
                    pathname === link.href ? "text-[#0056b3]" : "text-gray-600 hover:text-[#0056b3]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>
                
                {link.hasDropdown && (
                  <div className="absolute top-full -left-6 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-64 bg-white rounded-3xl shadow-2xl border border-gray-50 p-4 grid gap-1">
                      {programItems.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="px-4 py-3 rounded-2xl hover:bg-blue-50 text-sm font-bold text-gray-600 hover:text-[#0056b3] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-6">
            <Link 
              href="tel:+919888661618" 
              className="hidden xl:flex items-center gap-2 text-sm font-black text-gray-900 hover:text-[#0056b3] transition-colors"
            >
              <Phone className="w-4 h-4 fill-[#0056b3] text-[#0056b3]" />
              +91 98886 61618
            </Link>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-[#0056b3] text-white text-sm font-black rounded-full shadow-xl shadow-blue-200 hover:bg-black transition-all"
              >
                Free Demo
              </Link>
            </motion.div>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2 text-gray-900" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-xl font-black text-gray-900" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <Link href="tel:+919888661618" className="text-lg font-bold text-[#0056b3]">+91 98886 61618</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}