import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import React from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 font-sans tracking-wide ${isScrolled ? "bg-white bg-opacity-80 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex justify-start md:justify-between items-center">

          {/* Left - Hamburger & "Menu" */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center space-x-3 text-xl uppercase tracking-wider"
          >
            <div className="space-y-[6px] flex flex-col justify-center">
              <div className={`w-6 h-[2px] transition-all duration-300 ${isScrolled ? "bg-black" : "bg-white"}`} />
              <div className={`w-6 h-[2px] transition-all duration-300 ${isScrolled ? "bg-black" : "bg-white"}`} />
              <div className={`w-6 h-[2px] transition-all duration-300 ${isScrolled ? "bg-black" : "bg-white"}`} />
            </div>
            <span className={`hidden md:inline font-semibold transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
              Menu
            </span>
          </button>

          {/* Center - Logo */}
          <div className="text-xl uppercase text-[#c7b08b] tracking-[0.3em] font-light">
            <a href="/" className="flex items-center">
              <img
                src="/media/xpanzone.png"
                alt="Creopedia Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Right - Book Now (Hidden on Mobile) */}
          <a
            href="#"
            className="hidden md:flex text-xl text-white font-semibold uppercase tracking-wider items-center gap-2 group"
          >
            Book Now
            <span className="transition-transform duration-300 group-hover:scale-x-150 group-hover:scale-y-125 origin-left">
              →
            </span>
          </a>
        </div>
      </nav>


      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#f9f5ef] z-50 text-black px-8 py-10">
          <div className="flex justify-around items-start mb-12">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest flex gap-3"
            >
              <ImCross /> Close
            </button>
            <div className="text-xl uppercase text-[#c7b08b] tracking-[0.3em] font-light">
              <a href="/" className="flex items-center" >
                <img
                  src="/media/xpanzone.png"
                  alt="Creopedia Logo"
                  className="h-16 md:h-16 w-auto"
                />
              </a>
            </div>
            <a href="#" className="text-sm uppercase tracking-widest">
              Book Now →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-12">
            <div className="space-y-6 text-2xl md:text-3xl font-light tracking-widest">
              <a href="/" className="block hover:opacity-70">
                HOME
              </a>
              <a href="/about-us" className="block hover:opacity-70">
                ABOUT US
              </a>
              <a href="/contact-us" className="block hover:opacity-70">
                CONTACT US
              </a>
              <a href="/hillview" className="block hover:opacity-70">
                HILL VIEW HAVEN
              </a>
              <a href="/packages" className="block hover:opacity-70">
                Packages              </a>
            </div>

            <div className="space-y-4 text-lg md:text-xl">
              {[
                "Group Retreats",
                "Digital Mindfulness",
                "Life in Balance Blog",
                "Video Library",
                "About",
                "Shop",
              ].map((text, i) => (
                <a href="#" key={i} className="block hover:opacity-70">
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div >
      )
      }
    </>
  );
}






// import { useEffect, useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import React from 'react';

// const navigation = [
//   { name: 'HOME', href: '/', current: true },
//   { name: 'ABOUT US', href: '/about-us', current: false },
//   // { name: 'BLOGS', href: '/blogs', current: false },
//   // { name: 'HILL VIEW', href: '/hillview', current: false },
//   { name: 'CLINIC', href: '/metagen', current: false },
//   { name: 'CONTACT US', href: '/contact-us', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll background change
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-[#004d00] shadow-md' : 'bg-transparent'}`}>
//       <div className="container mx-auto flex justify-around items-center max-w-full">
//         {/* Logo */}
//         <a href="/" className="flex items-center" >
//           <img
//             src="/media/xpanzone.png"
//             alt="Creopedia Logo"
//             className="h-16 md:h-16 w-auto"
//           />
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-4">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className={classNames(
//                 isScrolled ? 'text-black after:bg-black' : 'text-white after:bg-white',
//                 'relative px-3 py-2 rounded-md text-md font-semibold',
//                 'after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300'
//               )}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>



//         {/* Right Side - Contact Button & Mobile Icon */}
//         <div className="flex items-center space-x-4">
//           <button className='text-2xl font-semibold'>
//             Start your Reset
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-black hover:text-gray-700"
//           >
//             {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md py-3 space-y-2 text-center">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block text-black hover:text-gray-700 px-4 py-2"
//             >
//               {item.name}
//             </a>
//           ))}
//           <button className="w-full bg-yellow-400  text-white px-4 py-2 mt-2 rounded-md text-md font-medium">
//             Start your reset
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }
