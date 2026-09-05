import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { EyebrowBadge } from '../../components/EyebrowBadge';
import { GlassCard } from '../../components/GlassCard';

const mockPoints = [
  { id: 'DET-101', type: 'Shipwreck', confidence: '98%', date: '2024-12-01', position: [14.5, 82.1], color: '#d4b864' },
  { id: 'DET-102', type: 'Ghost Net', confidence: '89%', date: '2024-12-02', position: [12.1, 80.5], color: '#e5c867' },
  { id: 'DET-103', type: 'Anomaly', confidence: '65%', date: '2024-12-05', position: [16.2, 84.3], color: '#ff6b6b' },
  { id: 'DET-104', type: 'Marine Debris', confidence: '92%', date: '2024-12-06', position: [11.8, 83.2], color: '#9ed8d3' },
  { id: 'DET-105', type: 'Ghost Net', confidence: '91%', date: '2024-12-08', position: [13.5, 81.8], color: '#e5c867' },
  { id: 'DET-106', type: 'Anomaly', confidence: '72%', date: '2024-12-10', position: [15.1, 85.0], color: '#ff6b6b' },
  { id: 'DET-107', type: 'Marine Debris', confidence: '88%', date: '2024-12-12', position: [10.9, 79.8], color: '#9ed8d3' },
  { id: 'DET-108', type: 'Shipwreck', confidence: '95%', date: '2024-12-14', position: [17.5, 86.5], color: '#d4b864' },
];

export const MapPage = () => {
  return (
    <motion.div 
      className="dashboard-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div className="dashboard-topbar" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <h1 className="dashboard-title section-heading" style={{ margin: 0 }}>Marine Map</h1>
        <EyebrowBadge>● LIVE TRACKING</EyebrowBadge>
      </div>

      <div style={{ height: 'calc(100vh - 240px)', width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid #7f8565' }}>
        <MapContainer center={[13.0, 80.0]} zoom={6} style={{ height: '100%', width: '100%', background: '#020909' }}>
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
            maxZoom={16}
          />
          
          {mockPoints.map((point) => (
            <CircleMarker 
              key={point.id}
              center={point.position}
              radius={8}
              pathOptions={{ fillColor: point.color, color: point.color, fillOpacity: 0.7, weight: 2 }}
            >
              <Popup>
                <div style={{ background: '#071a1a', border: '1px solid #d4b864', padding: '12px', fontFamily: 'VT323', color: '#c1ddd3', borderRadius: '4px' }}>
                  <strong style={{ color: '#f3d47b', fontSize: '1.2rem', display: 'block', marginBottom: '4px' }}>{point.id}</strong>
                  <div style={{ marginBottom: '2px' }}>Type: {point.type}</div>
                  <div style={{ marginBottom: '2px' }}>Confidence: {point.confidence}</div>
                  <div>Date: {point.date}</div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <GlassCard style={{ marginTop: '1.5rem', padding: '1rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontFamily: 'VT323', color: '#f0e4b4', fontSize: '1.2rem' }}>Legend:</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'VT323', color: '#c1ddd3' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#d4b864' }}></div> Shipwreck
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'VT323', color: '#c1ddd3' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#e5c867' }}></div> Ghost Net
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'VT323', color: '#c1ddd3' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#9ed8d3' }}></div> Marine Debris
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'VT323', color: '#c1ddd3' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff6b6b' }}></div> Anomaly
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default MapPage;
