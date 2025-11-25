import React from "react";
import { Utensils, Tv2, Laptop, Dumbbell, Moon, Brain, Users } from "lucide-react";

const modes = [
  { title: "Dining", icon: <Utensils size={28} />, color: "bg-[#FDF6C2]" },
  { title: "Work", icon: <Tv2 size={28} />, color: "bg-[#F9D5E5]" },
  { title: "Entertainment", icon: <Laptop size={28} />, color: "bg-[#D0E6A5]" },
  { title: "Fitness/Relaxation", icon: <Dumbbell size={28} />, color: "bg-[#FFDAC1]" },
  { title: "Social Gathering", icon: <Moon size={28} />, color: "bg-[#B5EAD7]" },
  { title: "Thinking", icon: <Brain size={28} />, color: "bg-[#E2F0CB]" },
  { title: "Sleep", icon: <Users size={28} />, color: "bg-[#C7CEEA]" },
];

const SevenModes = () => {
  return (
    <div className="px-6 py-12">
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          The <span className="text-yellow-300">Seven</span> Modes
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
          These seven modes guide your daily rhythm, supporting physical, mental, and social well-being—ultimately leading to sustainable vitality.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {modes.map((mode, index) => (
          <div
            key={index}
            className={`${mode.color} rounded-2xl flex flex-col justify-between p-6 h-48 md:h-60 shadow-md transition-transform hover:scale-105 duration-300`}
          >
            <div className="text-black opacity-80">{mode.icon}</div>
            <div className="text-md font-bold text-center text-gray-800 mt-auto">{mode.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SevenModes;




// import React, { useRef } from "react";
// import { ArrowRight } from "lucide-react";



// const modes = [
//   {
//     title: "Dining",
//     image: "modes/dining.webp",
//   },
//   {
//     title: "Entertainment",
//     image: "/images/outdoor-adventure.jpg",
//   },
//   {
//     title: "Work",
//     image: "/images/farm-bees.jpg",
//   },
//   {
//     title: "Fitness/Relaxation",
//     image: "/images/mountain-hike.jpg",
//   },
//   {
//     title: "Art Therapy",
//     image: "/images/art-therapy.jpg",
//   },
// ];



// const ExperienceSection = () => {
//   const scrollRef = useRef(null);

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="bg-[#f8f4ef] py-16 px-6 md:px-20 relative overflow-hidden">
//       <div className=" mx-auto grid md:grid-cols-5 gap-8 items-start">
//         {/* Left Content */}
//         <div className="md:col-span-2">
//           <p className="text-sm tracking-widest text-gray-500 mb-2">INSPIRED MODES</p>
//           <h2 className="text-4xl font-semibold tracking-wide leading-tight text-gray-900 mb-4">
//             FOR EVERY <br /> INTENTION
//           </h2>
//           <p className="text-gray-600 text-base mb-6">
//             Miraval Resorts’ signature approach to wellness is immersive and experiential, with endless possibilities to explore.
//           </p>
//           <a href="#" className="text-sm font-semibold tracking-widest inline-flex items-center gap-2 text-black hover:underline">
//             EXPLORE ALL MODES <ArrowRight className="w-4 h-4" />
//           </a>
//         </div>

//         {/* Card Carousel */}
//         <div className="md:col-span-3 relative">
//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
//           >
//             {modes.map((exp, index) => (
//               <div
//                 key={index}
//                 className="min-w-[380px] h-[500px] bg-black text-white rounded-lg overflow-hidden relative shadow-md flex-shrink-0"
//               >
//                 <img
//                   src={exp.image}
//                   alt={exp.title}
//                   className="absolute w-full h-full object-cover inset-0"
//                 />
//                 <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
//                   <h3 className="text-3xl italic font-light">{exp.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Scroll Button */}
//           <button
//             onClick={scrollRight}
//             className="hidden md:flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition z-10"
//           >
//             <ArrowRight className="text-black" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;






// import React from "react";
// import { Utensils, Tv2, Laptop, Dumbbell, Moon, Brain, Users } from "lucide-react";

// const modes = [
//   { title: "Dining", icon: <Utensils size={32} /> },
//   { title: "Entertainment", icon: <Tv2 size={32} /> },
//   { title: "Work", icon: <Laptop size={32} /> },
//   { title: "Fitness/Relaxation", icon: <Dumbbell size={32} /> },
//   { title: "Sleep", icon: <Moon size={32} /> },
//   { title: "Mindscape/Thinking", icon: <Brain size={32} /> },
//   { title: "Social Gathering", icon: <Users size={32} /> },
// ];


// const SevenModes = () => {
//   return (
//     <div className=" flex items-center justify-center px-4 py-10">
//       <div className="max-w-screen-2xl w-full text-left">
//         <div className="max-w-4xl pl-7">
//           <h4 className="text-4xl font-medium mb-8 text-gray-800">The Seven Modes guide your daily rhythm supporting physical, mental, and social well-being that leads to sustainable vitality.</h4>
//         </div>
//         <div className="flex flex-wrap justify-center gap-6">
//           {modes.map((mode, index) => (
//             <div
//               key={index}
//               className={`w-48 h-48 flex flex-col items-center justify-center rounded-2xl shadow-md p-4 border transition-all hover:bg-yellow-300
//               ${index === 0
//                   ? "bg-yellow-400"
//                   : "bg-white border-gray-200 hover:shadow-xl"
//                 }`}
//             >

//               <div className="text-4xl text-gray-600 mb-4">{mode.icon}</div>
//               <div className="text-sm font-semibold text-gray-700 text-center">
//                 {mode.title.toUpperCase()}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SevenModes;
