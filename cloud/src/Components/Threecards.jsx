import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../Data/Data';

const Threecards = () => {
    const [filteredCards, setFilteredCards] = useState(data);

    const filterType = (category) => {
        setFilteredCards(data.filter((item) => item.category === category));
    };

    return (
        <div className='w-full min-h-[750px] bg-gray-100'>
            <div className='flex justify-center'>
                <h1 className='font-bold text-3xl sm:text-4xl text-black/85 my-10'>Our Favorites</h1>  
            </div>

            {/* Three Text */} 
            <div>
                <ul className='uppercase flex flex-wrap justify-center gap-6 sm:gap-8'>
                    <li onClick={() => filterType('Pods')} className='px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl font-semibold text-gray-500 hover:text-black duration-300 cursor-pointer font-DynaPuff'>Pods</li>
                    <li onClick={() => filterType('Dispo')} className='px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl font-semibold text-gray-500 hover:text-black duration-300 cursor-pointer font-DynaPuff'>Dispo Pods</li>
                    <li onClick={() => filterType('EJUICE')} className='px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl font-semibold text-gray-500 hover:text-black duration-300 cursor-pointer font-DynaPuff'>E-Juice</li>
                </ul>

                {/* Horizontal Line */}
                <hr className="h-0.5 border-0 mx-8 sm:mx-36 bg-neutral-500 dark:bg-black/20" />
            </div>

            {/* DISPLAY CARDS */}
            <div className='mx-4 sm:mx-8 md:mx-36 my-10 flex flex-wrap justify-center gap-6 sm:gap-8'>
                {filteredCards.slice(0, 3).map((item, index) => (
                    <motion.div
                        key={index}
                        className='box-border border-2 h-[400px] sm:h-[500px] w-full sm:w-80 md:w-96 overflow-hidden shadow-xl'
                        initial={{ opacity: 0, scale: 0.8 }} // Initial state: invisible and scaled down
                        animate={{ opacity: 1, scale: 1 }} // Final state: fully visible and normal size
                        transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered animation
                    >
                        <img src={item.Image} alt={item.name} className='w-full h-56 sm:h-80 hover:scale-110 duration-300' />
                        <div className='mx-4 sm:mx-6 md:mx-10 mt-4 sm:mt-6'>
                            <p className='font-roboto font-bold text-lg sm:text-xl'>{item.name}</p>
                            <hr className="h-0.5 border-0 bg-neutral-500 dark:bg-black/20 my-3" />
                            <p className='font-Roboto text-sm sm:text-base'>{item.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Threecards;
