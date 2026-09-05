import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../../components/GlassCard';

const mockSurveys = [
  { id: 1, name: 'Bay Sector Alpha', date: '2024-12-15', stats: '24 scans · 8 detections', status: 'ACTIVE', statusClass: 'badge-active' },
  { id: 2, name: 'Deep Trench Gamma', date: '2024-12-10', stats: '56 scans · 12 detections', status: 'COMPLETED', statusClass: 'badge-completed' },
  { id: 3, name: 'Coastal Grid Delta', date: '2024-12-18', stats: '0 scans · 0 detections', status: 'PENDING', statusClass: 'badge-pending' },
  { id: 4, name: 'Reef Sector Echo', date: '2024-11-22', stats: '12 scans · 4 detections', status: 'COMPLETED', statusClass: 'badge-completed' },
  { id: 5, name: 'Abyssal Plain Zeta', date: '2024-12-05', stats: '42 scans · 15 detections', status: 'ACTIVE', statusClass: 'badge-active' },
  { id: 6, name: 'Island Chain Sigma', date: '2024-12-20', stats: '0 scans · 0 detections', status: 'PENDING', statusClass: 'badge-pending' },
];

export const SurveysPage = () => {
  return (
    <motion.div 
      className="dashboard-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard-topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="dashboard-title section-heading">Surveys</h1>
        <button className="btn-gold" style={{ padding: '0.5rem 1rem', fontFamily: 'VT323', fontSize: '1.2rem', cursor: 'pointer' }}>NEW SURVEY ⚓</button>
      </div>

      <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {mockSurveys.map((survey) => (
          <GlassCard key={survey.id} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontFamily: '"Pirata One", serif', color: '#f3d47b', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>{survey.name}</h3>
                <div style={{ fontFamily: 'VT323', color: '#9ed8d3', fontSize: '1.1rem' }}>{survey.date}</div>
              </div>
              <span className={`badge ${survey.statusClass}`} style={{ fontSize: '0.9rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontFamily: 'VT323' }}>{survey.status}</span>
            </div>
            
            <div style={{ fontFamily: 'VT323', color: '#f0e4b4', fontSize: '1.1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #7f856540' }}>
              {survey.stats}
            </div>

            <button className="btn-ghost" style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem', fontFamily: 'VT323', fontSize: '1.1rem', cursor: 'pointer', background: 'transparent', border: '1px solid #d4b864', color: '#d4b864' }}>VIEW DETAILS</button>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
};

export default SurveysPage;
