import React from 'react'

import Singapore from '../assets/singapore.jpg';
import Malaysia from '../assets/malaysia.jpg';
import USA from '../assets/USA.jpg';
import Europe from '../assets/European Countries.jpg';
import Saudi from '../assets/Saudi Arabia.jpg';
import Dubai from '../assets/Dubai.jpg';

import SelectsCard from './SelectsCard';

const AllCountries = () => {
  return (
    <div className="mt-20">
      <div className="w-full text-center">
      <h1 className="">Show the List of Countries Where Our Business Running </h1>
        <p className='py-4'>These are the list and show some historical place of these Countries where Our Business RunningOur Business Running. </p>
      </div>
      <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={Singapore} text='Singapore' />
    <SelectsCard bg={Malaysia} text='Malaysia' />
    <SelectsCard bg={USA} text='USA' />
    <SelectsCard bg={Europe} text='European Country' />
    <SelectsCard bg={Saudi} text='Saudi Arabia' />
    <SelectsCard bg={Dubai} text='Dubai' />
    
        
    </div>
    </div>
    
  )
}

export default AllCountries;