import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import MoneyExchange from '../assets/Flying Money Animation.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={MoneyExchange}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1 className="text-amber-200">Money Exchange BD.</h1>
        <h2 className='py-4 md:px-32 font-semibold text-lg md:text-2xl'>Welcome to our Money Exchange site.This is the site where any anyone can get the proper source to exchange their money safely and within low cost. This site the Money Exchange BD app are available to download.</h2>
      </div>
    </div>
  );
};

export default Hero;
