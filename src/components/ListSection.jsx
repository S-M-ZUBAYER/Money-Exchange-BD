import React from 'react';
import ShowRandomList from './ShowRandomList';
import { RiCustomerService2Fill } from 'react-icons/ri';

const ListSection = () => {


  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>About Money Exchange BD</h2>
          <p className='py-4'>
            A currency exchange is a licensed business that allows customers to exchange one currency for another. Currency exchange of physical money (coins and paper bills) is usually done over the counter at a teller station, which can be found in various places such as airports, banks, hotels, and resorts. Currency exchanges make money by charging a nominal fee and through the Money Exchange BD. Money Exchange BD is a site where any one can easily and securely exchange their there money all over the world within low cost.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-12 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button >
              <RiCustomerService2Fill size={50} />
            </button>
            <div className="ml-3">
              <h3 className='py-2'>Emergency Contact</h3>
              <p className='py-1 flex'>+8801869962141</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ShowRandomList></ShowRandomList>
      </div>
    </div>

  );
};

export default ListSection;