import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="page section-dark" style={{ minHeight: '100vh', padding: '8rem 2rem 4rem 2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>◉ ABOUT ◉</div>
          <h1 className="section-heading" style={{ color: '#f3d47b', fontSize: 'clamp(40px, 6vw, 72px)' }}>The Abyssal Observatory</h1>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp} 
          style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}
        >
          <div style={{ flex: '1 1 500px' }}>
            <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              MarineGuard AI was forged to shine a light into the deepest, darkest corners of our oceans. We build AI-powered underwater monitoring systems that specialize in complex side-scan sonar analysis.
            </p>
            <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Our technology processes complex acoustic imagery, cutting through the noise of the deep sea to reveal what lies beneath—from hidden shipwrecks to hazardous ghost nets that threaten marine life.
            </p>
            <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', lineHeight: '1.6' }}>
              By merging advanced deep learning with maritime intelligence, we aim to accelerate ocean conservation efforts and ensure safer navigational waters for generations to come.
            </p>
          </div>
          
          <div className="glass-card" style={{ flex: '1 1 300px', padding: '2rem' }}>
            <div className="glass-card-rim" />
            <h3 style={{ color: '#e5c867', fontFamily: "'IM Fell English SC', serif", fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #7f8565', paddingBottom: '0.5rem' }}>Operational Details</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'VT323, monospace', fontSize: '1.2rem', color: '#f0e4b4', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><span style={{ color: '#788c7b' }}>FOUNDED:</span> 2024</li>
              <li><span style={{ color: '#788c7b' }}>MISSION:</span> Ocean Intelligence</li>
              <li><span style={{ color: '#788c7b' }}>PARTNERS:</span> NOIT & MoES</li>
              <li><span style={{ color: '#788c7b' }}>INITIATIVE:</span> Atma Nirbhar Bharat</li>
            </ul>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ marginTop: '6rem', textAlign: 'center' }}>
          <div className="depth-rule" style={{ margin: '0 auto 4rem auto' }}>⌁</div>
          <h2 className="section-heading" style={{ color: '#f3d47b', fontSize: '2.5rem', marginBottom: '2rem' }}>Our Purpose</h2>
          <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
            The ocean covers more than 70% of our planet, yet its depths remain largely undocumented and unprotected. Our mandate is simple: equip those who protect our oceans with the intelligence they need to act swiftly. Every scan we process, every ghost net we identify, brings us one step closer to a pristine marine environment.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
