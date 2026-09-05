import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, UserPlus, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

/* ── validators ── */
const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address.';
const validatePassword = (v) => v.length >= 8 ? '' : 'Password must be at least 8 characters.';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, authError, setAuthError } = useAuth();

  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]   = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);

  const emailErr    = touched.email    ? validateEmail(email)       : '';
  const passwordErr = touched.password ? validatePassword(password) : '';
  const canSubmit   = !emailErr && !passwordErr && email && password;

  const blur = (field) => setTouched(t => ({ ...t, [field]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!canSubmit) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    const err = login(email, password);
    setLoading(false);
    if (!err) navigate('/dashboard');
  };

  const changeEmail    = (v) => { setEmail(v);    setAuthError(''); };
  const changePassword = (v) => { setPassword(v); setAuthError(''); };

  /* ── shared input field styles ── */
  const wrap  = (err, val) => ({
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '0 12px',
    border: `1.5px solid ${err ? '#ff6b6b' : val ? '#e5c867' : '#536b62'}`,
    background: '#010b0be8',
    transition: 'border-color 0.2s',
  });
  const inp = {
    flex: 1, border: 'none', outline: 'none',
    background: 'transparent', color: '#ddf5e8',
    fontFamily: 'VT323, monospace', fontSize: '19px',
    padding: '11px 0', letterSpacing: '0.5px',
  };
  const ico  = { color: '#6c968d', flexShrink: 0 };
  const err  = { color: '#ff6b6b', fontFamily: 'VT323, monospace', fontSize: '14px', marginTop: '4px', display: 'block' };
  const lbl  = { display: 'block', color: '#acac7d', fontFamily: 'VT323, monospace', fontSize: '15px', letterSpacing: '1px', marginBottom: '6px', textTransform: 'uppercase' };

  return (
    /* Root — isolate stacking context */
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#020909', isolation: 'isolate' }}>

      {/* Layer 0 — video */}
      <video
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          zIndex: 0,
          filter: 'saturate(.46) contrast(1.2) brightness(.42) sepia(.14) hue-rotate(126deg)',
          transform: 'scale(1.025)',
        }}
      >
        <source src="/storm-ocean.mp4" type="video/mp4" />
      </video>

      {/* Layer 1 — dark gradient vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 18% 45%, transparent 0 10%, #001014a8 49%, #010506ed 100%), linear-gradient(90deg, #010405c7, #04131642 55%, #01050594), linear-gradient(0deg, #010506cf, transparent 62%)',
      }} />

      {/* Layer 2 — grain */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(111,213,220,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(111,213,220,.15) 1px,transparent 1px)',
        backgroundSize: '3px 3px', mixBlendMode: 'overlay', opacity: 0.15,
      }} />

      {/* Layer 3 — CRT scanlines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent 0 3px, #000 3px 4px)',
        opacity: 0.18,
      }} />

      {/* Layer 10+ — all interactive content */}

      {/* Header */}
      <header style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
        padding: '22px clamp(22px,5vw,72px)',
        display: 'flex', alignItems: 'center', gap: '11px',
        borderBottom: '1px solid #9b956642',
      }}>
        <div className="navbar-mark">MG</div>
        <strong style={{ color: '#e5cc78', fontFamily: 'VT323, monospace', fontSize: '20px', letterSpacing: '2px', fontWeight: 400 }}>
          MARINE GUARD
        </strong>
        <em style={{ fontFamily: "'IM Fell English SC', serif", color: '#e7dda9', fontSize: '16px', fontStyle: 'normal' }}>
          ABYSSAL OBSERVATORY
        </em>
        <span style={{ marginLeft: 'auto', color: '#8da88d', fontFamily: 'VT323, monospace', fontSize: '14px', letterSpacing: '1px' }}>
          ● LIVE FEED
        </span>
      </header>

      {/* Story — left side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}
        style={{ position: 'absolute', left: 'clamp(25px,7vw,112px)', top: '31%', zIndex: 10, textShadow: '3px 3px #020708' }}
      >
        <p style={{ margin: '0 0 10px', color: '#e3c56d', fontFamily: 'VT323, monospace', letterSpacing: '2px', fontSize: '17px' }}>
          NOIT &amp; MoES · Atma Nirbhar Bharat
        </p>
        <h2 style={{ margin: 0, color: '#f1e9c5', font: "clamp(50px,7vw,94px)/.79 'Pirata One', serif", letterSpacing: '1px' }}>
          Where the<br />
          <i style={{ color: '#9ed8d3', fontFamily: "'IM Fell English SC', serif", fontStyle: 'normal' }}>light ends.</i>
        </h2>
        <span style={{ display: 'block', color: '#d2b768', fontSize: '27px', fontFamily: 'VT323, monospace', marginTop: '19px' }}>
          ⌁ &nbsp; ----DEEP SEA ARCHIVE
        </span>
      </motion.div>

      {/* Depth gauge */}
      <div style={{
        position: 'absolute', left: 'clamp(22px,5vw,72px)', top: '50%', transform: 'translateY(-12%)',
        zIndex: 10, display: 'grid', gap: '8px',
        color: '#788d82', fontFamily: 'VT323, monospace', fontSize: '12px', letterSpacing: '1px',
      }}>
        <span>0m</span>
        <div style={{ width: '58px', height: '1px', background: '#788d8266' }} />
        <span>500m</span>
        <div style={{ width: '58px', height: '1px', background: '#788d8266' }} />
        <span>1000m</span>
        <div style={{ width: '58px', height: '1px', background: '#788d8266' }} />
      </div>

      {/* Login card — right side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: '80px', /* Pin to bottom above footer instead of top 50% */
          right: 'clamp(22px,9vw,150px)',
          width: 'min(380px, calc(100vw - 44px))',
          zIndex: 10,
          /* glass card */
          border: '2px solid #d4b864',
          background: 'linear-gradient(140deg, #092c2ad4, #031716e8)',
          boxShadow: '0 0 0 5px #0d2726aa, 0 18px 52px #000b, inset 0 0 35px #66c0af24',
          backdropFilter: 'blur(8px)',
          padding: '24px 28px 18px', /* Reduced padding */
          overflow: 'hidden',
          textAlign: 'center',
          maxHeight: 'calc(100vh - 100px)', /* Prevent it from ever being taller than screen */
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Inner rim */}
        <div style={{ position: 'absolute', inset: '4px', border: '1px solid #e4cb77a1', pointerEvents: 'none', zIndex: 0 }} />

        {/* Card content — above rim */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <p style={{ margin: '0 0 4px', color: '#859575', fontFamily: 'VT323, monospace', fontSize: '13px', letterSpacing: '2px' }}>
            ◉&nbsp;THE INDIAN OCEAN / BAY OF BENGAL&nbsp;◉
          </p>
          <p style={{ margin: '0 0 6px', color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '13px', letterSpacing: '2px' }}>
            SIDE SONAR SCAN
          </p>
          <h1 style={{ margin: '0 0 4px', color: '#f3d47b', fontFamily: "'Pirata One', serif", fontSize: '34px', textShadow: '2px 2px #382713' }}>
            Enter the deep.
          </h1>
          <p style={{ margin: '0 0 12px', color: '#c1ddd3', fontFamily: 'VT323, monospace', fontSize: '16px' }}>
            Debugg Depth Conspiracies.
          </p>

          {/* Auth error banner */}
          <AnimatePresence>
            {authError && (
              <motion.div
                key="auth-err"
                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                style={{
                  background: '#ff6b6b12', border: '1px solid #ff6b6b50',
                  padding: '6px 10px', marginBottom: '10px', textAlign: 'left',
                  color: '#ff6b6b', fontFamily: 'VT323, monospace', fontSize: '14px',
                }}
              >
                ⚠ {authError}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '10px', textAlign: 'left', flex: 1, overflowY: 'auto' }}>

            {/* Email */}
            <div>
              <label style={lbl}>EMAIL</label>
              <div style={wrap(emailErr, email)}>
                <Mail size={15} style={ico} />
                <input
                  type="email" placeholder="operator@example.com" autoComplete="email"
                  value={email}
                  onChange={e => changeEmail(e.target.value)}
                  onBlur={() => blur('email')}
                  style={inp}
                />
              </div>
              {emailErr && <span style={err}>{emailErr}</span>}
            </div>

            {/* Password */}
            <div>
              <label style={lbl}>PASSWORD</label>
              <div style={wrap(passwordErr, password)}>
                <Lock size={15} style={ico} />
                <input
                  type={showPw ? 'text' : 'password'} placeholder="••••••••" autoComplete="current-password"
                  value={password}
                  onChange={e => changePassword(e.target.value)}
                  onBlur={() => blur('password')}
                  style={inp}
                />
                <button
                  type="button" onClick={() => setShowPw(s => !s)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6c968d', padding: '2px', display: 'flex', alignItems: 'center' }}
                >
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {passwordErr && <span style={err}>{passwordErr}</span>}
            </div>

            {/* Submit button */}
            <button
              type="submit" disabled={loading}
              style={{
                width: '100%', marginTop: '2px', padding: '10px',
                border: '2px solid #f1d475', boxShadow: 'inset 0 0 0 2px #5a3819',
                color: '#fff1b3',
                background: loading ? '#4a3010' : 'linear-gradient(110deg, #70451e, #b07a30)',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: "'Pirata One', serif", fontSize: '20px', letterSpacing: '1px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                opacity: loading ? 0.7 : 1, transition: 'all 0.2s',
              }}
            >
              {loading ? 'DIVING...' : <><ArrowRight size={16} /> Enter Command Center</>}
            </button>
          </form>

          {/* OR divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
            <div style={{ flex: 1, height: '1px', background: '#536b6240' }} />
            <span style={{ color: '#6c968d', fontFamily: 'VT323, monospace', fontSize: '13px', letterSpacing: '3px' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: '#536b6240' }} />
          </div>

          {/* Register link */}
          <div style={{ border: '1px solid #536b6230', background: '#010b0b50', padding: '10px' }}>
            <p style={{ margin: '0 0 6px', color: '#819e94', fontFamily: 'VT323, monospace', fontSize: '14px' }}>
              Don't have a MarineGuard account?
            </p>
            <Link to="/register" style={{
              color: '#6fd5dc', fontFamily: 'VT323, monospace', fontSize: '16px',
              letterSpacing: '1px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
              <UserPlus size={14} /> Create an account
            </Link>
          </div>

          <p style={{ margin: '10px 0 0', color: '#a4d3c8', fontFamily: 'VT323, monospace', fontSize: '13px', letterSpacing: '1px' }}>
            SIGNAL STRENGTH · ▰ ▰ ▰ ▱
          </p>
        </div>
      </motion.div>


      {/* Footer */}
      <footer style={{
        position: 'absolute', bottom: '21px', left: 'clamp(22px,5vw,72px)',
        zIndex: 10, color: '#c5e2d7', textShadow: '2px 2px #000',
        fontFamily: 'VT323, monospace', fontSize: '16px', letterSpacing: '1px',
      }}>
        SONAR // 18° 43′ N, 69° 08′ W &nbsp;&nbsp;·&nbsp;&nbsp; DEPTH : 3842M &nbsp;&nbsp;·&nbsp;&nbsp; WATER TEMP : 3.8°C
      </footer>
    </div>
  );
}
