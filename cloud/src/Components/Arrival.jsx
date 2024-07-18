import React, { useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Arrival = () => {
  const slides = [
    {
      URL: 'https://www.innokin.com/hubfs/How%20to%20Choose%20the%20Best%20Disposable%20Vape%20for%20Your%20Needs.jpg'
    },
    {
      URL: 'https://image.made-in-china.com/2f0j00ZWiplYVUbNbq/Factory-Original-Yuoto-XXL-2500puffs-Vape-Pods-Stick-Style-Vape-Disposable-Pen.webp'
    },
    {
      URL: 'https://cdn.shopify.com/s/files/1/0143/9095/1990/files/9010_2048x2048.jpg?v=1639991964'
    },
    {
      URL: 'https://vivalacloud.ru/wp-content/uploads/2021/05/Ddze.jpg'
    },
    {
      URL: 'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_uk:cuisines:groceries-0.jpg/v1/uk/restaurants/225630.jpg'
    },
    {
      URL: 'https://i.pinimg.com/originals/53/ff/2b/53ff2b69913d3dab8ab5cec47ea40fbb.jpg'
    },
    {
      URL: 'https://cdn.shopify.com/s/files/1/0502/8033/3505/files/02_901fa157-7ef4-4b3d-8442-48c19437da99.jpg?v=1662300993'
    },
    {
      URL: 'https://vivalacloud.ru/wp-content/uploads/2020/08/OXVA.jpg'
    },
    {
      URL: 'https://bizweb.dktcdn.net/100/378/237/products/oxva-oneo.jpg?v=1703048168120'
    },
    {
      URL: 'https://th.bing.com/th/id/R.f87bb84a05e99dcff615f24e32996edc?rik=B9V1lLeE%2fqxFdQ&riu=http%3a%2f%2finrorwxhiipllr5q.ldycdn.com%2fcloud%2fnkBpiKkkRliSkjjjkplni%2fweixintupian_20200624135530.jpg&ehk=AgXjaV0v9HF5wkJvk4vGWYF4nMK7LL2chxhX7ko4xyU%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      URL: 'https://www.innokin.com/hubfs/How%20to%20clean%20vape%20pod.jpg'
    },
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
    <div className='max-w-[1350px] w-full mx-auto py- px-4 relative mb-10'>
      <div>
        <p className='font-Jost font-bold text-3xl sm:text-4xl text-[#272626] pb-4 pl-4'>New Arrival</p>
      </div>
      <div style={{backgroundImage: `url(${slides[currentIndex].URL})`}} className='relative w-full h-[400px] sm:h-[650px] rounded-2xl bg-center bg-cover duration-500 mb-4'>
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

export default Arrival;
