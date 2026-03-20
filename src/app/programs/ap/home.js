"use client";

import Link from 'next/link';

export default function APCalculusPage() {
  const curriculumPoints = [
    { title: "Limits & Continuity", desc: "Foundational concepts for both AB and BC tracks." },
    { title: "Differentiation", desc: "Analytical, graphical, and verbal representations of derivatives." },
    { title: "Integration", desc: "Accumulation of change and fundamental theorems." },
    { title: "BC Exclusives", desc: "Parametric, polar, and vector functions plus Series." }
  ];

  const methodology = [
    { label: "Diagnostic Test", detail: "40-minute baseline assessment with 27 questions[cite: 74, 80, 84]." },
    { label: "Unit Drills", detail: "Structured topic notes and focused practice exercises[cite: 75, 76]." },
    { label: "Mock Exams", detail: "Full-length simulations with predictive scoring accuracy[cite: 89, 91]." }
  ];

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', color: '#111827', lineHeight: '1.5' }}>
      
      {/* Hero Section */}
      <section style={{ 
        padding: '160px 24px 80px', 
        background: 'linear-gradient(rgba(0, 86, 179, 0.05) 0%, #ffffff 100%)',
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ color: '#0056b3', fontSize: '13px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Elite Test Prep
          </span>
          <h1 style={{ fontSize: '64px', fontWeight: '900', marginTop: '20px', letterSpacing: '-2px', lineHeight: '1' }}>
            Master AP Calculus <br />
            <span style={{ color: '#0056b3' }}>BC & AB</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#4b5563', marginTop: '24px', maxWidth: '700px', margin: '24px auto' }}>
            Comprehensive, 1-on-1 handholding designed to turn complex limits and integrals into effortless success[cite: 60, 68].
          </p>
        </div>
      </section>

      {/* Pricing & Stats Bar */}
      <section style={{ maxWidth: '1100px', margin: '-40px auto 0', padding: '0 24px' }}>
        <div style={{ 
          backgroundColor: '#111827', 
          borderRadius: '24px', 
          padding: '30px', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          color: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '700', textTransform: 'uppercase' }}>Investment</div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#60a5fa' }}>90,000 INR </div>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid #374151', borderRight: '1px solid #374151' }}>
            <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '700', textTransform: 'uppercase' }}>Sessions</div>
            <div style={{ fontSize: '24px', fontWeight: '800' }}>40-50 Sessions </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '700', textTransform: 'uppercase' }}>Expert Mentor</div>
            <div style={{ fontSize: '24px', fontWeight: '800' }}>Mr. Motwani </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Methodology */}
      <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
          
          {/* Left: Methodology */}
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '32px' }}>The Methodology</h2>
            {methodology.map((item, i) => (
              <div key={i} style={{ marginBottom: '32px', paddingLeft: '24px', borderLeft: '3px solid #0056b3' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0056b3' }}>{item.label}</h4>
                <p style={{ color: '#4b5563', marginTop: '4px' }}>{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Right: Curriculum Points */}
          <div style={{ backgroundColor: '#f9fafb', padding: '40px', borderRadius: '40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '32px' }}>Curriculum</h2>
            <div style={{ display: 'grid', gap: '24px' }}>
              {curriculumPoints.map((point, i) => (
                <div key={i}>
                  <h4 style={{ fontSize: '16px', fontWeight: '800' }}>{point.title}</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280' }}>{point.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>
                * Customized, exam-specific courses with 120+ Success Stories[cite: 55, 95].
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Lead Generation Section */}
      <section style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 100px', 
        padding: '80px 40px', 
        backgroundColor: '#0056b3', 
        borderRadius: '48px',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '16px' }}>Secure Your 5 Today.</h2>
        <p style={{ fontSize: '18px', color: '#dbeafe', marginBottom: '40px' }}>
          Book a free demo class and experience our personalized mentorship firsthand[cite: 181].
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/demo" style={{ 
            backgroundColor: '#ffffff', 
            color: '#0056b3', 
            padding: '20px 48px', 
            borderRadius: '20px', 
            fontWeight: '900', 
            textDecoration: 'none',
            fontSize: '18px'
          }}>
            Book Free Demo
          </Link>
          <Link href="tel:+919888661618" style={{ 
            backgroundColor: 'rgba(255,255,255,0.1)', 
            color: '#ffffff', 
            padding: '20px 48px', 
            borderRadius: '20px', 
            fontWeight: '900', 
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            Call: +91 98886 61618 [cite: 194]
          </Link>
        </div>
      </section>

    </main>
  );
}