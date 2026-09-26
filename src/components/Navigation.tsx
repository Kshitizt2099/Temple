import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Info, Calendar, Image as ImageIcon, Heart, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'होम', icon: Home },
    { path: '/about', label: 'मंदिर परिचय', icon: Info },
    { path: '/activities', label: 'कार्यक्रम', icon: Calendar },
    { path: '/gallery', label: 'फोटो गैलरी', icon: ImageIcon },
    { path: '/video', label: 'वीडियो', icon: ImageIcon },
    { path: '/donate', label: 'दान / भेंट', icon: Heart },
    { path: '/contact', label: 'संपर्क करें', icon: Phone },
  ];

  return (
    <>
      <div style={{ background: '#FFF8F0', borderBottom: '1px solid #FFE4C4', padding: '0.2rem 1rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
          <MapPin size={14} color="var(--red)" />
          <span>लोनी, गाजियाबाद, उत्तर प्रदेश</span>
        </div>
        <div style={{ color: 'var(--primary-dark)', fontWeight: 'bold' }}>
          ॐ || हर हर महादेव || || जय माता दी ||
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF0000" xmlns="http://www.w3.org/2000/svg"><path d="M21.58 6.42A2.8 2.8 0 0019.6 4.46C17.86 4 12 4 12 4s-5.86 0-7.6.46A2.8 2.8 0 002.42 6.42C2 8.16 2 12 2 12s0 3.84.42 5.58a2.8 2.8 0 001.98 1.96C6.14 20 12 20 12 20s5.86 0 7.6-.46a2.8 2.8 0 001.98-1.96c.42-1.74.42-5.58.42-5.58s0-3.84-.42-5.58zM10 15V9l5.5 3-5.5 3z" /></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#E4405F" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6zm4.4 4.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5.3-2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
          <button className="btn btn-red" style={{ padding: '0.2rem 0.8rem', fontSize: '0.7rem', borderRadius: '50px' }}>दान करें</button>
        </div>
      </div>

      <header style={{ background: 'white', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '2px solid var(--red)' }}>

        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'var(--red)', margin: 0, fontSize: '2.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>प्राचीन शिव दुर्गा मंदिर</h1>
          <p style={{ color: 'var(--text-dark)', fontWeight: '600', margin: 0 }}>लोनी, गाजियाबाद (उत्तर प्रदेश)</p>
        </div>


      </header>

      {/* Desktop Red Nav Bar */}
      <nav style={{ background: 'var(--red)', padding: '0' }} className="desktop-nav-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link-top ${isActive ? 'active' : ''}`}
              style={{ color: 'white', padding: '1rem 1.5rem', fontWeight: '500', transition: 'background 0.2s' }}
            >
              {item.path === '/' && <Home size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />}
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <style>{`
        .nav-link-top:hover { background: #B71C1C; }
        .nav-link-top.active { background: #FFC107; color: var(--red) !important; }
        @media (max-width: 768px) {
          .desktop-nav-bar { display: none; }
          .top-header-mobile { display: flex; }
        }
      `}</style>

      {/* Mobile Bottom Navigation */}
      <nav className="bottom-nav">
        {navItems.filter(i => ['/', '/about', '/activities', '/donate'].includes(i.path)).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={24} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
