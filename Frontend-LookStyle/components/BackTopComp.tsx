"use client"
import React, { useEffect, useState } from 'react';
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

const BackTopComp = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    //Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Link
      to='hero'
      smooth={true}
      className={`${!isActive && 'hidden'} fixed w-11 h-11 right-8 bottom-12 md:right-8 lg:right-12 xl:right-16 rounded-2xl z-30 cursor-pointer flex justify-center items-center transition ease-in-out hover:scale-110gi bg-gradient-to-r from-secundarycolor-sc to-primarycolor-pc text-white`}>
      <FaChevronUp className='text-xl' />
    </Link>
  );
}

export default BackTopComp;