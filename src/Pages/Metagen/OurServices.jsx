import React from 'react';

const servicesData = [
  {
    title: "LIVER DETOXIFICATION",
    color: "#1B88E5",
    content: (
      <p>
        A special integrative & functional medicine protocol to heal your liver by detoxifying various degrees of fatty liver.
      </p>
    )
  },
  {
    title: "GLUTATHIONE THERAPY",
    color: "#1B88E5",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>This therapy is for the deficiency of Glutathione, a powerful antioxidant produced in our body.</li>
        <li>Enhances skin brightening.</li>
      </ul>
    )
  },
  {
    title: "VITAMIN C THERAPY",
    color: "#1B88E5",
    content: (
      <p>Vitamin C boosts immunity. We use it after scientific evaluation, showing better results for our patients.</p>
    )
  },
  {
    title: "OZONE THERAPY",
    color: "#5CA66A",
    content: (
      <p>Ozone's antibacterial, antifungal, antiviral, and antiparasitic properties help cure lifestyle and infectious diseases.</p>
    )
  },
  {
    title: "NUTRIENT COCKTAIL THERAPY",
    color: "#5CA66A",
    content: (
      <p>Improves immunity by curing micronutrient deficiencies and delivering powerful antioxidant benefits.</p>
    )
  },
  {
    title: "CHELATION THERAPY",
    color: "#5CA66A",
    content: (
      <p>Removes heavy metals from the body, a key factor in preventing chronic and degenerative diseases like cancer.</p>
    )
  },
  {
    title: "PROLOZONE THERAPY",
    color: "#9C27B0",
    content: (
      <p>Combines ozone with nutrients and medicines, ideal for osteoarthritis pain relief and cartilage regeneration.</p>
    )
  },
  {
    title: "PRP LYSATE THERAPY",
    color: "#9C27B0",
    content: (
      <p>Fresh cell therapy for arthritis and aesthetic care. It’s a safe, natural solution for health, beauty, and vitality.</p>
    )
  }
];

const OurServices = () => {
  const isTwoCards = servicesData.length === 2;

  return (
    <div className="w-full py-12">
      <div className="px-6 md:px-12">
        <button className="w-fit uppercase text-sm text-blue-900 font-extrabold tracking-widest px-3 py-2 rounded-md border border-gray-700 mb-3">
          OUR SERVICES
        </button>
        <h2 className="text-left text-4xl font-bold text-[#016D52] mb-10">Therapeutic Services</h2>
      </div>

      <div className={`px-6 md:px-12 grid gap-6 ${isTwoCards ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border-t-4"
            style={{ borderColor: service.color }}
          >
            <h3 className="text-lg font-bold mb-2" style={{ color: service.color }}>
              {service.title}
            </h3>
            <p className='text-black'>{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
