import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const ImpactPage = lazy(() => import('./pages/ImpactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
const SurveysPage = lazy(() => import('./pages/dashboard/SurveysPage'));
const MapPage = lazy(() => import('./pages/dashboard/MapPage'));
const MissionsPage = lazy(() => import('./pages/dashboard/MissionsPage'));
const ReportsPage = lazy(() => import('./pages/dashboard/ReportsPage'));

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#020909' }}>
    <h1 style={{ fontFamily: 'VT323, monospace', color: '#f3d47b', animation: 'pulse 1.5s infinite' }}>INITIALIZING SONAR...</h1>
    <style>{`
      @keyframes pulse {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
    `}</style>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
          <Route path="/how-it-works" element={<PublicLayout><HowItWorksPage /></PublicLayout>} />
          <Route path="/technology" element={<PublicLayout><TechnologyPage /></PublicLayout>} />
          <Route path="/impact" element={<PublicLayout><ImpactPage /></PublicLayout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><DashboardPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/surveys" element={<ProtectedRoute><DashboardLayout><SurveysPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/map" element={<ProtectedRoute><DashboardLayout><MapPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/missions" element={<ProtectedRoute><DashboardLayout><MissionsPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/reports" element={<ProtectedRoute><DashboardLayout><ReportsPage /></DashboardLayout></ProtectedRoute>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </AuthProvider>
);

createRoot(document.getElementById('root')).render(<App />);
