import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const ContactUsPage = () => {
  return (
    <div className="py-24 px-4 max-w-screen-2xl mx-auto flex flex-col ">
      {/* Main Flex Container */}
      <div className="w-full flex flex-col md:flex-row gap-12">

        {/* Left Side - Contact Form */}
        <form className="order-2 md:order-1 md:w-1/2 w-full p-6 md:p-8 space-y-6 self-start">
          <h1 className="text-4xl font-semibold text-black">Contact Us</h1>

          <div >
            <label className="block text-sm font-medium text-black mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-white text-black py-3 rounded-lg font-semibold bg-yellow-400 hover:bg-yellow-500 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Right Side - Image */}
        <div className="order-1 md:order-2 md:w-1/2 w-full">
          <img
            src="/home/contactUs.webp"
            alt="Metagen About Us"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Info Section - Placed Below the Form/Image Block */}
      <div className="mt-16 w-full max-w-4xl flex flex-col items-start gap-2">
        <h1 className='text-4xl text-black'>Let's talk</h1>
        <div className=" p-6  flex items-start space-x-4">
          <MdPhone className="text-2xl text-yellow-500 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-black">Phone</h3>
            <p className="text-sm text-gray-700">+1 234 567 890</p>
          </div>
        </div>

        <div className=" p-6  flex items-start space-x-4">
          <MdEmail className="text-2xl text-yellow-500 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-black">Email</h3>
            <p className="text-sm text-gray-700">contact@company.com</p>
          </div>
        </div>

        <div className=" p-6  flex items-start space-x-4">
          <MdLocationOn className="text-2xl text-yellow-500 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-black">Address</h3>
            <p className="text-sm text-gray-700">1234 Some St, City, Country</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUsPage;
