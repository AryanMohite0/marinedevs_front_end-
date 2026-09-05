import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const USERS_KEY = 'marineguard_users';
const TOKEN_KEY = 'marineguard_token';
const USER_KEY  = 'marineguard_user';

// Seed a default admin account on first load
const seedUsers = () => {
  const existing = localStorage.getItem(USERS_KEY);
  if (!existing) {
    const defaults = [
      { name: 'Captain Nemo', email: 'captain@marineguard.ai', password: 'deepdive8', role: 'Commander' }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaults));
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    seedUsers();
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      const stored = localStorage.getItem(USER_KEY);
      if (token === 'ghost-tide-session' && stored) {
        setUser(JSON.parse(stored));
      }
    } catch (_) {}
  }, []);

  // Returns null on success, error string on failure
  const login = (email, password) => {
    setAuthError('');
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const found = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      const msg = 'Invalid credentials. Check your email and password.';
      setAuthError(msg);
      return msg;
    }
    const { password: _pw, ...safeUser } = found;
    setUser(safeUser);
    localStorage.setItem(TOKEN_KEY, 'ghost-tide-session');
    localStorage.setItem(USER_KEY, JSON.stringify(safeUser));
    return null;
  };

  // Returns null on success, error string on failure
  const register = (name, email, password, role) => {
    setAuthError('');
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      const msg = 'An account with this email already exists.';
      setAuthError(msg);
      return msg;
    }
    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    // Auto-login after register
    const { password: _pw, ...safeUser } = newUser;
    setUser(safeUser);
    localStorage.setItem(TOKEN_KEY, 'ghost-tide-session');
    localStorage.setItem(USER_KEY, JSON.stringify(safeUser));
    return null;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
    setAuthError('');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, authError, setAuthError, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
