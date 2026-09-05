import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

/* ── shared styles ── */
const fieldWrap = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #536b62',
  background: '#010b0be8',
  padding: '0 14px',
  gap: '10px',
};
const fieldInput = {
  flex: 1,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: '#ddf5e8',
  fontFamily: 'VT323, monospace',
  fontSize: '18px',
  padding: '11px 0',
  letterSpacing: '0.5px',
};
const fieldSelect = {
  flex: 1,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: '#ddf5e8',
  fontFamily: 'VT323, monospace',
  fontSize: '18px',
  padding: '11px 0',
  letterSpacing: '0.5px',
  cursor: 'pointer',
  WebkitAppearance: 'none',
};
const fieldIcon   = { color: '#6c968d', flexShrink: 0 };
const errorStyle  = { color: '#ff6b6b', fontFamily: 'VT323, monospace', fontSize: '15px', letterSpacing: '0.5px', marginTop: '4px', display: 'block' };
const labelStyle  = { display: 'block', color: '#acac7d', fontFamily: 'VT323, monospace', fontSize: '15px', letterSpacing: '1px', marginBottom: '6px', textTransform: 'uppercase' };
const hintStyle   = { color: '#6c968d', fontFamily: 'VT323, monospace', fontSize: '13px', letterSpacing: '0.5px', marginTop: '4px', display: 'block' };

/* ── validators ── */
const validate = {
  name:     v => v.trim().length >= 2    ? '' : 'Full name must be at least 2 characters.',
  email:    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address.',
  password: v => v.length >= 8           ? '' : 'Password must be at least 8 characters.',
  confirm:  (v, pw) => v === pw          ? '' : 'Passwords do not match.',
  role:     v => v                       ? '' : 'Please select a role.',
};

const ROLES = ['Operator', 'Analyst', 'Survey Lead', 'Conservation Officer', 'Maritime Authority', 'Commander'];

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, authError, setAuthError } = useAuth();

  const [form, setForm] = useState({ name: '', email: '', role: '', password: '', confirm: '' });
  const [showPw, setShowPw]         = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched]       = useState({});
  const [loading, setLoading]       = useState(false);

  const errors = {
    name:     touched.name     ? validate.name(form.name)                    : '',
    email:    touched.email    ? validate.email(form.email)                  : '',
    role:     touched.role     ? validate.role(form.role)                    : '',
    password: touched.password ? validate.password(form.password)            : '',
    confirm:  touched.confirm  ? validate.confirm(form.confirm, form.password) : '',
  };
  const hasErrors  = Object.values(errors).some(Boolean);
  const allFilled  = Object.values(form).every(Boolean);
  const canSubmit  = allFilled && !hasErrors;

  const set    = (field, val) => { setForm(f => ({ ...f, [field]: val })); setAuthError(''); };
  const blur   = (field)     => setTouched(t => ({ ...t, [field]: true }));
  const border = (field) => errors[field] ? '#ff6b6b' : form[field] ? '#e5c867' : '#536b62';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, role: true, password: true, confirm: true });
    if (!canSubmit) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    const err = register(form.name, form.email, form.password, form.role);
    setLoading(false);
    if (!err) navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#020909', display: 'flex', position: 'relative', overflow: 'hidden' }}>

      {/* ── Video Background ── */}
      <video autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0,
          filter: 'saturate(.46) contrast(1.2) brightness(.42) sepia(.14) hue-rotate(126deg)', transform: 'scale(1.025)' }}>
        <source src="/storm-ocean.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse at 18% 45%, transparent 0 10%, #001014a8 49%, #010506ed 100%), linear-gradient(0deg, #010506e8, transparent 70%)' }} />
      <div className="grain-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} />
      <div className="crt-overlay"   style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }} />

      {/* ── Header ── */}
      <header style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '20px clamp(22px,5vw,72px)', display: 'flex', alignItems: 'center', gap: '11px', zIndex: 10, borderBottom: '1px solid #9b956642' }}>
        <div className="navbar-mark">MG</div>
        <strong style={{ color: '#e5cc78', fontFamily: 'VT323, monospace', fontSize: '20px', letterSpacing: '2px', fontWeight: 400 }}>MARINE GUARD</strong>
        <em style={{ fontFamily: "'IM Fell English SC', serif", color: '#e7dda9', fontSize: '16px', fontStyle: 'normal' }}>ABYSSAL OBSERVATORY</em>
      </header>

      {/* ── Register Card ── */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '100px 24px 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ width: '100%', maxWidth: '460px' }}
        >
          {/* Card header text (plain, not inside glass card) */}
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontFamily: "'Pirata One', serif", fontSize: 'clamp(28px,5vw,40px)', color: '#f3d47b', margin: '0 0 6px', textShadow: '2px 2px #000' }}>
              Create your account
            </h1>
            <p style={{ fontFamily: 'VT323, monospace', color: '#819e94', fontSize: '17px', margin: 0, letterSpacing: '0.5px' }}>
              Set up your secure MarineGuard workspace.
            </p>
          </div>

          {/* Server / auth error */}
          <AnimatePresence>
            {authError && (
              <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                style={{ background: '#ff6b6b18', border: '1px solid #ff6b6b60', padding: '10px 14px', marginBottom: '16px', color: '#ff6b6b', fontFamily: 'VT323, monospace', fontSize: '15px', letterSpacing: '0.5px' }}>
                ⚠ {authError}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="captain-card" style={{ padding: '28px 30px 24px', position: 'relative' }}>
            <div className="card-rim" />

            <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '16px', position: 'relative' }}>

              {/* Full Name */}
              <div>
                <label style={labelStyle}>Full Name</label>
                <div style={{ ...fieldWrap, borderColor: border('name') }}>
                  <User size={16} style={fieldIcon} />
                  <input type="text" placeholder="John Doe" autoComplete="name"
                    value={form.name} onChange={e => set('name', e.target.value)} onBlur={() => blur('name')}
                    style={fieldInput} />
                </div>
                {errors.name && <span style={errorStyle}>{errors.name}</span>}
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <div style={{ ...fieldWrap, borderColor: border('email') }}>
                  <Mail size={16} style={fieldIcon} />
                  <input type="email" placeholder="operator@example.com" autoComplete="email"
                    value={form.email} onChange={e => set('email', e.target.value)} onBlur={() => blur('email')}
                    style={fieldInput} />
                </div>
                {errors.email && <span style={errorStyle}>{errors.email}</span>}
              </div>

              {/* Role */}
              <div>
                <label style={labelStyle}>Role</label>
                <div style={{ ...fieldWrap, borderColor: border('role') }}>
                  <select value={form.role} onChange={e => { set('role', e.target.value); blur('role'); }}
                    style={{ ...fieldSelect, color: form.role ? '#ddf5e8' : '#6c968d' }}>
                    <option value="" disabled style={{ background: '#071a1a' }}>Select a role</option>
                    {ROLES.map(r => (
                      <option key={r} value={r} style={{ background: '#071a1a', color: '#ddf5e8' }}>{r}</option>
                    ))}
                  </select>
                </div>
                {errors.role && <span style={errorStyle}>{errors.role}</span>}
              </div>

              {/* Password */}
              <div>
                <label style={labelStyle}>Password</label>
                <div style={{ ...fieldWrap, borderColor: border('password') }}>
                  <Lock size={16} style={fieldIcon} />
                  <input type={showPw ? 'text' : 'password'} placeholder="Minimum 8 characters" autoComplete="new-password"
                    value={form.password} onChange={e => set('password', e.target.value)} onBlur={() => blur('password')}
                    style={fieldInput} />
                  <button type="button" onClick={() => setShowPw(s => !s)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6c968d', padding: '2px', display: 'flex', alignItems: 'center' }}>
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password
                  ? <span style={errorStyle}>{errors.password}</span>
                  : <span style={hintStyle}>Password must contain at least 8 characters.</span>
                }
              </div>

              {/* Confirm Password */}
              <div>
                <label style={labelStyle}>Confirm Password</label>
                <div style={{ ...fieldWrap, borderColor: border('confirm') }}>
                  <Lock size={16} style={fieldIcon} />
                  <input type={showConfirm ? 'text' : 'password'} placeholder="Repeat your password" autoComplete="new-password"
                    value={form.confirm} onChange={e => set('confirm', e.target.value)} onBlur={() => blur('confirm')}
                    style={fieldInput} />
                  <button type="button" onClick={() => setShowConfirm(s => !s)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6c968d', padding: '2px', display: 'flex', alignItems: 'center' }}>
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.confirm && <span style={errorStyle}>{errors.confirm}</span>}
              </div>

              {/* Submit */}
              <button type="submit" disabled={loading}
                style={{
                  width: '100%', marginTop: '6px', padding: '13px',
                  border: '2px solid #f1d475', boxShadow: 'inset 0 0 0 2px #5a3819',
                  color: loading ? '#b09760' : '#fff1b3',
                  background: loading ? '#4a3010' : 'linear-gradient(110deg, #70451e, #b07a30)',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: "'Pirata One', serif", fontSize: '20px', letterSpacing: '1px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  transition: 'background 0.2s',
                }}>
                {loading ? 'REGISTERING...' : <><ArrowRight size={18} /> Create MarineGuard Account</>}
              </button>
            </form>

            {/* Sign in link */}
            <p style={{ margin: '18px 0 0', textAlign: 'center', fontFamily: 'VT323, monospace', fontSize: '16px', color: '#819e94', letterSpacing: '0.5px' }}>
              Already have an account?{' '}
              <Link to="/login"
                style={{ color: '#6fd5dc', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <LogIn size={14} /> Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
