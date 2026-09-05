import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, Radar, AlertTriangle, MapPin } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatCard } from '../../components/StatCard';
import { GlassCard } from '../../components/GlassCard';
import { EyebrowBadge } from '../../components/EyebrowBadge';

const mockChartData = Array.from({ length: 30 }, (_, i) => ({
  date: `2024-03-${String(i + 1).padStart(2, '0')}`,
  scans: Math.floor(Math.random() * 200) + 100,
  detections: Math.floor(Math.random() * 50) + 10,
}));

const mockTableData = [
  { id: 'DET-001', type: 'Ghost Net', confidence: '94.2%', location: '18°42′N 69°07′W', status: 'ACTIVE', statusClass: 'badge-active' },
  { id: 'DET-002', type: 'Marine Debris', confidence: '88.7%', location: '12°14′N 81°12′E', status: 'REVIEWED', statusClass: 'badge-completed' },
  { id: 'DET-003', type: 'Shipwreck', confidence: '99.1%', location: '15°33′N 75°45′E', status: 'CRITICAL', statusClass: 'badge-critical' },
  { id: 'DET-004', type: 'Sonar Anomaly', confidence: '76.4%', location: '10°22′N 79°01′E', status: 'PENDING', statusClass: 'badge-pending' },
  { id: 'DET-005', type: 'Unknown Object', confidence: '62.8%', location: '14°11′N 82°30′E', status: 'ACTIVE', statusClass: 'badge-active' },
];

export const DashboardPage = () => {
  return (
    <motion.div 
      className="dashboard-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard-topbar">
        <h1 className="dashboard-title section-heading">Command Center</h1>
        <EyebrowBadge>● SYSTEM ONLINE</EyebrowBadge>
      </div>

      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <StatCard icon={ScanSearch} value="2,847" label="Total Scans" meta="+12% this month" />
        <StatCard icon={Radar} value="1,203" label="Detections" meta="94.7% accuracy" />
        <StatCard icon={AlertTriangle} value="47" label="Active Anomalies" meta="3 critical" />
        <StatCard icon={MapPin} value="15,420 km²" label="Coverage Area" meta="Bay of Bengal" />
      </div>

      <GlassCard className="chart-container" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
        <h3 className="chart-title" style={{ fontFamily: '"Pirata One", serif', color: '#f3d47b', fontSize: '1.5rem', marginBottom: '1rem' }}>Scan Activity (Last 30 Days)</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorScans" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4b864" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#d4b864" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDets" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9ed8d3" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#9ed8d3" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#7f856520" />
              <XAxis dataKey="date" tick={{ fill: '#819e94', fontFamily: 'VT323', fontSize: 14 }} />
              <YAxis tick={{ fill: '#819e94', fontFamily: 'VT323', fontSize: 14 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#071a1a', border: '1px solid #d4b864', fontFamily: 'VT323', color: '#c1ddd3' }}
                itemStyle={{ fontFamily: 'VT323' }}
              />
              <Area type="monotone" dataKey="scans" stroke="#d4b864" fillOpacity={1} fill="url(#colorScans)" />
              <Area type="monotone" dataKey="detections" stroke="#9ed8d3" fillOpacity={1} fill="url(#colorDets)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      <GlassCard style={{ padding: '1.5rem' }}>
        <h3 className="chart-title" style={{ fontFamily: '"Pirata One", serif', color: '#f3d47b', fontSize: '1.5rem', marginBottom: '1rem' }}>Recent Detections</h3>
        <div className="sonar-table" style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #7f8565', color: '#cec386', fontFamily: 'VT323', fontSize: '1.1rem' }}>
                <th style={{ padding: '0.75rem' }}>ID</th>
                <th style={{ padding: '0.75rem' }}>Type</th>
                <th style={{ padding: '0.75rem' }}>Confidence</th>
                <th style={{ padding: '0.75rem' }}>Location</th>
                <th style={{ padding: '0.75rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockTableData.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #7f856540', color: '#f0e4b4', fontFamily: 'VT323', fontSize: '1.1rem' }}>
                  <td style={{ padding: '0.75rem' }}>{row.id}</td>
                  <td style={{ padding: '0.75rem' }}>{row.type}</td>
                  <td style={{ padding: '0.75rem', color: '#9ed8d3' }}>{row.confidence}</td>
                  <td style={{ padding: '0.75rem', color: '#788c7b' }}>{row.location}</td>
                  <td style={{ padding: '0.75rem' }}><span className={`badge ${row.statusClass}`} style={{ fontSize: '0.9rem', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default DashboardPage;
