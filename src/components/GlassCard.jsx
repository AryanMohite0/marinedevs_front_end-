import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '', style, onClick }) => {
  return (
    <motion.div 
      className={`glass-card \${className}`} 
      style={style} 
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card-rim"></div>
      {children}
    </motion.div>
  );
};

export default GlassCard;
