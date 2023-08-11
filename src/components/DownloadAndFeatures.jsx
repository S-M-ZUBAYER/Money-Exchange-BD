import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdDownloadForOffline } from 'react-icons/md';
import Home from "../assets/Home.png"
import Balance from "../assets/Balance.png"
import AddMoney from "../assets/AddMoney.png"
import AddUser from "../assets/AddUser.png"
import BankTransfer from "../assets/BankTransfer.png"
import DrivePackage from "../assets/DrivePackage.png"
import FlexiLoad from "../assets/Flexiload.png"
import SendMoney from "../assets/SendMoney.png"
import Notification from "../assets/Notification.png"
import Bkash from "../assets/Bkash.png"
import Nagad from "../assets/Nagad.png"
import Rocket from "../assets/Rocket.png"
import UCash from "../assets/UCash.png"
import MCash from "../assets/MCash.png"

const DownloadAndFeatures = () => {

  const downloadLink = "https://we.tl/t-PIFqP8AVf4";
  const handleDownload = () => {
    // // Replace 'app-link' with the actual URL of your app
    // const appUrl = 'https://example.com/app.apk';
    // const link = document.createElement('a');
    // link.href = appUrl;
    // link.download = 'app.apk'; // Replace 'app.apk' with the desired file name
    // link.click();
    const anchor = document.createElement('a');
    anchor.href = downloadLink;
    anchor.target = "_blank"; // Open the link in a new tab
    anchor.download = 'S M ZUBAYER'; // Set the desired name for the downloaded file
    anchor.click();
  };


  const images = [
    Home,
    Balance,
    AddMoney,
    AddUser,
    BankTransfer,
    FlexiLoad,
    SendMoney,
    Bkash,
    Nagad,
    Rocket,
    UCash,
    MCash
  ];


  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>

      <div>
        <div className='border text-center'>
          <p className='pt-2'>Please Stay With Us </p>
          <p className='bg-gray-800 text-gray-200 py-2'>By Download This App</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center text-center mt-5'>
          <button onClick={handleDownload}>
            <MdDownloadForOffline size={50} />
          </button>
          <div className="ml-3">
            <h3 className='py-2'>Money Exchange BD</h3>
            <p className='py-1'>Please Press To Download</p>
          </div>
        </div>
      </div>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-200 p-4">
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DownloadAndFeatures;
