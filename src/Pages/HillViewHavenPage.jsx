import React from 'react';

const HillViewHavenPage = () => {
  return (
    <div>
      <div className="w-full h-[70vh] relative">
        <img
          src="/image.png"
          alt="Hill View Haven"
          className="w-full h-full object-cover "
        />

        {/* Overlay with text on left center */}
        <div className="absolute inset-0 flex items-center justify-start px-40 bg-opacity-40">
          <div className="max-w-xl text-white text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">Hill View Haven</h1>
            <p className="text-2xl text-shadow-gray-50 md:text-2xl">
              The Sleep Wellness Retreat
            </p>
          </div>
        </div>
      </div>
    <div className='bg-gradient-to-br from-green-100 to-blue-100'>

      <div className="max-w-7xl mx-auto py-12 ">
        <h2 className="text-center text-4xl font-bold text-[#016D52] mb-10">What We Offer</h2>

        {/* Masonry layout using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 px-6 md:px-12 space-y-6">
          {[
            {
              title: "DIABETIC CARE",
              color: "#1B88E5",
              text: "Managing diabetes through integrative approaches. Remission of Disease.",
            },
            {
              title: "CANCER CARE",
              color: "#1B88E5",
              text: "Providing holistic care for cancer patients, to enhance overall well-being.",
            },
            {
              title: "GUT HEALTH",
              color: "#1B88E5",
              text: "Improving GUT Health with lifestyle modification and supplements.",
            },
            {
              title: "IMMUNITY",
              color: "#1B88E5",
              text: "Optimizing immune function through a combination of conventional medicine and precision nutrition.",
            },
            {
              title: "METABOLIC BALANCING",
              color: "#1B88E5",
              text: "Restoring and maintaining metabolic balance through personalized treatment plans incorporating diet, lifestyle changes, and targeted therapies.",
            },
            {
              title: "INFERTILITY CARE",
              color: "#1B88E5",
              text: "Personalised treatment plans featuring nutritional counselling, hormonal balancing, lifestyle modifications, and supplements to support your journey towards achieving optimal reproductive health.",
            },
            {
              title: "PERSONALISED PREVENTIVE CLINIC",
              color: "#5CA66A",
              text: "Providing tailored, evidence-based care to prevent illness and enhance long-term health.",
            },
            {
              title: "GENO-METABOLIC CONSULTATION AND FUNCTIONAL METABOLIC THERAPY",
              color: "#5CA66A",
              text: "Personalized genetic and metabolic care to restore balance and optimize health.",
            },
            {
              title: "LIFESTYLE DISEASE REVERSAL",
              color: "#5CA66A",
              text: "Empowering you to reverse lifestyle diseases through personalized nutrition and wellness strategies.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white rounded-xl shadow-lg p-6 border-t-4"
              style={{ borderColor: card.color }}
              >
              <h3 className="text-lg font-bold mb-2 " style={{ color: card.color }}>
                {card.title}
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
          </div>
  );
};

export default HillViewHavenPage;
