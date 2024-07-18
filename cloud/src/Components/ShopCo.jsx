import React, { useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const ShopCo = () => {
  const slides = [
    {
      URL: 'https://www.theoldhag.com/wp-content/uploads/2021/04/Vape-Kit-980x654.jpeg'
    },
    {
      URL: 'https://cdn1.productnation.co/stg/sites/5/5e7c110d42ab3.jpeg'
    },
    {
      URL: 'https://cdn.shopify.com/s/files/1/0015/8875/6538/files/batteries.jpg?v=1613544407'
    },
    {
      URL: 'https://creagermerc.com/wp-content/uploads/2018/05/76709735_m.jpg'
    },
    {
      URL: 'https://i.pinimg.com/originals/b2/db/80/b2db8070f6a1eb60dacefc1a7b637cbe.jpg'
    },
    {
      URL: 'https://cdn1.productnation.co/optimized/1024w/stg/sites/5/5ea002f110c51.jpeg'
    },
    {
      URL: 'https://storage.myseldon.com/news-pict-6f/6F23A9AA1A7FDC8FB485FF6AD8B7A843'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-[1350px] w-full mx-auto py-2 px-4 relative mb-10'>
      <div>
        <p className='font-Jost font-bold text-3xl sm:text-4xl text-[#272626] pb-4 pl-4'>New Arrival</p>
      </div>
      <div style={{backgroundImage: `url(${slides[currentIndex].URL})`}} className='relative w-full h-[300px] sm:h-[400px] lg:h-[650px] rounded-2xl bg-center bg-cover duration-500 mb-4'>
        {/* Left Arrow */}
        <div className='absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'>
          <div className='rounded-full bg-black/20 text-white cursor-pointer p-2'>
            <IoIosArrowDropleft size={30} onClick={prevSlide} />
          </div>
        </div>
        {/* Right Arrow */}
        <div className='absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full group-hover:translate-x-0 transition-transform duration-300'>
          <div className='rounded-full bg-black/20 text-white cursor-pointer p-2'>
            <IoIosArrowDropright size={30} onClick={nextSlide} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCo;
