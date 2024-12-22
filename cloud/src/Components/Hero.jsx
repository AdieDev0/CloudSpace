import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 sm:p-10 px-4 sm:px-20'>
      <div className='flex justify-center max-h-[500px] relative'>
        {/* Overlay with fade-in effect */}
        <motion.div 
          className='flex flex-col justify-center absolute text-gray-200 w-full h-full bg-black/30 p-4'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2 }}
        >
          <motion.h1 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-DynaPuff'
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Smooth hits
          </motion.h1>
          <motion.h1 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-DynaPuff'
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Premium quality
          </motion.h1>
        </motion.div>
        {/* Image */}
        <img 
          src="https://www.keystonevape.com/wp-content/uploads/2023/01/gt01-disposable-vape-1.jpg" 
          alt="Vape" 
          className='object-cover w-full max-h-[500px]'
        />
      </div>
    </div>
  );
}

export default Hero;
