/* Navbar.jsx  –  Inter font applied globally */
import React, { useState, useEffect } from 'react';
import {
  Menu, X, Home, Briefcase, BookOpen, Workflow,
  Linkedin, Instagram, Github
} from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/irfan-khan1074/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/codingwithme178/"', icon: Instagram, label: 'Instagram' },
    { href: 'https://github.com/code385', icon: Github, label: 'GitHub' }
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 font-sans ${
          scrolled
            ? 'bg-[#121212]/95 backdrop-blur-xl shadow-2xl border-b border-[#6EE7B7]/20'
            : 'bg-[#121212] shadow-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 flex-1">
              {['/', '/projects', '/blogs', '/services'].map((path, idx) => {
                const labels = ['Home', 'Projects', 'Blogs', 'Services'];
                const Icons = [Home, Briefcase, BookOpen, Workflow];
                const Icon = Icons[idx];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    end
                    className={({ isActive }) =>
                      `group relative px-4 py-2 text-sm font-medium flex items-center space-x-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-[#6EE7B7] bg-[#1E1E1E]/80'
                          : 'text-[#E5E7EB] hover:text-[#6EE7B7] hover:bg-[#1E1E1E]/60'
                      }`
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{labels[idx]}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center space-x-4 group"
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#6EE7B7]/10 to-[#93C5FD]/10 backdrop-blur-sm border border-[#6EE7B7]/20 group-hover:from-[#6EE7B7]/20 group-hover:to-[#93C5FD]/20 transition-all duration-300 flex items-center space-x-2">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-5 w-auto sm:h-6 md:h-7 filter brightness-0 invert"
                  />
                  <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide text-white group-hover:text-[#A5F3FC] transition-all duration-300">
                    DEV<span className="text-[#93C5FD]">&</span>DONE
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Side - Social Icons */}
            <div className="hidden md:flex items-center space-x-2 flex-1 justify-end">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-[#9CA3AF] hover:text-[#6EE7B7] hover:bg-[#1E1E1E]/60 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-[#E5E7EB] hover:text-[#6EE7B7] hover:bg-[#1E1E1E]/60 transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-t border-[#6EE7B7]/20 animate-slideUpBounce">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {['/', '/projects', '/blogs', '/services'].map((path, idx) => {
                const labels = ['Home', 'Projects', 'Blogs', 'Services'];
                const Icons = [Home, Briefcase, BookOpen, Workflow];
                const Icon = Icons[idx];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    end
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'text-[#6EE7B7] bg-[#1E1E1E]/80'
                          : 'text-[#E5E7EB] hover:text-[#6EE7B7] hover:bg-[#1E1E1E]/40'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{labels[idx]}</span>
                  </NavLink>
                );
              })}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-[#1E1E1E]/50">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg text-[#9CA3AF] hover:text-[#6EE7B7] hover:bg-[#1E1E1E]/60 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideUpBounce {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUpBounce {
          animation: slideUpBounce 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;