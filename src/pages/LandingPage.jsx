import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScanSearch, Radar, Zap, Globe, Trash2, Anchor, Ship, Upload, Cpu, Eye, Target, Users, Shield, Navigation } from 'lucide-react';

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

export default function LandingPage() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <video 
          className="ocean-video" 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{
            filter: 'saturate(.46) contrast(1.2) brightness(.42) sepia(.14) hue-rotate(126deg)', 
            transform: 'scale(1.025)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: 0
          }}
        >
          <source src="/storm-ocean.mp4" type="video/mp4" />
        </video>
        <div 
          className="ocean-gradient" 
          style={{
            background: 'radial-gradient(ellipse at 18% 45%, transparent 0 10%, #001014a8 49%, #010506ed 100%), linear-gradient(90deg, #010405c7, #04131642 55%, #01050594), linear-gradient(0deg, #010506cf, transparent 62%)', 
            position: 'absolute', 
            inset: 0, 
            zIndex: 1
          }}
        />

        {/* Depth Gauge Decoration */}
        <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '4rem', color: '#788c7b', fontFamily: 'VT323, monospace' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>0m</span><div style={{ width: '20px', height: '1px', backgroundColor: '#788c7b' }}/></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>500m</span><div style={{ width: '20px', height: '1px', backgroundColor: '#788c7b' }}/></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>1000m</span><div style={{ width: '20px', height: '1px', backgroundColor: '#788c7b' }}/></div>
        </div>

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '0 2rem' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', maxWidth: '800px' }}>
            <div className="eyebrow-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ScanSearch size={16} /> ◉ SIDE-SCAN SONAR INTELLIGENCE ◉
            </div>
            <h1 className="section-heading" style={{ fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: '1.1', margin: 0, color: '#f3d47b' }}>
              See What Lies<br />
              <span style={{ color: '#9ed8d3' }}>Beneath the Surface</span>
            </h1>
            <p style={{ color: '#c1ddd3', fontSize: '1.25rem', fontFamily: 'VT323, monospace', margin: '0 0 2rem 0' }}>
              AI-powered underwater intelligence for detecting marine debris, ghost nets, shipwrecks and suspicious sonar anomalies.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/login" className="btn-gold" style={{ textDecoration: 'none', padding: '0.75rem 2rem', fontSize: '1.25rem' }}>SET SAIL ⚓</Link>
              <a href="#features" className="btn-ghost" style={{ textDecoration: 'none', padding: '0.75rem 2rem', fontSize: '1.25rem' }}>LEARN MORE</a>
            </div>
          </motion.div>
        </div>

        {/* Sonar Telemetry Footer */}
        <div style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'center', color: '#788c7b', fontFamily: 'VT323, monospace', letterSpacing: '2px', fontSize: '0.9rem' }}>
          SONAR // 18° 43′ N, 69° 08′ W  ·  DEPTH : 3842M  ·  WATER TEMP : 3.8°C
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-dark" style={{ padding: '6rem 2rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>◉ CAPABILITIES ◉</div>
          <h2 className="section-heading" style={{ color: '#f3d47b' }}>Deep Sea Arsenal</h2>
        </motion.div>

        <motion.div 
          className="feature-grid" 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { icon: Radar, title: 'Anomaly Detection', desc: 'Detect unusual objects and suspicious structures from side-scan sonar imagery using AI-assisted detection.' },
            { icon: Zap, title: 'AI Sonar Analysis', desc: 'Transform complex acoustic imagery into structured intelligence that helps operators understand what lies beneath.' },
            { icon: Globe, title: 'Geospatial Intelligence', desc: 'Map and track detections with precise coordinates integrated into a maritime spatial intelligence system.' },
            { icon: Trash2, title: 'Marine Debris', desc: 'Identify submerged waste, abandoned equipment, and marine pollution threatening ocean ecosystems.' },
            { icon: Anchor, title: 'Ghost Net Detection', desc: 'Locate derelict fishing gear and ghost nets that pose risks to marine life and vessel navigation.' },
            { icon: Ship, title: 'Shipwreck Analysis', desc: 'Identify potential wreck structures and unusual sonar signatures associated with submerged vessels.' }
          ].map((feature, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="glass-card" style={{ padding: '2rem' }}>
              <div className="glass-card-rim" />
              <feature.icon size={32} style={{ color: '#9ed8d3', marginBottom: '1rem' }} />
              <h3 style={{ color: '#e5c867', fontFamily: "'IM Fell English SC', serif", fontSize: '1.5rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
              <p style={{ color: '#f0e4b4', fontFamily: 'VT323, monospace', fontSize: '1.1rem', lineHeight: '1.4' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="section-dark" style={{ padding: '6rem 2rem', backgroundColor: '#010606' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>◉ PROCESS ◉</div>
          <h2 className="section-heading" style={{ color: '#f3d47b' }}>Charting the Course</h2>
        </motion.div>

        <motion.div 
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: Upload, step: '01', title: 'Upload Sonar Data', desc: 'Upload side-scan sonar imagery for automated analysis and classification.' },
            { icon: Cpu, step: '02', title: 'AI Analysis', desc: 'Our AI model processes the sonar data, detecting anomalies and classifying underwater objects.' },
            { icon: Eye, step: '03', title: 'Review Detections', desc: 'Inspect detected objects, confidence information, classifications and relevant spatial details.' },
            { icon: Target, step: '04', title: 'Make Better Decisions', desc: 'Use structured intelligence to prioritize investigations and improve marine survey operations.' }
          ].map((step, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div className="glass-card-rim" />
              <div style={{ color: '#9ed8d3', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <step.icon size={32} />
                <span style={{ fontFamily: 'VT323, monospace', marginTop: '0.5rem', color: '#788c7b' }}>{step.step}</span>
              </div>
              <div>
                <h3 style={{ color: '#e5c867', fontFamily: "'IM Fell English SC', serif", fontSize: '1.5rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#f0e4b4', fontFamily: 'VT323, monospace', fontSize: '1.1rem', margin: 0 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Who It Helps Section */}
      <section className="section-dark" style={{ padding: '6rem 2rem' }}>
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: Users, title: 'Survey Teams', desc: 'Support underwater surveys with faster access to relevant sonar findings.' },
            { icon: Shield, title: 'Conservation Teams', desc: 'Help identify potential environmental hazards and areas requiring attention.' },
            { icon: Navigation, title: 'Maritime Authorities', desc: 'Enhance maritime domain awareness with AI-assisted underwater intelligence.' }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="glass-card-rim" />
              <item.icon size={48} style={{ color: '#9ed8d3', margin: '0 auto 1.5rem auto' }} />
              <h3 style={{ color: '#e5c867', fontFamily: "'IM Fell English SC', serif", fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: '#f0e4b4', fontFamily: 'VT323, monospace', fontSize: '1.1rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-dark" style={{ padding: '8rem 2rem', textAlign: 'center', backgroundColor: '#010505', borderTop: '1px solid #7f8565' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ color: '#f3d47b', marginBottom: '1rem' }}>Ready to Dive Deep?</h2>
          <p style={{ color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
            Deploy underwater intelligence that sees what others miss.
          </p>
          <Link to="/login" className="btn-gold" style={{ textDecoration: 'none', padding: '1rem 3rem', fontSize: '1.25rem', display: 'inline-block' }}>
            BEGIN YOUR MISSION ⚓
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
