import React from 'react';

const MetagenSchool = () => {
  return (
    <div className=" py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="/media/yoyo.jpg" // Replace with your image path
            alt="Metagen School"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}

      </div>
      <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT SIDE: Metagen Health Initiative Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-6xl font-bold text-blue-900 mb-2 font-sans" style={{ fontFamily: 'Manrope, sans-serif' }}>THE</h2>
            <h2 className="text-8xl font-bold text-blue-900 mb-2 font-sans" style={{ fontFamily: 'Manrope, sans-serif' }}>METAGEN</h2>
            <h2 className="text-8xl font-bold text-blue-900 mb-2 font-sans" style={{ fontFamily: 'Manrope, sans-serif' }}>HEALTH</h2>
            <h2 className="text-8xl font-bold text-blue-900 mb-6 font-sans" style={{ fontFamily: 'Manrope, sans-serif' }}>INITIATIVE</h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              At Metagen Nutrigenemics, we are committed to fostering the health and well-being of school-aged students. Our Wellness School Health initiative is designed to support the physical, mental, and overall wellness of students, ensuring they thrive in both their academic and personal lives.
            </p>
          </div>

          {/* RIGHT SIDE: Cards */}
          <div className="w-full lg:w-1/2">
            {/* Section Heading */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-10 bg-blue-900 rounded-sm"></div>
              <span className="text-blue-900 text-xl font-semibold uppercase">Our Comprehensive Program Includes:</span>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-gradient-to-b from-green-100 to-blue-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:from-green-200 hover:to-blue-200">
                <h3 className="text-2xl font-bold text-[#016D52] mb-4">PHYSICAL ASSESSMENT</h3>
                <p className="text-gray-700 text-xl">
                  Thorough physical evaluations to monitor growth, fitness, and detect health issues early for timely support.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-b from-green-100 to-blue-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:from-green-200 hover:to-blue-200">
                <h3 className="text-2xl font-bold text-[#016D52] mb-4">HEALTH REPORT</h3>
                <p className="text-gray-700 text-xl">
                  Detailed reports with insights and recommendations to help students and parents make informed health decisions.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gradient-to-b from-green-100 to-blue-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:from-green-200 hover:to-blue-200">
                <h3 className="text-2xl font-bold text-[#016D52] mb-4">MENTAL ASSESSMENT</h3>
                <p className="text-gray-700 text-xl">
                  Mental assessments to identify stress, anxiety, or other concerns and provide needed support.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-gradient-to-b from-green-100 to-blue-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:from-green-200 hover:to-blue-200">
                <h3 className="text-2xl font-bold text-[#016D52] mb-4">WELLNESS ASSESSMENT</h3>
                <p className="text-gray-700 text-xl">
                  Evaluating nutrition, sleep, and habits to help students build a healthy, balanced lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MetagenSchool;
