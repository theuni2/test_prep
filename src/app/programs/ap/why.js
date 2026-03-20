import React from 'react'

export default function Why() {
  return (
    <div>
        <section style={{ padding: '100px 24px', backgroundColor: '#f8faff', borderRadius: '60px', margin: '0 24px' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h2 style={{ fontSize: '42px', fontWeight: '900', textAlign: 'center', marginBottom: '60px' }}>Why Prepare with AcademiX?</h2>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
      {/* Feature 1 */}
      <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '32px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0056b3', marginBottom: '16px' }}>Customized Curriculum</h3>
        <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.6' }}>
          We provide exam-specific courses tailored to your current proficiency level[cite: 55]. We don't just teach math; we teach the AP Exam[cite: 65].
        </p>
      </div>

      {/* Feature 2 */}
      <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '32px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0056b3', marginBottom: '16px' }}>1-on-1 Handholding</h3>
        <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.6' }}>
          Experience personalized, consistent mentorship from experts with 10+ years of specialized experience[cite: 60, 62, 63].
        </p>
      </div>

      {/* Feature 3 */}
      <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '32px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0056b3', marginBottom: '16px' }}>Diagnostic Intelligence</h3>
        <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.6' }}>
          Every journey starts with a 40-minute diagnostic test to evaluate your baseline[cite: 73, 74, 80]. No more guessing where you stand.
        </p>
      </div>

      {/* Feature 4 */}
      <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '32px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0056b3', marginBottom: '16px' }}>Original Full Mocks</h3>
        <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.6' }}>
          Practice with original full AP mocks that offer predictive scoring accuracy, so you're never surprised on exam day[cite: 89, 91].
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
