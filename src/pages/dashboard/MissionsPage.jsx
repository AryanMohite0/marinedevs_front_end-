import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../../components/GlassCard';

const mockMissions = [
  { id: 1, name: 'Operation Phantom Net', priority: 'HIGH', priorityClass: 'badge-critical', location: 'Sector 4G, Bay of Bengal', date: '2024-12-20', team: '4 Divers, 2 ROVs', area: '12 sq km', progress: 68, status: 'IN PROGRESS' },
  { id: 2, name: 'Deep Clean Alpha', priority: 'MEDIUM', priorityClass: 'badge-active', location: 'Andaman Trench Edge', date: '2024-12-25', team: '2 ROVs, 1 Sub', area: '45 sq km', progress: 32, status: 'IN PROGRESS' },
  { id: 3, name: 'Reef Rescue Bravo', priority: 'HIGH', priorityClass: 'badge-critical', location: 'Coral Atoll 7', date: '2024-12-18', team: '8 Divers', area: '5 sq km', progress: 95, status: 'NEAR COMPLETION' },
  { id: 4, name: 'Coastal Sweep Delta', priority: 'LOW', priorityClass: 'badge-pending', location: 'Eastern Seaboard', date: '2025-01-05', team: 'TBD', area: '120 sq km', progress: 0, status: 'PLANNING' },
  { id: 5, name: 'Wreck Recovery Echo', priority: 'MEDIUM', priorityClass: 'badge-active', location: 'Coordinates Classified', date: '2024-12-22', team: 'Special Ops Team', area: '2 sq km', progress: 45, status: 'IN PROGRESS' },
];

export const MissionsPage = () => {
  return (
    <motion.div 
      className="dashboard-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard-topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="dashboard-title section-heading">Cleanup Missions</h1>
        <button className="btn-gold" style={{ padding: '0.5rem 1rem', fontFamily: 'VT323', fontSize: '1.2rem', cursor: 'pointer' }}>DEPLOY MISSION ⚓</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {mockMissions.map((mission) => (
          <GlassCard key={mission.id} style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontFamily: '"Pirata One", serif', color: '#f3d47b', fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>{mission.name}</h3>
                <span className={`badge ${mission.priorityClass}`} style={{ fontSize: '0.9rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontFamily: 'VT323' }}>Priority: {mission.priority}</span>
              </div>
              <span className="badge" style={{ fontSize: '1rem', padding: '0.25rem 0.75rem', borderRadius: '4px', fontFamily: 'VT323', border: '1px solid #7f8565' }}>{mission.status}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', fontFamily: 'VT323', color: '#c1ddd3', fontSize: '1.1rem' }}>
              <div><strong style={{ color: '#cec386' }}>Location:</strong> {mission.location}</div>
              <div><strong style={{ color: '#cec386' }}>Date:</strong> {mission.date}</div>
              <div><strong style={{ color: '#cec386' }}>Team Size:</strong> {mission.team}</div>
              <div><strong style={{ color: '#cec386' }}>Est. Area:</strong> {mission.area}</div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'VT323', color: '#f0e4b4', marginBottom: '0.5rem' }}>
                <span>Progress</span>
                <span>{mission.progress}% Complete</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: '#7f856530', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${mission.progress}%`, height: '100%', background: 'linear-gradient(90deg, #d4b864, #9ed8d3)', borderRadius: '2px' }}></div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
};

export default MissionsPage;
