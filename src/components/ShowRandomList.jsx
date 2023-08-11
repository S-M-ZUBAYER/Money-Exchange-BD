import React, { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';

const ShowRandomList = () => {
  const [peopleList, setPeopleList] = useState([
    'Mohammad Rahman',
    'Ahmed Ali',
    'Ayesha Akter',
    'Kamal Hasan',
    'Abul Hossai',
    'Nazneen Begum',
    'Mustafa Ahmed'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleList();
    }, 5 * 1000); // 5 seconds (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const shuffleList = () => {
    setPeopleList(prevList => {
      const shuffledList = [...prevList];
      for (let i = shuffledList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
      }
      return shuffledList;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold md:pl-10 mb-4">Show Some User List</h1>
      <ul className="list-disc md:pl-10">
        {peopleList.map((person, index) => (
          <div key={index} className=" flex items-center">
            <BsPersonCircle className="mr-3 my-2 text-lime-700" size={30} />
            {person}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShowRandomList;

