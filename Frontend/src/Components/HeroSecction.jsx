import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // Importing Framer Motion
import img from '../assets/img2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-br from-emerald-500 to-green-700 overflow-hidden">
      <div className="absolute inset-0 justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Uncomment to use the image */}
        {/* <img 
          src={img}  
          alt="Ayurvedic herbs and ingredients" 
          className="object-cover"
        /> */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className={`max-w-3xl transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 italic">
            Where Nature and
            <span className="block mt-2"> Wellness Meet !</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Discover the power of authentic Ayurvedic healing, 
            where traditional remedies meet contemporary wellness practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
          <AnchorLink
          href='#products'
          onClick={closeMenu}

           className="px-8 py-3 bg-white text-green-800 rounded-lg text-lg font-semibold 
              hover:bg-green-50 transition-colors duration-300 shadow-lg">
              Products
            </AnchorLink>
            
            <AnchorLink
            href='#more'
            onClick={closeMenu}
             className="px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold 
              hover:bg-white hover:text-green-800 transition-all duration-300">
              Learn More
              </AnchorLink>
          </div>

          <div className={`mt-12 flex gap-8 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">5000+</p>
              <p className="text-gray-200">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-200">Expert Practitioners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-gray-200">Natural Remedies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full 
          transform translate-x-1/2 translate-y-1/2"
        animate={{ x: 20, y: 20 }} // Example of a motion animation
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div 
        className="absolute top-0 right-5 w-64 h-64 bg-white opacity-10 rounded-full 
          transform translate-x-1/2 translate-y-1/2"
        animate={{ x: 20, y: 20 }} // Example of a motion animation
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full 
          transform -translate-x-1/2 -translate-y-1/2"
        animate={{x: 20, y: 20 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full 
          transform -translate-x-1/2 -translate-y-1/2"
        animate={{ x: -20, y: -20 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </div>
  );
};

export default HeroSection;
