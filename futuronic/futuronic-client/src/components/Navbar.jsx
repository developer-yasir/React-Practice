import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsOpen(false); // Close mobile menu on link click
  };

  // Function to handle smooth scrolling for in-page anchors
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsOpen(false);

    // Find the target element
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for navbar height

      // Scroll smoothly to the element
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full font-sans z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-gradient-to-r from-[var(--bg-color)] to-[var(--surface-color)] backdrop-blur-xl py-3 shadow-lg shadow-[var(--primary-color)]/10'
        : 'bg-gradient-to-r from-[var(--bg-color)] to-[var(--surface-color)] backdrop-blur-xl py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-vibrant transition-all duration-300 flex items-center group">
            <span className="bg-gradient-to-r from-logo-primary to-logo-secondary bg-clip-text text-transparent font-bold text-xl group-hover:scale-105 transition-transform">
              <span className="logo-primary">Futuro</span>
              <span className="logo-secondary">nic</span>
            </span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {location.pathname === '/' ? (
            <>
              <a href="#about" onClick={(e) => handleAnchorClick(e, 'about')} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#technologies" onClick={(e) => handleAnchorClick(e, 'technologies')} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Technologies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link to="/products" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/process" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Process
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/results" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Results
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/pricing" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </a>
            </>
          ) : (
            <>
              <Link to="/about" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/services" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/technologies" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Technologies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/products" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/process" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Process
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/results" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Results
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/pricing" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" onClick={handleNavLinkClick} className="text-[var(--text-color)] hover:text-vibrant transition-all duration-300 relative group px-1 py-2">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-vibrant transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </>
          )}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="text-light focus:outline-none p-3 rounded-full hover:bg-gradient-to-r hover:from-primary/20 hover:to-vibrant/20 transition-all duration-300 relative group"
          >
            {themeMode === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-vibrant">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12H5.25m.386-6.364l1.591 1.591M12 9a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-vibrant">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-3.618 0-6.95-1.884-8.862-4.725a9.718 9.718 0 0117.724-4.725z" />
              </svg>
            )}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-vibrant text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg shadow-primary/30">
              Toggle Theme
            </span>
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="text-light focus:outline-none p-3 rounded-full hover:bg-gradient-to-r hover:from-primary/20 hover:to-vibrant/20 transition-all duration-300 relative group"
          >
            {themeMode === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-vibrant">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12H5.25m.386-6.364l1.591 1.591M12 9a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-vibrant">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-3.618 0-6.95-1.884-8.862-4.725a9.718 9.718 0 0117.724-4.725z" />
              </svg>
            )}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-vibrant text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg shadow-primary/30">
              Toggle Theme
            </span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-light focus:outline-none relative p-2"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <span className={`bg-current block h-0.5 w-6 rounded transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
              <span className={`bg-current block h-0.5 w-6 rounded mt-1 transform transition duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-current block h-0.5 w-6 rounded mt-1 transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-dark/95 to-dark-surface/95 backdrop-blur-xl pt-6 pb-8 animate-fadeIn">
          <div className="container mx-auto px-6 flex flex-col space-y-5">
            {location.pathname === '/' ? (
              <>
                <a
                  href="#about"
                  onClick={(e) => {
                    handleAnchorClick(e, 'about');
                    handleNavLinkClick();
                  }}
                  className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium"
                >
                  About
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    handleAnchorClick(e, 'services');
                    handleNavLinkClick();
                  }}
                  className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium"
                >
                  Services
                </a>
                <a
                  href="#technologies"
                  onClick={(e) => {
                    handleAnchorClick(e, 'technologies');
                    handleNavLinkClick();
                  }}
                  className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium"
                >
                  Technologies
                </a>
                <Link
                  to="/products"
                  onClick={handleNavLinkClick}
                  className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/process"
                  onClick={handleNavLinkClick}
                  className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium"
                >
                  Process
                </Link>
                <Link
                  to="/results"
                  onClick={handleNavLinkClick}
                  className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium"
                >
                  Results
                </Link>
                <Link
                  to="/pricing"
                  onClick={handleNavLinkClick}
                  className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium"
                >
                  Pricing
                </Link>
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleAnchorClick(e, 'contact');
                    handleNavLinkClick();
                  }}
                  className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link to="/about" onClick={handleNavLinkClick} className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium">About</Link>
                <Link to="/services" onClick={handleNavLinkClick} className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium">Services</Link>
                <Link to="/technologies" onClick={handleNavLinkClick} className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium">Technologies</Link>
                <Link to="/products" onClick={handleNavLinkClick} className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium">Products</Link>
                <Link to="/process" onClick={handleNavLinkClick} className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium">Process</Link>
                <Link to="/results" onClick={handleNavLinkClick} className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium">Results</Link>
                <Link to="/pricing" onClick={handleNavLinkClick} className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium">Pricing</Link>
                <Link to="/contact" onClick={handleNavLinkClick} className="block py-4 px-5 text-[var(--text-color)] hover:bg-gradient-to-r hover:from-primary/10 hover:to-vibrant/10 rounded-xl transition-all duration-300 text-lg font-medium">Contact</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
