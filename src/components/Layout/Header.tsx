import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/#contact' },
  ];

  const headerClasses = `
    fixed top-0 w-full z-50 transition-all duration-300 
    ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}
  `;

  const logoAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const navItemAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5
      }
    })
  };

  const mobileMenuAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      }
    }
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.div 
            className="flex items-center" 
            initial="hidden"
            animate="visible"
            variants={logoAnimation}
          >
            {/* Placeholder for actual logo - will use real one later */}
            <div className="w-10 h-10 mr-2 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
              Sreekesh
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemAnimation}
            >
              <Link 
                to={item.path}
                className={`relative font-medium text-gray-800 hover:text-green-600 transition-colors duration-300 
                ${location.pathname === item.path ? 'text-green-600' : ''}`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobileMenuAnimation}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 }
                  }}
                >
                  <Link 
                    to={item.path}
                    className={`block py-2 font-medium ${location.pathname === item.path ? 'text-green-600' : 'text-gray-800'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;