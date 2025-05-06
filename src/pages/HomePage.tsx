import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import { DoodleContainer } from '../components/Doodles';
import ContactSection from '../components/ContactSection';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <DoodleContainer className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="block">Nature's Secret For</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                Beautiful Hair
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Discover the power of traditional herbal ingredients, carefully crafted to give you luscious, healthy hair naturally.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link 
                to="/products" 
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
              >
                View Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </DoodleContainer>

      {/* Features Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Sreekesh?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our products are crafted with love, using time-tested ingredients for naturally beautiful hair.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">100% Natural</h3>
              <p className="text-gray-600 text-center">Made with pure, natural ingredients sourced from trusted suppliers.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 14.6 3.5 20l2.5-7.5L2 9l7-.5L12 2l3 6.5 7 .5-4 3.5 2.5 7.5-6-5.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Traditions & Science</h3>
              <p className="text-gray-600 text-center">Our formulations blend ancient knowledge with modern research.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">No Harmful Chemicals</h3>
              <p className="text-gray-600 text-center">Free from parabens, sulfates, and artificial fragrances.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our range of natural hair care products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {products.slice(0, 2).map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-64 bg-gray-200 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{product.price}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.ingredients}
                  </p>
                  <Link 
                    to={`/products/${product.id}`}
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors"
            >
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See the transformation our products have brought to our customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-96 bg-gray-200 relative">
                <img
                  src="/media/BVA1.jpg"
                  alt="Before and after using Sreekesh Herbal Oil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
              
                <p className="text-gray-600 italic mb-4">
                  ""Transform your hair with the natural power of our herbal oil. Whether you're dealing with thinning, dryness, or lackluster shine, our carefully crafted formula nurtures your hair from root to tip. Packed with all-natural ingredients, this oil works deep to restore strength, promote healthy growth, and add a beautiful, natural shine.""
                </p>             
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-96 bg-gray-200 relative">
                <video
                  src="/media/video.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
              
                <p className="text-gray-600 italic mb-4">
                  "Experience the purity of nature with Sreekesh Herbal Oil. crafted through a meticulous, age-old process that preserves the essence of every ingredient. Our oil is made by slowly infusing premium herbs like hibiscus, curry leaves, and bhringraj into cold-pressed coconut oil, allowing their natural nutrients to blend deeply and effectively. No chemicals, no artificial fragrances"
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;