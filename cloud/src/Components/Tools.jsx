import React from 'react';

const Tools = () => {
  return (
    <div>
      <div className='h-[450px] sm:h-[600px] w-full mx-auto'>
        <div className='flex justify-center relative'>
          <img src="https://www.nch.org/wp-content/uploads/vaping-feature.jpg" alt="/" className='object-cover w-full h-full max-h-[550px]' />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
      </div>

      <div className='flex flex-col items-center my-8 sm:mb-20 px-4'>
        <h1 className='font-bold text-3xl sm:text-4xl text-center mb-4 sm:mb-6'>Premium Accessories</h1>
        <p className='font-Roboto text-lg text-center mb-4 sm:mb-8'>Sleek designs. Efficient chargers. Elevate your vaping experience with our top-rated accessories.</p>
        <button className='font-Roboto border-2 w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center mb-4 rounded-xl bg-[#303030] text-white hover:bg-[#dedede] hover:text-black duration-200 hover:scale-105 shadow-lg'>
          More accessories
        </button>
      </div>
    </div>
  );
}

export default Tools;
