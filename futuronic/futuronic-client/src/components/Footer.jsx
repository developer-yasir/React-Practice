import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'GitHub', url: '#', icon: '🐱' },
    { name: 'Instagram', url: '#', icon: '📸' },
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Technologies', url: '/technologies' },
    { name: 'Products', url: '/products' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-t from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] py-24 px-4 font-sans border-t border-[var(--primary-color)]/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 font-sans">
              <span className="bg-gradient-to-r from-logo-primary to-logo-secondary bg-clip-text text-transparent">Futuronic</span>
            </h3>
            <p className="text-[var(--text-contrast-color)] mb-8 text-lg">
              Pioneering artificial intelligence solutions and automation tools to redefine industries and empower your future.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-contrast-color)] hover:text-vibrant transition-all duration-300 text-2xl p-3 rounded-full hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[var(--text-color)] flex items-center">
              <span className="mr-3 text-vibrant">→</span> Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-[var(--text-contrast-color)] hover:text-vibrant transition-all duration-300 flex items-center group text-lg"
                  >
                    <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-vibrant">◦</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[var(--text-color)] flex items-center">
              <span className="mr-3 text-vibrant">→</span> Services
            </h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-[var(--text-contrast-color)] hover:text-vibrant transition-all duration-300 flex items-center group text-lg"> <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-vibrant">◦</span> AI Solutions</a></li>
              <li><a href="#services" className="text-[var(--text-contrast-color)] hover:text-vibrant transition-all duration-300 flex items-center group text-lg"> <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-vibrant">◦</span> Automation Tools</a></li>
              <li><a href="#services" className="text-[var(--text-contrast-color)] hover:text-vibrant transition-all duration-300 flex items-center group text-lg"> <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-vibrant">◦</span> Custom ML Tools</a></li>
              <li><a href="#technologies" className="text-[var(--text-contrast-color)] hover:text-vibrant transition-all duration-300 flex items-center group text-lg"> <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-vibrant">◦</span> Technology Stack</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[var(--text-color)] flex items-center">
              <span className="mr-3 text-vibrant">→</span> Contact Us
            </h4>
            <ul className="space-y-5 text-[var(--text-contrast-color)] text-lg">
              <li className="flex items-start group">
                <span className="mr-3 text-vibrant group-hover:animate-bounce text-xl">📍</span>
                <span>123 Innovation Drive, Tech City</span>
              </li>
              <li className="flex items-start group">
                <span className="mr-3 text-vibrant group-hover:animate-bounce text-xl">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start group">
                <span className="mr-3 text-vibrant group-hover:animate-bounce text-xl">✉️</span>
                <span>info@futuronic.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--primary-color)]/20 mt-16 pt-10 text-center text-[var(--text-contrast-color)]">
          <p className="text-lg">&copy; {currentYear} Futuronic. All rights reserved.</p>
        </div>
      </div>

      {/* Add CSS for animation delays */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
