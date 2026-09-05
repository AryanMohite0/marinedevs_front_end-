import React from 'react';
import { motion } from 'framer-motion';
import { FileBarChart, TrendingUp, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatCard } from '../../components/StatCard';
import { GlassCard } from '../../components/GlassCard';

const mockBarData = [
  { name: 'Ghost Net', value: 312 },
  { name: 'Marine Debris', value: 587 },
  { name: 'Shipwreck', value: 89 },
  { name: 'Anomaly', value: 156 },
  { name: 'Unknown', value: 47 },
];

const mockConfidenceData = [
  { range: '95-100%', percent: 42, color: 'linear-gradient(90deg, #d4b864, #9ed8d3)' },
  { range: '85-94%', percent: 31, color: 'linear-gradient(90deg, #d4b864, #9ed8d3)' },
  { range: '75-84%', percent: 18, color: 'linear-gradient(90deg, #d4b864, #9ed8d3)' },
  { range: '65-74%', percent: 7, color: 'linear-gradient(90deg, #d4b864, #9ed8d3)' },
  { range: '<65%', percent: 2, color: 'linear-gradient(90deg, #d4b864, #9ed8d3)' },
];

export const ReportsPage = () => {
  return (
    <motion.div 
      className="dashboard-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard-topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="dashboard-title section-heading">Reports</h1>
        <button className="btn-ghost" style={{ padding: '0.5rem 1rem', fontFamily: 'VT323', fontSize: '1.2rem', cursor: 'pointer', background: 'transparent', border: '1px solid #d4b864', color: '#d4b864' }}>EXPORT LOG ↗</button>
      </div>

      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <StatCard icon={FileBarChart} value="156" label="Reports Generated" />
        <StatCard icon={TrendingUp} value="+23%" label="Detection Rate" meta="vs last quarter" />
        <StatCard icon={Clock} value="2.3s" label="Avg Processing Time" />
      </div>

      <GlassCard className="chart-container" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
        <h3 className="chart-title" style={{ fontFamily: '"Pirata One", serif', color: '#f3d47b', fontSize: '1.5rem', marginBottom: '1rem' }}>Detections by Category</h3>
        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockBarData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#7f856520" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#819e94', fontFamily: 'VT323', fontSize: 14 }} />
              <YAxis tick={{ fill: '#819e94', fontFamily: 'VT323', fontSize: 14 }} />
              <Tooltip 
                cursor={{ fill: '#7f856520' }}
                contentStyle={{ backgroundColor: '#071a1a', border: '1px solid #d4b864', fontFamily: 'VT323', color: '#c1ddd3' }}
                itemStyle={{ color: '#f3d47b', fontFamily: 'VT323' }}
              />
              <Bar dataKey="value" fill="#d4b864" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      <GlassCard style={{ padding: '1.5rem' }}>
        <h3 className="chart-title" style={{ fontFamily: '"Pirata One", serif', color: '#f3d47b', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Detection Confidence Distribution</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {mockConfidenceData.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '80px', fontFamily: 'VT323', color: '#c1ddd3', fontSize: '1.1rem' }}>{item.range}</div>
              <div style={{ flex: 1, height: '8px', background: '#020909', borderRadius: '4px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: '100%', background: item.color, borderRadius: '4px' }}
                />
              </div>
              <div style={{ width: '40px', textAlign: 'right', fontFamily: 'VT323', color: '#f3d47b', fontSize: '1.1rem' }}>{item.percent}%</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ReportsPage;
