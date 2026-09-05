import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ImpactPage() {
  return (
    <div className="page section-dark" style={{ minHeight: '100vh', padding: '8rem 2rem 4rem 2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>◉ IMPACT ◉</div>
          <h1 className="section-heading" style={{ color: '#f3d47b', fontSize: 'clamp(40px, 6vw, 72px)' }}>Signals from the Deep</h1>
        </motion.div>

        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { value: '12,847', label: 'Sonar Scans Processed' },
            { value: '3,291', label: 'Objects Detected' },
            { value: '847', label: 'Ghost Nets Located' },
            { value: '156', label: 'Cleanup Missions Launched' }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="stat-card" style={{ padding: '2rem 1rem', textAlign: 'center', background: 'linear-gradient(140deg, #092c2ad4, #031716e8)', border: '1px solid #7f8565', position: 'relative' }}>
              <div className="glass-card-rim" />
              <div style={{ color: '#e5c867', fontFamily: "'IM Fell English SC', serif", fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.value}</div>
              <div style={{ color: '#788c7b', fontFamily: 'VT323, monospace', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="glass-card" style={{ padding: '3rem', marginBottom: '4rem' }}>
            <div className="glass-card-rim" />
            <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', lineHeight: '1.6', margin: 0 }}>
              Our technology is not just about data; it's about preservation. By rapidly identifying ghost nets, submerged pollutants, and hazardous wreckage, MarineGuard enables environmental agencies to prioritize targeted extraction missions. Every coordinate mapped is a step toward a cleaner, safer oceanic ecosystem, drastically reducing the time required to survey vast underwater territories.
            </p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: 'center' }}>
          <div className="depth-rule" style={{ margin: '0 auto 4rem auto' }}>⌁</div>
          <blockquote style={{ margin: 0 }}>
            <p style={{ color: '#f3d47b', fontFamily: "'IM Fell English SC', serif", fontSize: '2.5rem', fontStyle: 'italic', lineHeight: '1.4' }}>
              "The ocean demands vigilance.<br/>We answer with intelligence."
            </p>
          </blockquote>
        </motion.div>

      </div>
    </div>
  );
}
