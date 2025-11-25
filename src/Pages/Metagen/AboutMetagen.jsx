import React from 'react';

const AboutMetagen = () => {
  return (
    
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Image */}
        <div className="w-full flex justify-center">
          <img
            src="/home/consult.webp"
            alt="Metagen About Us"
            className="rounded-xl shadow-lg w-full max-w-[600px] object-cover"
          />
        </div>

        {/* Right: About Text */}
        <div className="text-black space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Metagen offers a comprehensive range of services designed to promote
            physical, mental, and emotional well-being. Our offerings cater to all,
            from individuals seeking preventive care to those requiring specialized
            treatments.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            At Metagen, we are dedicated to providing preventive and personalized
            healthcare services. Our mission is to empower individuals to achieve
            their highest levels of health and vitality through advanced,
            evidence-based treatment methods.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Under the leadership of Dr. A. Sreekumar, a highly experienced medical
            professional with qualifications including M.B.B.S, D.L.O, FACNEM, FINEM,
            and FSAAARM, the center approaches to address the root causes of various
            conditions, supported by scientific research and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMetagen;
