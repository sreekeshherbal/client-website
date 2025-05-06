import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-green-50 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-10 h-10 mr-2 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                Sreekesh
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Natural herbal solutions for healthier hair, rooted in tradition and backed by nature.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-green-600 transition-colors">Products</Link>
              </li>
              <li>
                <a href="/#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p className="mb-2">Email: sreekeshherbal2025@gmail.com</p>
              <p className="mb-2">Phone: +91 97057 65585</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-green-100 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Sreekesh Herbals. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <span className="mr-2 text-sm">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;