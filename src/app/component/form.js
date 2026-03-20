// "use client";

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, CheckCircle2, Loader2, Sparkles, graduationCap } from 'lucide-react';

// export default function AdmissionsForm() {
//   const [status, setStatus] = useState('idle'); // idle, loading, success
//   const [formData, setFormData] = useState({
//     studentName: '',
//     parentPhone: '',
//     email: '',
//     targetExam: 'LSAT / UCAT',
//     message: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');

//     try {
//       // REPLACE THIS URL with your actual n8n Webhook URL
//       const response = await fetch('https://your-n8n-instance.com/webhook/academix-lead', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus('success');
//       } else {
//         throw new Error('Failed to send');
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again or WhatsApp us directly.");
//       setStatus('idle');
//     }
//   };

//   if (status === 'success') {
//     return (
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-[3rem] p-12 text-center shadow-2xl border border-green-100"
//       >
//         <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
//           <CheckCircle2 className="w-10 h-10 text-green-500" />
//         </div>
//         <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Application Received!</h3>
//         <p className="text-gray-500 font-medium mb-8">
//           A confirmation email with the 2026 Prospectus has been sent to your inbox. <br/> 
//           <strong>Milki</strong> will reach out shortly to coordinate your demo.
//         </p>
//         <button 
//           onClick={() => setStatus('idle')}
//           className="text-[#0056b3] font-black uppercase tracking-widest text-xs hover:underline"
//         >
//           Submit another request
//         </button>
//       </motion.div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-[4rem] p-10 lg:p-14 shadow-[0_40px_100px_rgba(0,86,179,0.08)] border border-gray-100 relative overflow-hidden">
      
//       {/* Visual Accent */}
//       <div className="absolute top-0 right-0 p-8 opacity-10">
//         <Sparkles size={120} className="text-[#0056b3]" />
//       </div>

//       <div className="relative z-10">
//         <h3 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">
//           Reserve your <span className="text-[#0056b3]">Demo Session.</span>
//         </h3>
//         <p className="text-gray-400 font-bold text-sm mb-10 uppercase tracking-widest">
//           Priority Admissions for Fall 2026
//         </p>
        
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Student Name */}
//             <div className="space-y-3">
//               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Student Full Name</label>
//               <input 
//                 required
//                 type="text" 
//                 placeholder="Ex: Aditya Dev"
//                 className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-300"
//                 onChange={(e) => setFormData({...formData, studentName: e.target.value})}
//               />
//             </div>
//             {/* Phone */}
//             <div className="space-y-3">
//               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">WhatsApp Number</label>
//               <input 
//                 required
//                 type="tel" 
//                 placeholder="+91"
//                 className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-300"
//                 onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
//               />
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//              {/* Email */}
//              <div className="space-y-3">
//               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Official Email</label>
//               <input 
//                 required
//                 type="email" 
//                 placeholder="name@example.com"
//                 className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-300"
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//               />
//             </div>
//             {/* Selection */}
//             <div className="space-y-3">
//               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Program of Interest</label>
//               <div className="relative">
//                 <select 
//                   className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 appearance-none transition-all cursor-pointer"
//                   onChange={(e) => setFormData({...formData, targetExam: e.target.value})}
//                 >
//                   <option>LSAT / UCAT / LNAT</option>
//                   <option>AP Courses (Calculus, Physics, etc.)</option>
//                   <option>Olympiad Prep (AMC/SASMO)</option>
//                   <option>SAT / ACT Strategy</option>
//                   <option>IB Diploma Support</option>
//                 </select>
//                 <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
//                   ▼
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Message */}
//           <div className="space-y-3">
//             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Academic Goals</label>
//             <textarea 
//               rows={3} 
//               placeholder="Tell us about your target universities or specific challenges..."
//               className="w-full px-8 py-5 rounded-[2.5rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all resize-none placeholder:text-gray-300"
//               onChange={(e) => setFormData({...formData, message: e.target.value})}
//             />
//           </div>

//           {/* CTA Button */}
//           <button 
//             disabled={status === 'loading'}
//             className="w-full py-6 bg-[#0056b3] text-white font-black rounded-[2rem] shadow-2xl shadow-blue-200 hover:bg-black transition-all flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {status === 'loading' ? (
//               <Loader2 className="w-5 h-5 animate-spin" />
//             ) : (
//               <>
//                 Confirm My Priority Demo
//                 <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//               </>
//             )}
//           </button>
//         </form>

//         <p className="mt-8 text-center text-[10px] font-black text-gray-300 uppercase tracking-widest">
//           By submitting, you agree to receive academic counseling via WhatsApp
//         </p>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, CheckCircle2, Loader2, Mail } from 'lucide-react';

// export default function AdmissionsForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(e.target);
    
//     // 1. Enter the Access Key you got for Milki's email here
//     formData.append("access_key", "ed2dcd2c-500a-496a-9c75-f472ea22de61"); 
//     // 2. This sets the Subject Line Milki will see in her inbox
//     formData.append("subject", `New AcademiX Lead: ${formData.get('name')}`);
//     // 3. This ensures the "From" name in the email is AcademiX
//     formData.append("from_name", "AcademiX Admissions Portal");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         setIsSuccess(true);
//         // AUTO-DOWNLOAD BROCHURE FOR THE STUDENT
//         const link = document.createElement('a');
//         link.href = '/AcademiX.pdf';
//         link.download = 'AcademiX_Brochure_2026.pdf';
//         link.click();
//       }
//     } catch (error) {
//       alert("Submission failed. Please check your internet or WhatsApp us.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (isSuccess) {
//     return (
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="bg-white rounded-[3rem] p-12 text-center shadow-2xl border border-blue-100"
//       >
//         <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
//           <CheckCircle2 className="w-10 h-10 text-[#0056b3]" />
//         </div>
//         <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Sent to AcademiX!</h3>
//         <p className="text-gray-500 font-medium mb-8 leading-relaxed">
//           Your request has been forwarded to our coordinator, <strong>Milki</strong>. <br/>
//           Your brochure is downloading...
//         </p>
//         <button onClick={() => setIsSuccess(false)} className="text-[#0056b3] font-black text-xs uppercase tracking-widest hover:underline">
//           Send another request
//         </button>
//       </motion.div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-[4rem] p-10 lg:p-14 shadow-[0_40px_100px_rgba(0,86,179,0.08)] border border-gray-100 relative">
//       <div className="relative z-10">
//         <h3 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter leading-none">
//           Request a <span className="text-[#0056b3]">Demo Session.</span>
//         </h3>
//         <p className="text-gray-400 font-bold text-[10px] mb-10 uppercase tracking-[0.3em]">
//           Priority Access for Global Admissions
//         </p>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Honeypot Spam Protection */}
//           <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//                <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Student Name</label>
//                <input required name="name" type="text" placeholder="Aditya Dev" className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-200" />
//             </div>
//             <div className="space-y-2">
//                <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">WhatsApp No.</label>
//                <input required name="phone" type="tel" placeholder="+91" className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-200" />
//             </div>
//           </div>

//           <div className="space-y-2">
//              <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Preferred Email</label>
//              <input required name="email" type="email" placeholder="example@gmail.com" className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-200" />
//           </div>

//           <div className="space-y-2">
//              <label className="text-[10px] font-black uppercase text-gray-400 ml-4 tracking-widest">Program Choice</label>
//              <select name="program" className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 appearance-none cursor-pointer transition-all">
//                 <option>LSAT / UCAT / LNAT</option>
//                 <option>AP Courses (Math, Physics, etc.)</option>
//                 <option>Olympiad Prep (AMC/SASMO)</option>
//                 <option>IB Diploma Support</option>
//              </select>
//           </div>

//           <button 
//             disabled={isSubmitting}
//             className="w-full py-6 bg-[#0056b3] text-white font-black rounded-[2.5rem] shadow-2xl shadow-blue-200 hover:bg-black transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
//           >
//             {isSubmitting ? (
//               <Loader2 className="w-6 h-6 animate-spin" />
//             ) : (
//               <>
//                 Send to Milki & Download Brochure
//                 <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

export default function AdmissionsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "ed2dcd2c-500a-496a-9c75-f472ea22de61"); 
    formData.append("subject", `New AcademiX Lead: ${formData.get('name')}`);
    formData.append("from_name", "AcademiX Admissions Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        const link = document.createElement('a');
        link.href = '/AcademiX.pdf';
        link.download = 'AcademiX_Brochure_2026.pdf';
        link.click();
      }
    } catch (error) {
      alert("Submission failed. Please check your internet or WhatsApp us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 -z-10" />

      <div className="max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3.5rem] p-16 text-center shadow-[0_30px_100px_rgba(0,86,179,0.1)] border border-blue-100"
            >
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-[#0056b3]" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Application Sent.</h3>
              <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">
                Our coordinator, <strong>Milki</strong>, will reach out shortly. <br/>
                Your prospectus is downloading...
              </p>
              <button 
                onClick={() => setIsSuccess(false)} 
                className="text-[#0056b3] font-black text-xs uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              >
                ← Back to Form
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[4rem] p-10 md:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.06)] border border-gray-100 relative"
            >
              <div className="absolute top-10 right-10 text-blue-100">
                <Sparkles size={40} />
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tighter leading-none">
                  Request a <span className="text-[#0056b3]">Demo Session.</span>
                </h3>
                <p className="text-gray-400 font-bold text-[10px] mb-12 uppercase tracking-[0.4em]">
                  Priority Access for Global Admissions
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-5 tracking-[0.2em]">Student Name</label>
                       <input required name="name" type="text" placeholder="Aditya Dev" className="w-full px-8 py-6 rounded-[2.5rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-200" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-5 tracking-[0.2em]">WhatsApp No.</label>
                       <input required name="phone" type="tel" placeholder="+91" className="w-full px-8 py-6 rounded-[2.5rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-200" />
                    </div>
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase text-gray-400 ml-5 tracking-[0.2em]">Preferred Email</label>
                     <input required name="email" type="email" placeholder="example@gmail.com" className="w-full px-8 py-6 rounded-[2.5rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 transition-all placeholder:text-gray-200" />
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase text-gray-400 ml-5 tracking-[0.2em]">Program Choice</label>
                     <div className="relative">
                        <select name="program" className="w-full px-8 py-6 rounded-[2.5rem] bg-gray-50 border-2 border-transparent focus:border-[#0056b3] focus:bg-white outline-none font-bold text-gray-900 appearance-none cursor-pointer transition-all">
                            <option>LSAT / UCAT / LNAT</option>
                            <option>AP Courses (Math, Physics, etc.)</option>
                            <option>Olympiad Prep (AMC/SASMO)</option>
                            <option>IB Diploma Support</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300 font-black">
                            ↓
                        </div>
                     </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-7 bg-[#0056b3] text-white font-black rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(0,86,179,0.4)] hover:bg-black transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        <span className="tracking-tight text-lg">Send to Milki & Download Brochure</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}