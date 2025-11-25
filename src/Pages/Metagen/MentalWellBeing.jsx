import React from 'react';
import { FaUsers, FaChild, FaHeart, FaBrain, FaVenusMars, FaBalanceScale, FaUserShield, FaSmile, FaHeartbeat } from 'react-icons/fa';

const mentalServices = [
  {
    icon: <FaUsers />,
    title: 'Family and Couple Counselling',
    desc: 'Emotional & relationship issues, focus on self-life skills, anger management, commitment, and marital problems.',
    className: 'row-span-2'
  },
  {
    icon: <FaBalanceScale />,
    title: 'Premarital Counselling',
    desc: 'Mutual responsibility, shared personal growth, parenting and finances.',
  },
  {
    icon: <FaBrain />,
    title: 'Anxiety & Stress Management',
    desc: 'Effective management techniques to reduce daily stressors.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Women Mental Health Services',
    desc: 'Support for domestic violence, postpartum, anxiety, depression & more.',
    className: 'row-span-2'
  },
  {
    icon: <FaChild />,
    title: 'Child and Adolescent Counselling',
    desc: 'Handling exam fear, anxiety, and emotional challenges in young minds.',
  },
  {
    icon: <FaUserShield />,
    title: 'Geriatric Counselling',
    desc: 'Care for elderly and improved quality of life through mental support.',
  },
  {
    icon: <FaVenusMars />,
    title: 'Sex Therapy',
    desc: 'Educating individuals about sexuality, reproductive health and relationships.',
  },
  {
    icon: <FaHeart />,
    title: 'Fertility Counselling',
    desc: 'Support for decision-making and emotional support throughout fertility journey.',
  },
  {
    icon: <FaBrain />,
    title: 'Anger Management',
    desc: 'Reframing perspectives to manage anger more effectively.',
  },
];

const MentalWellBeing = () => {
  return (
    <div className=" py-16 px-6 md:px-12">
      <button className="w-fit uppercase text-sm text-blue-900 font-extrabold tracking-widest px-3 py-2 rounded-md border border-gray-700 mb-3">
        OUR COUNSELLING
      </button>
      <h2 className="text-4xl font-bold text-left text-[#016D52] mb-12">Mental Well Being</h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-3">
        {mentalServices.map((service, idx) => (
          <div
            key={idx}
            className={`bg-white flex gap-3 rounded-xl shadow-lg p-4 break-inside-avoid border-t-4 border-[#1B88E5] ${service.className || ''}`}
          >
            <div className="text-3xl text-[#1B88E5] mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#1B88E5] ">{service.title}</h3>
            {/* <p className="text-gray-700">{service.desc}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentalWellBeing;
