import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Info, Calendar, Image, Heart, Phone } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'परिचय', icon: Info },
    { path: '/activities', label: 'कार्यक्रम', icon: Calendar },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/donate', label: 'Donation', icon: Heart },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      <header className="top-header">
        <div className="container flex items-center justify-between">
          <h1 className="header-title">शिव दुर्गा मंदिर</h1>
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <nav className="bottom-nav">
        {navItems.map((item) => {
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
