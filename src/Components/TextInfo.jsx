// TextInfo.jsx
import React, { useContext, useState } from 'react';
import modecontext from '../context/ModeContext';
import { motion } from 'framer-motion';

export default function TextInfo() {
  const { mode, themeColors } = useContext(modecontext);
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${mode === 'Basic' ? 'bg-gray-50/90 border-gray-200' : 'bg-gray-900/90 border-gray-700'} 
        p-8 rounded-3xl shadow-2xl w-full max-w-md mx-auto md:mx-0 border backdrop-blur-sm
        transition-all duration-300 ${isHovered ? 'transform scale-[1.01]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div variants={itemVariants} className="flex items-center mb-6">
        <div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
        <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Premium Collection</span>
      </motion.div>
      
      <motion.h1 
        variants={itemVariants} 
        className={`text-4xl md:text-5xl font-extrabold ${themeColors[mode].text} mb-3 tracking-tight leading-tight`}
      >
        Classic White Shirt
      </motion.h1>
      
      <motion.div variants={itemVariants} className="flex items-center mb-5">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className={`ml-2 ${mode === 'Basic' ? 'text-gray-600' : 'text-gray-400'} text-sm font-medium`}>(42 reviews)</span>
      </motion.div>
      
      <motion.p 
        variants={itemVariants} 
        className={`${mode === 'Basic' ? 'text-gray-700 border-gray-200' : 'text-gray-300 border-gray-700'} 
          text-lg leading-relaxed mb-6 border-b pb-6 font-light`}
      >
        Experience comfort and style with our premium cotton shirt. Perfect for both formal and casual occasions, this shirt combines elegance with durability.
      </motion.p>
  
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className={`text-xl font-semibold ${themeColors[mode].text} mb-4 flex items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gradient-to-r from-orange-500 to-red-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600 text-xl font-bold">Product Highlights</span>
          </h2>
          <ul className={`grid grid-cols-2 gap-3 ${mode === 'Basic' ? 'text-gray-700' : 'text-gray-300'}`}>
            {[
              "100% Premium Cotton",
              "Soft & Breathable",
              "Tailored Fit",
              "Easy Care"
            ].map((feature, index) => (
              <motion.li 
                key={index}
                className={`flex items-center p-2 rounded-lg ${mode === 'Basic' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'} transition-colors duration-200`}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 flex space-x-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-200 flex-1 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add to Cart
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-4 border ${mode === 'Basic' ? 'border-gray-300 hover:bg-gray-50' : 'border-gray-700 hover:bg-gray-800'} rounded-xl transition-colors shadow-md`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${mode === 'Basic' ? 'text-gray-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.button>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className={`mt-6 flex items-center justify-between px-4 py-3 rounded-xl ${mode === 'Basic' ? 'bg-blue-50 text-blue-800' : 'bg-blue-900/30 text-blue-200'}`}
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-sm">Secure Checkout</span>
          </div>
          <div className="text-sm font-medium">Free Shipping</div>
        </motion.div>
    </motion.div>
  );
}
  