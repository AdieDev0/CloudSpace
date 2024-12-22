import React from 'react';
import { motion } from 'framer-motion';

const Tools = () => {
  return (
    <div>
      {/* Animated Image Section */}
      <motion.div
        className='h-[450px] sm:h-[600px] w-full mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='flex justify-center relative'>
          <img
            src="https://www.nch.org/wp-content/uploads/vaping-feature.jpg"
            alt="/"
            className='object-cover w-full h-full max-h-[550px]'
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
      </motion.div>

      {/* Animated Content Section */}
      <motion.div
        className='flex flex-col items-center my-8 sm:mb-20 px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className='font-bold text-3xl sm:text-4xl text-center mb-4 sm:mb-6'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Accessories
        </motion.h1>
        
        <motion.p
          className='font-Roboto text-lg text-center mb-4 sm:mb-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sleek designs. Efficient chargers. Elevate your vaping experience with our top-rated accessories.
        </motion.p>

        <motion.button
          className='font-Roboto border-2 w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center mb-4 rounded-xl bg-[#303030] text-white hover:bg-[#dedede] hover:text-black duration-200 hover:scale-105 shadow-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          More accessories
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Tools;
