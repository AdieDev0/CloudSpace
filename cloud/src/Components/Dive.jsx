import React from 'react';
import { motion } from 'framer-motion';

const Dive = () => {
  return (
    <div>
      <div className='h-[500px] sm:h-[600px] w-full mx-auto'>
        <div className='flex justify-center'>
          <motion.img 
            src="https://vapelifemag.com/wp-content/uploads/2020/09/Pod-Vapes.jpg" 
            alt="/" 
            className='object-cover w-full max-h-[500px] sm:max-h-[550px]' 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <div className='flex flex-col items-center mb-10 px-4 sm:px-8'>
        <motion.h1 
          className='font-bold text-3xl sm:text-4xl text-center mb-6' 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Dive In
        </motion.h1>

        <motion.p 
          className='font-Roboto text-lg sm:text-xl text-center mb-8 max-w-xl' 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Rich flavors. Crisp hits. Bold bursts of berry. Our smoothest vapes, now in fresh summer blends.
        </motion.p>

        <motion.button 
          className='font-Roboto border-2 w-44 h-14 sm:w-56 sm:h-16 flex items-center justify-center mb-4 rounded-xl bg-[#303030] text-white hover:bg-[#dedede] hover:text-black duration-200 hover:scale-105 shadow-lg'
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
        >
          More Products
        </motion.button>
      </div>
    </div>
  );
}

export default Dive;
