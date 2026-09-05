import React from 'react';
import { motion } from 'framer-motion';

export const StatCard = ({ icon: Icon, label, value, meta }) => {
  return (
    <motion.div 
      className="stat-card"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        {Icon && <Icon size={20} color="#e5c867" style={{ marginRight: '10px' }} />}
        <span style={{ color: '#cec386', fontFamily: '"IM Fell English SC", serif', fontSize: '14px' }}>{label}</span>
      </div>
      <div style={{ fontSize: '28px', color: '#f0e4b4', fontFamily: 'VT323, monospace', marginBottom: '5px' }}>
        {value}
      </div>
      {meta && (
        <div style={{ color: '#788c7b', fontSize: '12px', fontFamily: 'VT323, monospace' }}>
          {meta}
        </div>
      )}
    </motion.div>
  );
};

export default StatCard;
