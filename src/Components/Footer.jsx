import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <img
            src="/media/xpanzone.png"
            alt="Creopedia Logo"
            className="h-16 md:h-16 w-auto"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left Section: Logo + Form */}
          <div className="w-full md:w-1/3">
            <p className="mt-3 text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form className="mt-4 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-3 text-sm text-white bg-transparent border-b border-[#20361c] placeholder-[white] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#d4af37] text-[#dde7d0] text-md font-bold px-5 py-2 rounded-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>


            <p className="mt-4 text-xs opacity-70 max-w-sm">
              By subscribing you agree to with our{" "}
              <a href="#" className="underline">Privacy Policy</a> and provide consent to receive updates.
            </p>
          </div>

          {/* Right Section: Services + Social Links */}
          <div className="w-full md:w-1/2 flex justify-end gap-20">
            <div>
              <h4 className="text-md font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="/about-us" className="hover:text-yellow-500 transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-yellow-500 transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
                <li>
                  {/* <a href="/how-we-work" className="hover:text-yellow-500 transition-colors duration-200"> */}
                    How We Work
                  {/* </a> */}
                </li>
                <li>
                  <a href="/blogs" className="hover:text-yellow-500 transition-colors duration-200">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-white">
                <li className="flex items-center gap-2">
                  <FaFacebookF className="text-white" />
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram className="text-white" />
                  <a href="#" className="hover:underline">Instagram</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaTwitter className="text-white" />
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaLinkedinIn className="text-white" />
                  <a href="#" className="hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-[#20361c]/30" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>©2025 Xpanzone. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
