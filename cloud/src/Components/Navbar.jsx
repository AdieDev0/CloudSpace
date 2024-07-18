import React, { useState } from 'react';
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='sticky top-0 z-50'>
      
      {/* WARNING MESSAGE */}
      <div className='bg-yellow-300 text-center py-2'>
        <p className='text-sm font-semibold'>Warning: Vaping products contain nicotine, a highly addictive substance. Keep out of reach of children.</p>
      </div>

      {/* DESKTOP DESIGN */}
      <div className=' uppercase max-w-full bg-white justify-between h-16 px-8 md:flex hidden'>
        <div className='hidden md:max-w-2xl md:flex'>
          <ul className='flex list-none mt-5 text-sm font-semibold'>
            <li className='mx-4 font-Jost mt-1 cursor-pointer hover:underline'>Pod and kits</li>
            <li className='mx-4 font-Jost mt-1 cursor-pointer hover:underline'>Disposable Pods</li>
            <li className='mx-4 font-Jost mt-1 cursor-pointer hover:underline'>E-Juice</li>
            <li className='mx-4 font-Jost mt-1 cursor-pointer hover:underline text-red-500'>Sale</li>
          </ul>
        </div>
        {/* LOGO */}
        <div className='flex-1 flex justify-center items-center text-4xl'>
          <p className='font-Modak mt-2 mr-7'>CloudSpace</p>
        </div>
        <div>
          <ul className='flex list-none mt-5 text-sm font-semibold'>
            <li className='mx-4 font-Jost mt-1 cursor-pointer hover:underline hidden md:flex'>Stores</li>
            <li className='mx-4 font-Jost mt-1 cursor-pointer hover:underline hidden md:flex'>Wishlist</li>
            <CiSearch size={25} className='mx-4 cursor-pointer hidden md:flex' />
            <CiUser size={25} className='mx-4 cursor-pointer hidden md:flex' />
            <IoIosHelpCircleOutline size={25} className='mx-4 cursor-pointer hidden md:flex hover:text-red-500' />
            <CiShoppingCart size={25} className='mx-4 cursor-pointer hidden md:flex' />
          </ul>
        </div>
      </div>

      {/* MOBILE DESIGN */}
      <div className='md:hidden bg-white h-16 px-4 flex items-center justify-between '>
        {menuOpen ? (
          <IoClose size={25} className='cursor-pointer mt-2' onClick={toggleMenu} />
        ) : (
          <HiOutlineMenu size={25} className='cursor-pointer mt-2' onClick={toggleMenu} />
        )}
        <div className='text-center text-4xl font-Modak ml-12'>
          <h1 className='mt-2'>CloudSpace</h1>
        </div>
        <div className='flex'>
          <CiSearch size={25} className='mx-2 cursor-pointer mt-2' />
          <CiUser size={25} className='mx-2 cursor-pointer mt-2' />
          <CiShoppingCart size={25} className='mx-2 cursor-pointer mt-2' />
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className='md:hidden bg-white py-2 px-5 '>
          <ul className='flex flex-col list-none text-sm font-semibold uppercase'>
            <li className='py-2 cursor-pointer border-b border-gray-200 my-3 font-Jost'><span className='ml-4'>Shop</span></li>
            <li className='py-2 cursor-pointer border-b border-gray-200 my-3 font-Jost'><span className='ml-4'>Faq</span></li>
            <li className='py-2 cursor-pointer border-b border-gray-200 my-3 font-Jost'><span className='ml-4'>Safety</span></li>
            <li className='py-2 cursor-pointer border-b border-gray-200 my-3 font-Jost'><span className='ml-4'>Contact</span></li>
            <li className='py-2 cursor-pointer border-b border-gray-200 my-3 font-Jost'><span className='ml-4'>Pod And Kits</span></li>
            <li className='py-2 cursor-pointer border-b border-gray-200 my-3 font-Jost'><span className='ml-4'>Disposable Pods</span></li>
            <li className='py-2 cursor-pointer border-b border-gray-200 my-3 font-Jost'><span className='ml-4'>E-Juice</span></li>
            <li className='py-2 cursor-pointer border-b border-gray-200 my-3 font-Jost text-red-500'><span className='ml-4'>Sale</span></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
