import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Upload, Cpu, Eye, Target } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function HowItWorksPage() {
  return (
    <div className="page section-dark" style={{ minHeight: '100vh', padding: '8rem 2rem 4rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>◉ OPERATIONS MANUAL ◉</div>
          <h1 className="section-heading" style={{ color: '#f3d47b', fontSize: 'clamp(40px, 6vw, 72px)' }}>How the Deep Reveals Its Secrets</h1>
        </motion.div>

        <motion.div 
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: Upload, step: '01', title: 'Upload Sonar Data', desc: 'Upload raw side-scan sonar imagery from your survey vessel into the secure MarineGuard portal. Our system supports high-resolution acoustic data formats for maximum fidelity.' },
            { icon: Cpu, step: '02', title: 'AI Analysis', desc: 'Our proprietary deep learning models scan the telemetry layer by layer. The AI detects anomalies, filters out noise, and classifies underwater objects with precise confidence scoring.' },
            { icon: Eye, step: '03', title: 'Review Detections', desc: 'Operators can inspect the structured intelligence via an interactive dashboard. View detected bounding boxes, review classification types (e.g. Ghost Nets, Debris), and examine spatial coordinates.' },
            { icon: Target, step: '04', title: 'Make Better Decisions', desc: 'Leverage the insights to deploy dive teams, schedule cleanup missions, or reroute vessels safely. MarineGuard transforms raw acoustics into actionable maritime domain awareness.' }
          ].map((step, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div className="glass-card-rim" />
              <div style={{ color: '#9ed8d3', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
                <step.icon size={40} />
                <span style={{ fontFamily: 'VT323, monospace', marginTop: '0.5rem', color: '#788c7b', fontSize: '1.2rem' }}>{step.step}</span>
              </div>
              <div>
                <h3 style={{ color: '#e5c867', fontFamily: "'IM Fell English SC', serif", fontSize: '1.75rem', margin: '0 0 1rem 0' }}>{step.title}</h3>
                <p style={{ color: '#f0e4b4', fontFamily: 'VT323, monospace', fontSize: '1.2rem', lineHeight: '1.5', margin: 0 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ marginTop: '6rem' }}>
          <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <div className="glass-card-rim" />
            <h3 style={{ color: '#f3d47b', fontFamily: "'IM Fell English SC', serif", fontSize: '2rem', marginBottom: '2rem' }}>Ready to analyze your first sonar scan?</h3>
            <Link to="/login" className="btn-gold" style={{ textDecoration: 'none', padding: '1rem 3rem', fontSize: '1.25rem', display: 'inline-block' }}>
              SET SAIL ⚓
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
