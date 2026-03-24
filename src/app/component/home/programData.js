// "use client";

// import { useState } from 'react';

// const programData = {
//   "AP Courses": [
//     { subject: "AP Calculus (BC)", price: "90,000 INR", sessions: "40-50" },
//     { subject: "AP Chemistry", price: "90,000 INR", sessions: "40-50" },
//     { subject: "AP Physics (IB)", price: "1,50,000 INR", sessions: "100" },
//     { subject: "AP Psychology", price: "1L INR", sessions: "40-50" },
//   ],
//   "Competitive": [
//     { subject: "TMUA", price: "1.2L INR", sessions: "60" },
//     { subject: "UCAT", price: "1,05,000 INR", sessions: "30-40" },
//     { subject: "Olympiad Prep", price: "1,10,000 INR", sessions: "30-40" },
//     { subject: "SATs", price: "62,500 INR", sessions: "25+" },
//   ]
// };

// export default function Programs() {
//   const [activeTab, setActiveTab] = useState("AP Courses");

//   return (
//     <section className="py-24 bg-gray-50/50">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-black text-gray-900 mb-4">Specialized Programs</h2>
//           <p className="text-gray-600 font-medium">
//             Demo classes for all are free!
//           </p>
          
//           {/* Custom Hard-Coded Tab Switcher */}
//           <div className="mt-10 inline-flex p-1 bg-gray-200/50 rounded-2xl backdrop-blur-sm">
//             {Object.keys(programData).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
//                   activeTab === tab 
//                   ? "bg-[#0056b3] text-white shadow-lg" 
//                   : "text-gray-500 hover:text-gray-900"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Pricing Cards Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {programData[activeTab].map((item, idx) => (
//             <div 
//               key={idx} 
//               className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
//             >
//               <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0056b3] transition-colors">
//                 <span className="text-[#0056b3] font-bold group-hover:text-white">A+</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">{item.subject}</h3>
//               <p className="text-sm text-gray-500 mb-6">{item.sessions} Sessions</p>
              
//               <div className="pt-6 border-t border-gray-50">
//                 <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Investment</p>
//                 <p className="text-2xl font-black text-gray-900">{item.price}</p>
//               </div>
              
//               <button className="w-full mt-8 py-4 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-[#0056b3] transition-colors">
//                 Enroll Now
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Footer Note from PDF */}
//         <p className="mt-12 text-center text-sm text-gray-400 italic">
//           * Session hours vary by subject: minimum 20 hours, up to 60 hours.
//         </p>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from 'react';

// const programData = {
//   "AP Courses": {
//     tagline: "Master the 5-point scale with Ivy-League level prep.",
//     items: [
//       { subject: "AP Calculus (BC)", price: "90,000 INR", sessions: "40-50", highlight: "Calculus Specialist" },
//       { subject: "AP Chemistry", price: "90,000 INR", sessions: "40-50", highlight: "Lab Focus" },
//       { subject: "AP Physics (IB)", price: "1,50,000 INR", sessions: "100", highlight: "Full Mastery" },
//       { subject: "AP Psychology", price: "1L INR", sessions: "40-50", highlight: "Theory & Practice" },
//     ]
//   },
//   "Competitive": {
//     tagline: "Strategic entrance prep for G5 & Ivy League schools.",
//     items: [
//       { subject: "TMUA / TSA", price: "1.2L INR", sessions: "60", highlight: "Oxbridge Entry" },
//       { subject: "UCAT / LNAT", price: "1,05,000 INR", sessions: "30-40", highlight: "Medical/Law" },
//       { subject: "Olympiad Prep", price: "1,10,000 INR", sessions: "30-40", highlight: "AMC/SASMO" },
//       { subject: "SATs / ACTs", price: "62,500 INR", sessions: "25+", highlight: "Strategy Focus" },
//     ]
//   }
// };

// export default function Programs() {
//   const [activeTab, setActiveTab] = useState("AP Courses");

//   return (
//     <section style={{ padding: '120px 0', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      
//       {/* Decorative background element */}
//       <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', backgroundColor: '#0056b3', opacity: '0.03', borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(200px, -200px)' }} />

//       <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
//         {/* Section Header */}
//         <div style={{ marginBottom: '80px' }}>
//           <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', color: '#0056b3', marginBottom: '16px', display: 'block' }}>
//             Curriculum Specializations
//           </span>
//           <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px' }}>
//             <div style={{ maxWidth: '600px' }}>
//               <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#111827', letterSpacing: '-0.04em', lineHeight: '0.9', margin: 0 }}>
//                 Specialized <br />
//                 <span style={{ color: '#0056b3' }}>Programs.</span>
//               </h2>
//               <p style={{ marginTop: '24px', fontSize: '18px', color: '#6b7280', fontWeight: '500' }}>
//                 {programData[activeTab].tagline}
//               </p>
//             </div>

//             {/* Premium Tab Switcher */}
//             <div style={{ 
//               display: 'inline-flex', 
//               padding: '6px', 
//               backgroundColor: '#f3f4f6', 
//               borderRadius: '24px',
//               border: '1px solid #e5e7eb'
//             }}>
//               {Object.keys(programData).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   style={{
//                     padding: '16px 32px',
//                     borderRadius: '18px',
//                     fontSize: '14px',
//                     fontWeight: '800',
//                     border: 'none',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                     backgroundColor: activeTab === tab ? '#0056b3' : 'transparent',
//                     color: activeTab === tab ? '#ffffff' : '#6b7280',
//                     boxShadow: activeTab === tab ? '0 10px 25px -5px rgba(0, 86, 179, 0.4)' : 'none',
//                   }}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Grid with Premium Cards */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
//           {programData[activeTab].items.map((item, idx) => (
//             <div 
//               key={idx} 
//               className="program-card"
//               style={{ 
//                 backgroundColor: '#ffffff', 
//                 padding: '48px 40px', 
//                 borderRadius: '40px', 
//                 border: '1px solid #f3f4f6',
//                 boxShadow: '0 20px 50px rgba(0, 0, 0, 0.03)',
//                 transition: 'all 0.4s ease',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 minHeight: '420px'
//               }}
//             >
//               <div>
//                 <div style={{ 
//                   display: 'inline-flex', 
//                   padding: '8px 16px', 
//                   backgroundColor: '#f0f9ff', 
//                   color: '#0056b3', 
//                   borderRadius: '12px', 
//                   fontSize: '10px', 
//                   fontWeight: '900', 
//                   textTransform: 'uppercase', 
//                   letterSpacing: '0.1em',
//                   marginBottom: '32px'
//                 }}>
//                   {item.highlight}
//                 </div>
//                 <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#111827', marginBottom: '12px', lineHeight: '1.2' }}>
//                   {item.subject}
//                 </h3>
//                 <p style={{ fontSize: '14px', fontWeight: '700', color: '#0056b3', opacity: '0.8' }}>
//                   {item.sessions} Personalized Sessions
//                 </p>
//               </div>
              
//               <div style={{ marginTop: '40px' }}>
//                 <div style={{ height: '1px', width: '100%', backgroundColor: '#f3f4f6', marginBottom: '32px' }} />
//                 <p style={{ fontSize: '10px', fontWeight: '900', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>
//                   Total Investment
//                 </p>
//                 <p style={{ fontSize: '32px', fontWeight: '900', color: '#111827', margin: 0 }}>
//                   {item.price}
//                 </p>
//                 <button style={{ 
//                   width: '100%', 
//                   marginTop: '32px', 
//                   padding: '20px', 
//                   borderRadius: '20px', 
//                   backgroundColor: '#111827', 
//                   color: '#ffffff', 
//                   fontSize: '14px', 
//                   fontWeight: '800', 
//                   border: 'none', 
//                   cursor: 'pointer',
//                   transition: 'background-color 0.3s ease'
//                 }}>
//                   Request Demo Class
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Note */}
//         <div style={{ marginTop: '64px', textAlign: 'center' }}>
//           <div style={{ 
//             display: 'inline-flex', 
//             alignItems: 'center', 
//             gap: '12px', 
//             padding: '12px 24px', 
//             backgroundColor: '#ecfdf5', 
//             borderRadius: '100px',
//             border: '1px solid #d1fae5'
//           }}>
//             <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
//             <span style={{ fontSize: '13px', fontWeight: '700', color: '#065f46' }}>Demo classes for all programs are free of cost.</span>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .program-card:hover {
//           transform: translateY(-12px);
//           box-shadow: 0 40px 80px rgba(0, 86, 179, 0.12) !important;
//           border-color: #0056b3 !important;
//         }
//         .program-card button:hover {
//           background-color: #0056b3 !important;
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";

// import { useState } from 'react';

// const programData = {
//   "AP Courses": {
//     tagline: "Master the 5-point scale with Ivy-League level prep.",
//     items: [
//       { subject: "AP Calculus (BC)", price: "90,000 INR", sessions: "40-50", highlight: "Calculus Specialist" },
//       { subject: "AP Chemistry", price: "90,000 INR", sessions: "40-50", highlight: "Lab Focus" },
//       { subject: "AP Physics (IB)", price: "1,50,000 INR", sessions: "100", highlight: "Full Mastery" },
//       { subject: "AP Psychology", price: "1L INR", sessions: "40-50", highlight: "Theory & Practice" },
//     ]
//   },
//   "Competitive": {
//     tagline: "Strategic entrance prep for G5 & Ivy League schools.",
//     items: [
//       { subject: "TMUA / TSA", price: "1.2L INR", sessions: "60", highlight: "Oxbridge Entry" },
//       { subject: "UCAT / LNAT", price: "1,05,000 INR", sessions: "30-40", highlight: "Medical/Law" },
//       { subject: "Olympiad Prep", price: "1,10,000 INR", sessions: "30-40", highlight: "AMC/SASMO" },
//       { subject: "SATs / ACTs", price: "62,500 INR", sessions: "25+", highlight: "Strategy Focus" },
//     ]
//   }
// };

// export default function Programs() {
//   const [activeTab, setActiveTab] = useState("AP Courses");

//   return (
//     <section style={{ padding: '120px 0', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }} id ="programs">
      
//       {/* Decorative background element */}
//       <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', backgroundColor: '#0056b3', opacity: '0.03', borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(200px, -200px)' }} />

//       <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
//         {/* Section Header */}
//         <div style={{ marginBottom: '80px' }}>
//           <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', color: '#0056b3', marginBottom: '16px', display: 'block' }}>
//             Curriculum Specializations
//           </span>
//           <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px' }}>
//             <div style={{ maxWidth: '600px' }}>
//               <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#111827', letterSpacing: '-0.04em', lineHeight: '0.9', margin: 0 }}>
//                 Specialized <br />
//                 <span style={{ color: '#0056b3' }}>Programs.</span>
//               </h2>
//               <p style={{ marginTop: '24px', fontSize: '18px', color: '#6b7280', fontWeight: '500' }}>
//                 {programData[activeTab].tagline}
//               </p>
//             </div>

//             {/* Premium Tab Switcher */}
//             <div style={{ 
//               display: 'inline-flex', 
//               padding: '6px', 
//               backgroundColor: '#f3f4f6', 
//               borderRadius: '24px',
//               border: '1px solid #e5e7eb'
//             }}>
//               {Object.keys(programData).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   style={{
//                     padding: '16px 32px',
//                     borderRadius: '18px',
//                     fontSize: '14px',
//                     fontWeight: '800',
//                     border: 'none',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                     backgroundColor: activeTab === tab ? '#0056b3' : 'transparent',
//                     color: activeTab === tab ? '#ffffff' : '#6b7280',
//                     boxShadow: activeTab === tab ? '0 10px 25px -5px rgba(0, 86, 179, 0.4)' : 'none',
//                   }}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Grid with Premium Cards */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
//           {programData[activeTab].items.map((item, idx) => (
//             <div 
//               key={idx} 
//               className="program-card"
//               style={{ 
//                 backgroundColor: '#ffffff', 
//                 padding: '48px 40px', 
//                 borderRadius: '40px', 
//                 border: '1px solid #f3f4f6',
//                 boxShadow: '0 20px 50px rgba(0, 0, 0, 0.03)',
//                 transition: 'all 0.4s ease',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 minHeight: '420px'
//               }}
//             >
//               <div>
//                 <div style={{ 
//                   display: 'inline-flex', 
//                   padding: '8px 16px', 
//                   backgroundColor: '#f0f9ff', 
//                   color: '#0056b3', 
//                   borderRadius: '12px', 
//                   fontSize: '10px', 
//                   fontWeight: '900', 
//                   textTransform: 'uppercase', 
//                   letterSpacing: '0.1em',
//                   marginBottom: '32px'
//                 }}>
//                   {item.highlight}
//                 </div>
//                 {/* <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#111827', marginBottom: '12px', lineHeight: '1.2' }}>
//                   {item.subject}
//                 </h3>Explore Program */}

//                 <p style={{ fontSize: '14px', fontWeight: '700', color: '#0056b3', opacity: '0.8' }}>
//                   {item.sessions} Personalized Sessions
//                 </p>
//               </div>
              
//               <div style={{ marginTop: '40px' }}>
//                 <div style={{ height: '1px', width: '100%', backgroundColor: '#f3f4f6', marginBottom: '32px' }} />
//                 <p style={{ fontSize: '10px', fontWeight: '900', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>
//                   Total Investment
//                 </p>
//                 <p style={{ fontSize: '32px', fontWeight: '900', color: '#111827', margin: 0 }}>
//                   {/* {item.price} */}
                  
//                 </p>
//                 <button style={{ 
//                   width: '100%', 
//                   marginTop: '32px', 
//                   padding: '20px', 
//                   borderRadius: '20px', 
//                   backgroundColor: '#111827', 
//                   color: '#ffffff', 
//                   fontSize: '14px', 
//                   fontWeight: '800', 
//                   border: 'none', 
//                   cursor: 'pointer',
//                   transition: 'background-color 0.3s ease'
//                 }}>
//                   Request Demo Class
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Note */}
//         <div style={{ marginTop: '64px', textAlign: 'center' }}>
//           <div style={{ 
//             display: 'inline-flex', 
//             alignItems: 'center', 
//             gap: '12px', 
//             padding: '12px 24px', 
//             backgroundColor: '#ecfdf5', 
//             borderRadius: '100px',
//             border: '1px solid #d1fae5'
//           }}>
//             <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
//             <span style={{ fontSize: '13px', fontWeight: '700', color: '#065f46' }}>Demo classes for all programs are free of cost.</span>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .program-card:hover {
//           transform: translateY(-12px);
//           box-shadow: 0 40px 80px rgba(0, 86, 179, 0.12) !important;
//           border-color: #0056b3 !important;
//         }
//         .program-card button:hover {
//           background-color: #0056b3 !important;
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import { useState } from 'react';

const programData = {
  "AP Courses": {
    tagline: "Master the 5-point scale with Ivy-League level prep.",
    items: [
      { subject: "AP Calculus (BC)", price: "90,000 INR", sessions: "40-50", highlight: "Calculus Specialist" },
      { subject: "AP Chemistry", price: "90,000 INR", sessions: "40-50", highlight: "Lab Focus" },
      { subject: "AP Physics (IB)", price: "1,50,000 INR", sessions: "100", highlight: "Full Mastery" },
      { subject: "AP Psychology", price: "1L INR", sessions: "40-50", highlight: "Theory & Practice" },
    ]
  },
  "Competitive": {
    tagline: "Strategic entrance prep for G5 & Ivy League schools.",
    items: [
      { subject: "TMUA / TSA", price: "1.2L INR", sessions: "60", highlight: "Oxbridge Entry" },
      { subject: "UCAT / LNAT", price: "1,05,000 INR", sessions: "30-40", highlight: "Medical/Law" },
      { subject: "Olympiad Prep", price: "1,10,000 INR", sessions: "30-40", highlight: "AMC/SASMO" },
      { subject: "SATs / ACTs", price: "62,500 INR", sessions: "25+", highlight: "Strategy Focus" },
    ]
  }
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState("AP Courses");

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }} id ="programs">
      
      {/* Decorative background element */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', backgroundColor: '#0056b3', opacity: '0.03', borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(200px, -200px)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '80px' }}>
          <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', color: '#0056b3', marginBottom: '16px', display: 'block' }}>
            Curriculum Specializations
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px' }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#111827', letterSpacing: '-0.04em', lineHeight: '0.9', margin: 0 }}>
                Specialized <br />
                <span style={{ color: '#0056b3' }}>Programs.</span>
              </h2>
              <p style={{ marginTop: '24px', fontSize: '18px', color: '#6b7280', fontWeight: '500' }}>
                {programData[activeTab].tagline}
              </p>
            </div>

            {/* Premium Tab Switcher */}
            <div style={{ 
              display: 'inline-flex', 
              padding: '6px', 
              backgroundColor: '#f3f4f6', 
              borderRadius: '24px',
              border: '1px solid #e5e7eb'
            }}>
              {Object.keys(programData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '16px 32px',
                    borderRadius: '18px',
                    fontSize: '14px',
                    fontWeight: '800',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: activeTab === tab ? '#0056b3' : 'transparent',
                    color: activeTab === tab ? '#ffffff' : '#6b7280',
                    boxShadow: activeTab === tab ? '0 10px 25px -5px rgba(0, 86, 179, 0.4)' : 'none',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid with Premium Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {programData[activeTab].items.map((item, idx) => (
            <div 
              key={idx} 
              className="program-card"
              style={{ 
                backgroundColor: '#ffffff', 
                padding: '48px 40px', 
                borderRadius: '40px', 
                border: '1px solid #f3f4f6',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '420px'
              }}
            >
              <div>
                <div style={{ 
                  display: 'inline-flex', 
                  padding: '8px 16px', 
                  backgroundColor: '#f0f9ff', 
                  color: '#0056b3', 
                  borderRadius: '12px', 
                  fontSize: '10px', 
                  fontWeight: '900', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  marginBottom: '32px'
                }}>
                  {item.highlight}
                </div>
                {/* <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#111827', marginBottom: '12px', lineHeight: '1.2' }}>
                  {item.subject}
                </h3>Explore Program */}

                <p style={{ fontSize: '14px', fontWeight: '700', color: '#0056b3', opacity: '0.8' }}>
                  {item.sessions} Personalized Sessions
                </p>
              </div>
              
              <div style={{ marginTop: '40px' }}>
                <div style={{ height: '1px', width: '100%', backgroundColor: '#f3f4f6', marginBottom: '32px' }} />
                <p style={{ fontSize: '10px', fontWeight: '900', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>
                  Total Investment
                </p>
                <p style={{ fontSize: '32px', fontWeight: '900', color: '#111827', margin: 0 }}>
                  {/* {item.price} */}
                  
                </p>
                <a href="/contact">
                <button style={{ 
                  width: '100%', 
                  marginTop: '32px', 
                  padding: '20px', 
                  borderRadius: '20px', 
                  backgroundColor: '#111827', 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  fontWeight: '800', 
                  border: 'none', 
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}>
                  Request Demo Class
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '12px 24px', 
            backgroundColor: '#ecfdf5', 
            borderRadius: '100px',
            border: '1px solid #d1fae5'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#065f46' }}>Demo classes for all programs are free of cost.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .program-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 40px 80px rgba(0, 86, 179, 0.12) !important;
          border-color: #0056b3 !important;
        }
        .program-card button:hover {
          background-color: #0056b3 !important;
        }
      `}</style>
    </section>
  );
}