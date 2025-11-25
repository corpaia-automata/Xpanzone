
import React, { useEffect, useState } from 'react';
import AboutUsPage from '../Pages/AboutUsPage';
import BlogCards from '../Pages/BlogsPage';
import FAQsPage from '../Pages/FAQsPage';
import Modes from '../Pages/Modes';
import Longevity from '../Pages/Longevity';
import { BenefitsMasonry } from '../Pages/BenefitsMasonry';
import DesignPhilosophy from '../Pages/DesignPhilosophy';
import BookNow from '../Pages/BookNow';
import Subscribe from '../Pages/Subscribe';
import { ScrollCue } from '../Pages/ScrollCue';

const Home = () => {

  const words = ['Well', 'Different', 'Smart'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>

      {/* <div className="relative w-full h-screen overflow-hidden"> */}
      {/* Background Video */}
      {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      <div className="relative w-full h-screen font-sans">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/home/4.jpg')" }} // Use your own image path
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Centered Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h3 className="text-md md:text-2xl uppercase tracking-widest mb-4 font-light">
            Awaken to a life of
          </h3>

          <h1 className="text-7xl md:text-8xl font-cursive font-light italic tracking-wide leading-[1.2]">
            Mindful balance
          </h1>
        </div>

        <div>
          <ScrollCue/>
        </div>

      </div>


      <div>
        <AboutUsPage />
        {/* <Longevity /> */}
        {/* <Modes /> */}
        <BenefitsMasonry />
        <BookNow/>
        <FAQsPage />
        <Subscribe/>
        {/* <DesignPhilosophy/> */}
        {/* <BlogCards /> */}
      </div>
    </>
  );
};

export default Home;























// import React, { useState, useEffect } from 'react';
// import AboutUsPage from '../Pages/AboutUsPage';

// const images = [
//   '/home/1.jpg',
//   '/home/2.jpg',
//   '/home/3.jpg',
// ];

// const Home = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Images */}
//       {images.map((src, index) => (
//         <img
//           key={index}
//           src={src}
//           alt=""
//           className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${current === index ? 'opacity-100' : 'opacity-0'
//             }`}
//         />
//       ))}

//       {/* Arrows */}
//       <button
//         onClick={() => setCurrent((current - 1 + images.length) % images.length)}
//         className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-3xl bg-black/50 px-3 py-1 rounded-full z-10"
//       >
//         ‹
//       </button>
//       <button
//         onClick={() => setCurrent((current + 1) % images.length)}
//         className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white text-3xl bg-black/50 px-3 py-1 rounded-full z-10"
//       >
//         ›
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-4 h-4 rounded-full cursor-pointer ${index === current ? 'bg-white' : 'bg-white/50'
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;