import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  Clock,
  Code,
  BookOpen,
  ExternalLink,
  Facebook,
  Instagram,
  Home,
  FolderOpen,
  Settings
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Updated to use absolute paths
  const footerData = {
    personal: {
      name: "Muhammad Irfan",
      tagline: "TRANSFORMING YOUR IDEAS INTO DIGITAL REALITY",
      description: "Stay ahead with the latest tech trends, expert insights, and exclusive offers — let's Get Started",
    },
    leftLinks: [
      { name: "Home", href: "/", icon: Home },
      { name: "Projects", href: "/projects", icon: FolderOpen },
      { name: "Blogs", href: "/blogs", icon: BookOpen },
      { name: "Services", href: "/services", icon: Settings }
    ],
    contact: {
      email: "codingwithme178@gmail.com",
      phone: "+92 301 3900 245",
      location: "Lahore, Pakistan",
      hours: "Monday - Saturday",
      sunday: "Sun: Closed"
    },
    social: [
      { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61562378504974" },
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/codingwithme178/" },
      { name: "Linkedin", icon: Linkedin, href: "https://www.linkedin.com/in/irfan-khan1074/" }
    ]
  };

  // Handle navigation with error fallback
  const handleNavigation = (path) => {
    try {
      navigate(path);
      scrollToTop();
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = path; // Fallback to full page reload
    }
  };

  const CenteredLogo = () => {
    const handleImageError = (e) => {
      e.target.style.display = 'none';
      const fallbackDiv = e.target.nextSibling;
      if (fallbackDiv) {
        fallbackDiv.style.display = 'flex';
      }
    };

    return (
      <div className="flex flex-col items-center space-y-8">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-[#1E1E1E] p-6 rounded-xl border border-[#1E1E1E] group-hover:border-[#6EE7B7] transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="/logo.png" // Updated to use public path
                  alt="Logo"
                  className="w-16 h-16 object-contain"
                  onError={handleImageError}
                />
                <div className="w-16 h-16 bg-gradient-to-br from-[#6EE7B7] to-[#93C5FD] rounded-xl items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-xl hidden">
                  <Code className="w-8 h-8 text-[#121212]" />
                </div>
              </div>
              <div className="text-4xl font-bold tracking-tight">
                <span className="text-[#E5E7EB]">DEV&</span>
                <span className="text-[#6EE7B7]">DONE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6 max-w-md">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#6EE7B7] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#93C5FD] rounded-full opacity-30 animate-pulse delay-1000"></div>

            <p className="text-[#6EE7B7] text-sm font-semibold uppercase tracking-wider relative z-10">
              {footerData.personal.tagline}
            </p>
          </div>

          <h3 className="text-[#E5E7EB] text-xl font-semibold leading-relaxed">
            {footerData.personal.description}
          </h3>

          <div className="space-y-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#6EE7B7] to-transparent mx-auto"></div>
            <div className="flex space-x-4 justify-center">
              {footerData.social.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    aria-label={platform.name}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-12 h-12 bg-[#1E1E1E] hover:bg-[#6EE7B7] rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-[#121212] transition-all duration-300 hover:scale-110 border border-[#1E1E1E] hover:border-[#6EE7B7]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EnhancedLink = ({ item, alignment = 'left' }) => {
    const Icon = item.icon;
    return (
      <li className="group">
        <button
          onClick={() => handleNavigation(item.href)}
          className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-[#1E1E1E] transition-all duration-300 w-full ${alignment === 'right' ? 'justify-end text-right' : ''
            }`}
        >
          {alignment === 'left' && Icon && (
            <Icon className="w-4 h-4 text-[#93C5FD] group-hover:text-[#6EE7B7] transition-colors duration-300" />
          )}
          <span className="text-[#9CA3AF] group-hover:text-[#E5E7EB] transition-colors duration-300 text-sm font-medium">
            {item.name}
          </span>
          {alignment === 'right' && Icon && (
            <Icon className="w-4 h-4 text-[#93C5FD] group-hover:text-[#6EE7B7] transition-colors duration-300" />
          )}
          <ArrowUpRight className="w-4 h-4 text-[#6EE7B7] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </button>
      </li>
    );
  };

  return (
    <footer className="bg-[#222322] text-[#E5E7EB] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6EE7B7] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#93C5FD] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-8">
              <div className="relative">
                <h4 className="text-lg font-bold text-[#E5E7EB] uppercase tracking-wider mb-2">QUICK LINKS</h4>
                <div className="w-12 h-1 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] rounded-full"></div>
              </div>

              <div className="space-y-2">
                <ul className="space-y-2">
                  {footerData.leftLinks.map((item) => (
                    <EnhancedLink key={item.name} item={item} alignment="left" />
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <CenteredLogo />
            </div>

            <div className="space-y-8">
              <div className="relative text-center md:text-right">
                <h4 className="text-lg font-bold text-[#E5E7EB] uppercase tracking-wider mb-2">GET IN TOUCH</h4>
                <div className="w-12 h-1 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] rounded-full mx-auto md:ml-auto md:mr-0"></div>
              </div>

              <div className="space-y-6 text-center md:text-right">
                <div className="group flex justify-center md:justify-end">
                  <a
                    href={`tel:${footerData.contact.phone}`}
                    className="inline-flex items-center space-x-2 text-[#6EE7B7] hover:text-[#93C5FD] transition-colors duration-300 text-xl font-bold group-hover:scale-105 transform transition-transform"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{footerData.contact.phone}</span>
                  </a>
                </div>

                <div className="group flex justify-center md:justify-end">
                  <a
                    href={`mailto:${footerData.contact.email}`}
                    className="inline-flex items-center space-x-2 text-[#9CA3AF] hover:text-[#6EE7B7] transition-colors duration-300 text-sm group-hover:scale-105 transform transition-transform"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{footerData.contact.email}</span>
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-end space-x-2">
                    <Clock className="w-4 h-4 text-[#93C5FD]" />
                    <span className="text-[#9CA3AF] text-sm">{footerData.contact.hours}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-end space-x-2">
                    <Clock className="w-4 h-4 text-[#93C5FD]" />
                    <span className="text-[#9CA3AF] text-sm">{footerData.contact.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E1E1E] bg-[#1E1E1E]/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="text-xs text-[#9CA3AF] flex items-center space-x-2">
                  <span>© {currentYear} Muhammad Irfan. All rights reserved.</span>
                </p>
                <div className="flex space-x-4 text-xs">
                  <button onClick={() => handleNavigation('/privacy-policy')} className="text-[#9CA3AF] hover:text-[#6EE7B7] transition-colors duration-300 hover:underline">
                    Privacy Policy
                  </button>
                  <span className="text-[#9CA3AF]">•</span>
                  <button onClick={() => handleNavigation('/terms-of-service')} className="text-[#9CA3AF] hover:text-[#6EE7B7] transition-colors duration-300 hover:underline">
                    Terms of Service
                  </button>
                </div>
              </div>

              <button onClick={scrollToTop} className="relative group" aria-label="Back to top">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-[#1E1E1E] hover:bg-[#6EE7B7] text-[#E5E7EB] hover:text-[#121212] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-[#1E1E1E] hover:border-[#6EE7B7] flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;