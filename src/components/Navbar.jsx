import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Movies', path: '/movie' },
    { name: 'Contact', path: '/contactus' },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔗 Clickable Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide text-blue-400 hover:opacity-90 transition">
          🎬 PrimeFlix
        </NavLink>

        {/* Navigation Items */}
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition duration-300 ${
                  isActive ? 'text-blue-400' : 'text-white'
                }`
              }
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
