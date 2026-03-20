"use client";

import Link from 'next/link';

export default function FinalSection() {
  const faqs = [
    { 
      q: "How are the 40-50 sessions structured?", 
      a: "Each session is a personalized 1-on-1 handholding experience focused on unit-wise notes, drills, and diagnostic tests to ensure mastery of AP Calculus BC/AB concepts." 
    },
    { 
      q: "What is the 'Predictive Scoring' mentioned?", 
      a: "We use original full AP mocks and milestone-based assessments to track your progress and accurately predict your performance on the actual exam day." 
    },
    { 
      q: "Can I try a class before committing to the 90,000 INR investment?", 
      a: "Absolutely. Demo classes for all our programs, including AP Calculus and IB Mathematics, are completely free." 
    }
  ];

  return (
    <section style={{ fontFamily: 'sans-serif', backgroundColor: '#ffffff' }}>
      
      {/* FAQ Accordion Area */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 24px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '900', textAlign: 'center', marginBottom: '48px', color: '#111827' }}>
          Common Queries
        </h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ 
              padding: '32px', 
              borderRadius: '24px', 
              backgroundColor: '#f8faff', 
              border: '1px solid #e5e7eb' 
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0056b3', marginBottom: '12px' }}>{faq.q}</h4>
              <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6', fontWeight: '500' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Footer */}
      <footer style={{ backgroundColor: '#111827', color: '#ffffff', padding: '80px 24px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '60px' }}>
            
            {/* Column 1: Brand */}
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '20px' }}>
                Academi<span style={{ color: '#0056b3' }}>X</span>
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6' }}>
                A dedicated test-prep division founded by the leadership behind Uni Discovery & Career Discovery. We train harder so exam day feels effortless.
              </p>
            </div>

            {/* Column 2: Programs */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', color: '#4b5563', letterSpacing: '2px', marginBottom: '24px' }}>Programs</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#9ca3af' }}>
                <li style={{ marginBottom: '12px' }}>AP Calculus (BC/AB)</li>
                <li style={{ marginBottom: '12px' }}>IB Mathematics</li>
                <li style={{ marginBottom: '12px' }}>Olympiad Prep (SASMO/SEAMO)</li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', color: '#4b5563', letterSpacing: '2px', marginBottom: '24px' }}>Get In Touch</h4>
              <p style={{ fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>Milki (Coordinator)</p>
              <Link href="tel:+919888661618" style={{ fontSize: '20px', fontWeight: '900', color: '#0056b3', textDecoration: 'none' }}>
                +91 98886 61618
              </Link>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1f2937', paddingTop: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#4b5563', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
              © 2026 AcademiX Test Prep • A Uni Discovery Initiative
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}