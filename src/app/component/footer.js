"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Final CTA Card */}
        <div className="relative bg-[#0056b3] rounded-[3rem] p-12 md:p-20 overflow-hidden mb-24">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Ready to ace your <span className="text-yellow-400">exams?</span>
              </h2>
              <p className="text-blue-100 text-lg font-medium">
                Join AcademiX today for customized, exam-specific courses and personalized mentorship.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-white text-[#0056b3] text-center font-black rounded-2xl hover:bg-yellow-400 hover:text-gray-900 transition-all shadow-xl"
              >
                Book Your Free Demo 
              </Link>
              <p className="text-center text-xs font-bold text-blue-200">
                10+ Years of specialized experience
              </p>
            </div>
          </div>
          
          {/* Decorative Mesh for Footer CTA */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
        </div>

        {/* Brand and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/10 pb-16 mb-12">
          <div>
            <h3 className="text-2xl font-black mb-6">Academi<span className="text-[#0056b3]">X</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A specialized test-prep division founded by the leadership team at Uni Discovery. 
              We train harder so exam day feels effortless.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/programs" className="hover:text-[#0056b3] transition-colors">All Programs</Link></li>
              <li><Link href="/tutors" className="hover:text-[#0056b3] transition-colors">Our Tutors</Link></li>
              <li><Link href="/results" className="hover:text-[#0056b3] transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Get In Touch </h4>
            <div className="space-y-4">
              <p className="text-sm font-bold">
                Coordinator: <span className="text-gray-400 font-medium">Milki </span>
              </p>
              <Link 
                href="tel:+919888661618" 
                className="text-xl font-black text-[#0056b3] hover:text-white transition-colors"
              >
                +91 98886 61618 
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <p>© 2026 AcademiX Test Prep. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}