import React from 'react';
import { motion } from 'framer-motion';
import { SlSocialSpotify, SlSocialLinkedin } from "react-icons/sl";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Links = () => {
  return (
    <div className='bg-black text-white w-full p-4 md:p-0'>
      <div className='flex flex-col md:flex-row md:ml-20 lg:ml-40'>
        {/* Product Section */}
        <motion.div
          className='mt-12 md:mt-24 mx-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='font-bold font-Roboto uppercase'>Product</p>
          <ul className='text-stone-400 mt-4 uppercase'>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Xlim Pro</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Xlim Go</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Xlim SQ</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Oneo 2</li>
          </ul>
        </motion.div>

        {/* Sub-urban Section */}
        <motion.div
          className='mt-12 md:mt-24 mx-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className='font-bold font-Roboto uppercase'>Sub-urban</p>
          <ul className='text-stone-400 mt-4 uppercase'>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Oxbar</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Ox Passion (vn)</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Xlim SQ (UK)</li>
          </ul>
        </motion.div>

        {/* Support Section */}
        <motion.div
          className='mt-12 md:mt-24 mx-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className='font-bold font-Roboto uppercase'>Support</p>
          <ul className='text-stone-400 mt-4'>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Verification</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Media Kits</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>FAQ</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Contact Us</li>
          </ul>
        </motion.div>

        {/* Explore Oxva Section */}
        <motion.div
          className='mt-12 md:mt-24 mx-8'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className='font-bold font-Roboto uppercase'>Explore Oxva</p>
          <ul className='text-stone-400 mt-4'>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Our Brand</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Blog</li>
            <li className='mt-2 cursor-pointer hover:text-red-600'>Compliance</li>
          </ul>
        </motion.div>
      </div>

      <div className='flex flex-col md:flex-row md:mt-10'>
        {/* Contact Info Section */}
        <motion.div
          className='mt-12 md:mt-0 md:mx-8 lg:mx-40 w-full md:w-96'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className='text-sm text-stone-400 font-Roboto'>
            <p>Tel: +63-2389-823-237</p>
            <p>Email: devutella@gmail.com</p>
            <p>Service Time: Mon-Fri, 9:00 am - 6:30 pm, (GMT)</p>
            <p>Location: MANILA, Quezon City</p>
          </div>
        </motion.div>

        {/* Social Icons Section */}
        <motion.div
          className='mt-12 md:mt-10 md:mx-8 lg:mx-40'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className='flex justify-center md:justify-between pt-5'>
            <p className='text-center md:text-left md:mr-8 font-bold font-Roboto whitespace-nowrap'>FOLLOW US</p>
            <SlSocialSpotify className='mr-8 hover:text-red-600 hover:scale-95' size={30} />
            <SlSocialLinkedin className='mr-8 hover:text-red-600 hover:scale-95' size={30} />
            <FaFacebook className='mr-8 hover:text-red-600 hover:scale-95' size={30} />
            <FaInstagram className='mr-8 hover:text-red-600 hover:scale-95' size={30} />
          </div>
        </motion.div>
      </div>

      <hr className="h-0.5 border-0 mx-auto md:mx-[350px] bg-neutral-500 dark:bg-stone-600 my-6" />

      {/* Footer Section */}
      <motion.div
        className='text-stone-400 mx-auto md:mx-[350px] text-center md:text-left'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <p className='text-sm'>
          <span className='font-Roboto font-bold text-sm'>WARNING: </span>
          CloudSpace e-cigarette devices are designed for use with e-liquids and are intended exclusively for adult smokers of legal purchase age. 
          Minors, pregnant women, individuals with diabetes, patients with depression, or those with high blood pressure should NOT use this product. Please keep it out of reach of children and pets. 
          Our product may contain nicotine, which is an addictive chemical. Your safety and well-being are our top priorities; we strongly encourage you 
          to make informed choices and consult with a healthcare professional if you have any concerns.
        </p>

        <p className='my-4 text-sm'>
          COPYRIGHT © 2024 CLOUDSPACE ALL RIGHTS RESERVED.
        </p>
      </motion.div>
    </div>
  );
}

export default Links;
