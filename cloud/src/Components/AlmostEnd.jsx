import React from 'react';

const AlmostEnd = () => {
  return (
    <div>
      <div className='relative h-[600px] w-full mx-auto'>
        <div className='flex justify-center'>
          <img
            src="https://imgix.bustle.com/uploads/shutterstock/2019/7/30/baa79a7c-32b3-4625-8f67-50834aee3804-shutterstock-1265579515.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70"
            alt="/"
            className='object-cover w-full max-h-[550px]'
          />
        </div>
      </div>

      <div className='flex flex-col items-center py-12 px-4 bg-[#F8F7F5] '>
        <h1 className='font-bold text-3xl sm:text-4xl text-center mb-14'>Want First Dibs?</h1>
        <p className='font-Roboto text-lg text-center mb-14'>
          Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.
        </p>
        <div className='flex flex-col sm:flex-row items-center font-bold'>
          <input
            type="email"
            placeholder='Enter Your Email Address'
            className='px-4 py-2 sm:px-40 sm:py-0 mr-0 sm:mr-3 h-12 mb-4 sm:mb-0 w-full sm:w-auto'
          />
          <button className='font-Roboto border-2 w-full sm:w-28 h-12 flex items-center justify-center rounded-xl bg-[#303030] text-white hover:bg-[#dedede] hover:text-black duration-200 hover:scale-105 shadow-lg'>
            Sign Up
          </button>
        </div>
        <p className='text-center mt-4'>
          Note: You can opt-out at anytime. See our <span className='underline cursor-pointer text-sm font-bold'>Privacy Policy</span> and <span className='underline cursor-pointer text-sm font-bold'>Terms</span>
        </p>
      </div>
    </div>
  );
}

export default AlmostEnd;
