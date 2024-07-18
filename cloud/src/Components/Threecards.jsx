import React, { useState } from 'react';
import { data } from '../Data/Data';

const Threecards = () => {
    const [filteredCards, setFilteredCards] = useState(data);

    const filterType = (category) => {
        setFilteredCards(data.filter((item) => item.category === category));
    };

    return (
        <div className='w-full min-h-[750px] bg-gray-100'>
            <div className='flex justify-center'>
                <h1 className='font-bold text-4xl text-black/85 my-10'>Our Favorites</h1>  
            </div>

            {/* Three Text */} 
            <div>
                <ul className='uppercase flex flex-wrap justify-center gap-8'>
                    <li onClick={() => filterType('Pods')} className='px-6 md:px-12 my-1 text-xl md:text-2xl font-semibold text-gray-500 hover:text-black duration-300 cursor-pointer font-DynaPuff '>Pods</li>
                    <li onClick={() => filterType('Dispo')} className='px-6 md:px-12 my-1 text-xl md:text-2xl font-semibold text-gray-500 hover:text-black duration-300 cursor-pointer font-DynaPuff '>Dispo Pods</li>
                    <li onClick={() => filterType('EJUICE')} className='px-6 md:px-12 my-1 text-xl md:text-2xl font-semibold text-gray-500 hover:text-black duration-300 cursor-pointer font-DynaPuff '>E-Juice</li>
                </ul>

                {/* Horizontal Line */}
                <hr className="h-0.5 border-0 mx-8 md:mx-36 bg-neutral-500 dark:bg-black/20" />
            </div>

            {/* DISPLAY CARDS */}
            <div className='mx-4 md:mx-36 my-10 flex flex-wrap justify-center gap-8'>
                {filteredCards.slice(0, 3).map((item, index) => (
                    <div key={index} className='box-border border-2 h-[500px] w-80 md:w-96 overflow-hidden shadow-xl'>
                        <img src={item.Image} alt={item.name} className='w-full h-80 hover:scale-110 duration-300 '/>
                        <div className='mx-4 md:mx-10 mt-11'>
                            <p className='font-roboto font-bold text-xl'>{item.name}</p>
                            <hr className="h-0.5 border-0 bg-neutral-500 dark:bg-black/20 my-3" />
                            <p className='font-Roboto'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Threecards;
