import React from 'react';

const Approach = () => {
  return (
    <div className='mx-4 md:mx-20 h-auto md:h-[350px] text-slate-900 font-Jost'>
        <div className='w-full h-auto md:h-80 mt-14'>
            <h1 className='text-3xl font-bold text-center md:text-left'>The Allbirds Approach</h1>

            <div className='mt-8 text-left flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0'>
                <div className='w-full md:w-[420px]'>
                    <p className='text-2xl font-bold mb-2'>Smooth Vaping Satisfaction</p>
                    <p>Experience the perfect balance of flavor and vapor with our high-quality vape devices. Designed for seamless vaping, each device is engineered to provide consistent and smooth hits, ensuring maximum enjoyment with every puff.
                    <span className='underline cursor-pointer flex'>Learn More</span></p>
                </div>

                <div className='w-full md:w-[420px]'>
                    <p className='text-2xl font-bold mb-2'>Premium Vaping Experience</p>
                    <p>Discover the smooth, flavorful experience with our premium vape devices. Easy to use, long-lasting, and designed for satisfaction. Our cutting-edge technology ensures each puff is consistent and satisfying, providing a premium experience that stands out.
                    <span className='underline cursor-pointer flex'>Learn More</span></p>
                </div>

                <div className='w-full md:w-[420px]'>
                    <p className='text-2xl font-bold mb-2'>Ultimate Vaping Convenience</p>
                    <p>Designed for simplicity and ease, our vapes offer quick, satisfying puffs anytime, anywhere. Effortless and enjoyable. With user-friendly features and no complicated settings, our devices are perfect for both beginners and seasoned vapers.
                    <span className='underline cursor-pointer flex'>Learn More</span></p>
                </div>
            </div>     
        </div>
    </div>
  )
}

export default Approach;
