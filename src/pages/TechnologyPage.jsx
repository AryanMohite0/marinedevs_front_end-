import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, Globe, BarChart3 } from 'lucide-react';

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

export default function TechnologyPage() {
  return (
    <div className="page section-dark" style={{ minHeight: '100vh', padding: '8rem 2rem 4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>◉ TECHNOLOGY ◉</div>
          <h1 className="section-heading" style={{ color: '#f3d47b', fontSize: 'clamp(40px, 6vw, 72px)' }}>The Engine Below</h1>
        </motion.div>

        <motion.div 
          className="feature-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '6rem' }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: Brain, title: 'Deep Learning Models', desc: 'State-of-the-art neural networks trained on side-scan sonar imagery for object detection and classification.' },
            { icon: Layers, title: 'Intelligent Classification', desc: 'Detected regions organized into meaningful categories with confidence scores for easier interpretation.' },
            { icon: Globe, title: 'Geospatial Intelligence', desc: 'Precise coordinate mapping and spatial analysis integrated into an interactive marine environment.' },
            { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Comprehensive visualization of detection data, trends, and mission analytics in real-time.' }
          ].map((feature, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="glass-card" style={{ padding: '2rem' }}>
              <div className="glass-card-rim" />
              <feature.icon size={36} style={{ color: '#9ed8d3', marginBottom: '1.5rem' }} />
              <h3 style={{ color: '#e5c867', fontFamily: "'IM Fell English SC', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: '#f0e4b4', fontFamily: 'VT323, monospace', fontSize: '1.1rem', lineHeight: '1.5' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="depth-rule" style={{ margin: '0 auto 4rem auto' }}>⌁</div>
          <h2 className="section-heading" style={{ color: '#f3d47b', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Sonar Processing Pipeline</h2>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div className="glass-card-rim" />
            <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Raw sonar returns are often noisy, distorted by thermoclines, and difficult for the human eye to interpret rapidly. The MarineGuard Engine operates on a multi-stage ingestion pipeline.
            </p>
            <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              First, the acoustic imagery undergoes normalization and artifact reduction. Next, a specialized convolutional neural network (CNN) sweeps the imagery, identifying anomalous acoustic shadows and highlights that deviate from the natural seafloor baseline.
            </p>
            <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', lineHeight: '1.6' }}>
              Finally, spatial heuristics are applied to calculate the approximate dimensions and coordinates of the target, transmitting structured JSON metadata directly to the live dashboard.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
