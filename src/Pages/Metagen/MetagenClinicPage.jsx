import React from 'react';
import WhatWeOffer from './WhatWeOffer';
import OurServices from './OurServices';
import MentalWellBeing from './MentalWellBeing';
import MetagenSchool from './MetagenSchool';
import AboutMetagen from './AboutMetagen';

const MetagenClinicPage = () => {

  console.log("OurServices rendered");

  return (
    <div>
      <div className="w-full h-[60vh] bg-black relative flex  items-center pl-32">
        <div className='flex flex-col space-y-3'>
          <h1 className="text-white text-4xl font-bold">
            <span className='text-6xl'>Metagen</span> Nutrigenomics Clinic
          </h1>
          <p>To enhance the quality of humen life at every stage by empowering individuals to achieve life-long health, well-being and balance</p>
        </div>
      </div>


      <div className='bg-gradient-to-br from-green-100 to-blue-100'>
        <div className='max-w-screen-2xl mx-auto'>
          <AboutMetagen />
          <WhatWeOffer />
          <div className='flex justify-center items-center'>
            <button className="w-fit bg-blue-900 uppercase text-md text-white font-bold tracking-widest px-3 py-3 rounded-md border border-gray-700 mb-3">
              SCHEDULE A CONSULTATION
            </button>
          </div>
          <OurServices />
          <div className='flex justify-center items-center'>
            <button className="w-fit bg-blue-900 uppercase text-md text-white font-bold tracking-widest px-3 py-3 rounded-md border border-gray-700 mb-3">
              SCHEDULE A CONSULTATION
            </button>
          </div>
          <MentalWellBeing />
          <MetagenSchool />
          <div className='flex justify-center items-center '>
            <button className="w-fit bg-blue-900 uppercase text-md text-white font-bold tracking-widest px-3 py-3 rounded-md border border-gray-700 mb-8">
              SCHEDULE A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetagenClinicPage;
