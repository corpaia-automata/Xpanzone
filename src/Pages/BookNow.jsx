import React from 'react';

const BookNow = () => {
  return (
    <div className="relative w-full  py-24 bg-center bg-cover overflow-hidden" 
         style={{ 
           backgroundImage: `
             linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(240, 210, 120, 0.8)),
             url('/your-textured-yellow-bg.png')
           `
         }}>

      {/* Decorative Dots & Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Example circles */}
        <div className="absolute w-48 h-48 rounded-full border border-white/20 top-10 left-10" />
        <div className="absolute w-64 h-64 rounded-full border border-white/10 bottom-0 right-0" />

        {/* Example lines */}
        <div className="absolute w-px h-full bg-white/10 left-1/4 top-0" />
        <div className="absolute w-px h-full bg-white/10 right-1/4 top-0" />

        {/* Example dots */}
        <div className="absolute w-2 h-2 rounded-full bg-white/20 top-1/3 left-1/2" />
        <div className="absolute w-2 h-2 rounded-full bg-white/30 bottom-1/3 right-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black text-center px-6">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4">
          Today's the day to
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] font-light mb-6">
          BOOK YOUR STAY
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-black/90 mb-10">
          Excited about what awaits you at Xpanzone? Book your stay with us now, and start mapping out your journey to wellness.
        </p>
        <a
          href="#"
          className="px-8 py-4 bg-white text-gray-800 text-sm tracking-widest uppercase border border-transparent hover:bg-transparent hover:text-black hover:border-white transition-all duration-300"
        >
          Book Now →
        </a>
      </div>
    </div>
  );
};

export default BookNow;
