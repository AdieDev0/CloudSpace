import React from 'react';

const Dive = () => {
  return (
    <div>
      <div className='h-[600px] w-full mx-auto'>
        <div className='flex justify-center'>
          <img src="https://vapelifemag.com/wp-content/uploads/2020/09/Pod-Vapes.jpg" alt="/" className='object-cover w-full max-h-[550px]' />
        </div>
      </div>

      <div className='flex flex-col items-center mb-10 px-4'>
        <h1 className='font-bold text-3xl sm:text-4xl text-center mb-6'>Dive In</h1>
        <p className='font-Roboto text-lg text-center mb-8'>Rich flavors. Crisp hits. Bold bursts of berry. Our smoothest vapes, now in fresh summer blends.</p>
        <button className='font-Roboto border-2 w-44 h-14 flex items-center justify-center mb-4 rounded-xl bg-[#303030] text-white hover:bg-[#dedede] hover:text-black duration-200 hover:scale-105 shadow-lg'>
          More Products
        </button>
      </div>
    </div>
  );
}

export default Dive;
