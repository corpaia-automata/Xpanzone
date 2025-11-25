import React from 'react';

const WhatWeOffer = () => {
  const cardData = [
    {
      title: "DIABETIC CARE",
      color: "#1B88E5",
      text: "Comprehensive diabetes management through nutrition, exercise, and remission-focused strategies.",
    },
    {
      title: "CANCER CARE",
      color: "#1B88E5",
      text: "Holistic cancer support including nutritional therapy and emotional well-being guidance.",
    },
    {
      title: "GUT HEALTH",
      color: "#1B88E5",
      text: "Enhancing digestion and gut flora using personalized nutrition and lifestyle changes.",
    },
    {
      title: "IMMUNITY",
      color: "#1B88E5",
      text: "Strengthening immune response with targeted supplements, diagnostics, and wellness routines.",
    },
    {
      title: "METABOLIC BALANCING",
      color: "#1B88E5",
      text: "Balancing metabolism through personalized nutrition, lab tests, and therapeutic planning.",
    },
    {
      title: "INFERTILITY CARE",
      color: "#1B88E5",
      text: "Boosting reproductive health via hormone balance, lifestyle changes, and expert care.",
    },
    {
      title: "PERSONALISED PREVENTIVE CLINIC",
      color: "#5CA66A",
      text: "Custom preventive care to reduce disease risk and promote long-term wellness habits.",
    },
    {
      title: "GENO-METABOLIC CONSULTATION AND FUNCTIONAL METABOLIC THERAPY",
      color: "#5CA66A",
      text: "Advanced metabolic care based on genetic insights to restore health and vitality.",
    },
    {
      title: "LIFESTYLE DISEASE REVERSAL",
      color: "#5CA66A",
      text: "Reversing chronic conditions through integrative care, healthy habits, and support plans.",
    },
  ];
  

  return (
    <div className="w-full py-16">
      <div className="px-6 md:px-12">
        <button className="w-fit uppercase text-sm text-blue-900 font-extrabold tracking-widest px-3 py-2 rounded-md border border-gray-700 mb-3">
          WE OFFER
        </button>
        <h2 className="text-left text-4xl font-bold text-[#016D52] mb-10">WHAT WE OFFER</h2>
      </div>

      {/* Grid layout with equal-height cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
        {cardData.map((card, index) => (
          <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 border-t-4 flex flex-col justify-between]"
          style={{ borderColor: card.color }}
        >
        
            <h3 className="text-lg font-bold mb-2" style={{ color: card.color }}>
              {card.title}
            </h3>
            <p className="text-gray-700 text-md">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
