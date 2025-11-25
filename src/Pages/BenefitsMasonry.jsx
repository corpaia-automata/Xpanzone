import React from "react";
import {
  FaBrain,
  FaChartLine,
  FaBed,
  FaHeartbeat,
  FaUtensils,
  FaLeaf,
  FaClock,
  FaUserFriends,
} from "react-icons/fa";

const benefits = [
  {
    category: "Focus",
    title: "Improved Focus & Mental Clarity",
    description: "Task-specific zones minimize distractions and cognitive overload — promoting deep work.",
    icon: <FaBrain className="text-3xl text-[#20361c]" />,
    color: "bg-[#FDF6C2]",
    span: "col-span-2",
  },
  {
    category: "Productivity",
    title: "Enhanced Productivity",
    description: "Pomodoro and habit scoreboards help you build high-performance routines.",
    icon: <FaChartLine className="text-3xl text-[#20361c]" />,
    color: "bg-[#F9D5E5]",
    span: "",
  },
  {
    category: "Sleep",
    title: "Better Sleep & Recovery",
    description: "Sleep Mode tunes lighting, sound, and temperature for optimal rest.",
    icon: <FaBed className="text-3xl text-[#20361c]" />,
    color: "bg-[#D0E6A5]",
    span: "",
  },
  {
    category: "Wellness",
    title: "Daily Wellness Built-In",
    description: "Integrated fitness and relaxation ensure you move and rest daily — naturally.",
    icon: <FaHeartbeat className="text-3xl text-[#20361c]" />,
    color: "bg-[#FFDAC1]",
    span: "",
  },
  {
    category: "Nutrition",
    title: "Mindful Eating Habits",
    description: "Dining mode creates distraction-free meals with smart reminders and guided breathing.",
    icon: <FaUtensils className="text-3xl text-[#20361c]" />,
    color: "bg-[#B5EAD7]",
    span: "col-span-2",
  },
  {
    category: "Habits",
    title: "Stronger Habit Formation",
    description: "Environment design based on Atomic Habits. Cues. Visibility. Simplicity.",
    icon: <FaLeaf className="text-3xl text-[#20361c]" />,
    color: "bg-[#E2F0CB]",
    span: "",
  },
  {
    category: "Time",
    title: "Effective Time Management",
    description: "Time-blocking and screen prompts guide your day from start to finish.",
    icon: <FaClock className="text-3xl text-[#20361c]" />,
    color: "bg-[#C7CEEA]",
    span: "",
  },
  {
    category: "Balance",
    title: "Emotional & Psychological Balance",
    description: "Mindscape mode supports journaling, reflection, and emotional check-ins.",
    icon: <FaUserFriends className="text-3xl text-[#20361c]" />,
    color: "bg-[#FFD6D6]",
    span: "",
  },
  {
    category: "Social",
    title: "Healthier Social Interactions",
    description: "Social Mode encourages real conversations, digital boundaries, and connection.",
    icon: <FaUserFriends className="text-3xl text-[#20361c]" />,
    color: "bg-[#E2ECE9]",
    span: "",
  },
  {
    category: "Mindfulness",
    title: "Mindscape Mode for Awareness",
    description: "A quiet zone for thinking, journaling, and regulation — away from noise.",
    icon: <FaBrain className="text-3xl text-[#20361c]" />,
    color: "bg-[#FFF1C1]",
    span: "",
  },
];

export const BenefitsMasonry = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 px-2">
          <h2 className="text-3xl md:text-5xl font-bold text-[#20361c] leading-tight md:leading-snug">
            Where Smart Living Meets Sustainable Success
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium mt-4 max-w-3xl mx-auto leading-relaxed">
            With integrated routines and personalized spaces, Xpanzone helps you optimize every part of your day—leading to smarter work, better health, and a more intentional life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(200px,auto)]">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} rounded-2xl shadow-md hover:shadow-xl transition-all p-4 md:p-6 flex flex-col justify-between ${item.span ? "lg:" + item.span : ""
                }`}
            >
              <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wide">{item.category}</div>
              <div className="flex items-start gap-3 md:gap-4 mt-2">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#20361c]">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-800 mt-2 leading-snug">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



// import React from "react";
// import {
//   FaBrain,
//   FaChartLine,
//   FaBed,
//   FaHeartbeat,
//   FaUtensils,
//   FaLeaf,
//   FaClock,
//   FaUserFriends,
// } from "react-icons/fa";

// const benefits = [
//   {
//     category: "Focus",
//     title: "Improved Focus & Mental Clarity",
//     description: "Task-specific zones minimize distractions and cognitive overload — promoting deep work.",
//     icon: <FaBrain className="text-3xl text-[#20361c]" />,
//     color: "bg-[#FDF6C2]",
//     span: "col-span-2",
//   },
//   {
//     category: "Productivity",
//     title: "Enhanced Productivity",
//     description: "Pomodoro and habit scoreboards help you build high-performance routines.",
//     icon: <FaChartLine className="text-3xl text-[#20361c]" />,
//     color: "bg-[#F9D5E5]",
//     span: "",
//   },
//   {
//     category: "Sleep",
//     title: "Better Sleep & Recovery",
//     description: "Sleep Mode tunes lighting, sound, and temperature for optimal rest.",
//     icon: <FaBed className="text-3xl text-[#20361c]" />,
//     color: "bg-[#D0E6A5]",
//     span: "",
//   },
//   {
//     category: "Wellness",
//     title: "Daily Wellness Built-In",
//     description: "Integrated fitness and relaxation ensure you move and rest daily — naturally.",
//     icon: <FaHeartbeat className="text-3xl text-[#20361c]" />,
//     color: "bg-[#FFDAC1]",
//     span: "",
//   },
//   {
//     category: "Nutrition",
//     title: "Mindful Eating Habits",
//     description: "Dining mode creates distraction-free meals with smart reminders and guided breathing.",
//     icon: <FaUtensils className="text-3xl text-[#20361c]" />,
//     color: "bg-[#B5EAD7]",
//     span: "col-span-2",
//   },
//   {
//     category: "Habits",
//     title: "Stronger Habit Formation",
//     description: "Environment design based on Atomic Habits. Cues. Visibility. Simplicity.",
//     icon: <FaLeaf className="text-3xl text-[#20361c]" />,
//     color: "bg-[#E2F0CB]",
//     span: "",
//   },
//   {
//     category: "Time",
//     title: "Effective Time Management",
//     description: "Time-blocking and screen prompts guide your day from start to finish.",
//     icon: <FaClock className="text-3xl text-[#20361c]" />,
//     color: "bg-[#C7CEEA]",
//     span: "",
//   },
//   {
//     category: "Balance",
//     title: "Emotional & Psychological Balance",
//     description: "Mindscape mode supports journaling, reflection, and emotional check-ins.",
//     icon: <FaUserFriends className="text-3xl text-[#20361c]" />,
//     color: "bg-[#FFD6D6]",
//     span: "",
//   },
//   {
//     category: "Social",
//     title: "Healthier Social Interactions",
//     description: "Social Mode encourages real conversations, digital boundaries, and connection.",
//     icon: <FaUserFriends className="text-3xl text-[#20361c]" />,
//     color: "bg-[#E2ECE9]",
//     span: "",
//   },
//   {
//     category: "Mindfulness",
//     title: "Mindscape Mode for Awareness",
//     description: "A quiet zone for thinking, journaling, and regulation — away from noise.",
//     icon: <FaBrain className="text-3xl text-[#20361c]" />,
//     color: "bg-[#FFF1C1]",
//     span: "",
//   },
// ];

// export const BenefitsMasonry = () => {
//   return (
//     <section className="py-16 md:py-24 px-4 md:px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 md:mb-16 px-2">
//           <h2 className="text-3xl md:text-5xl font-bold text-[#20361c] leading-tight md:leading-snug">
//             Where Smart Living Meets Sustainable Success
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 font-medium mt-4 max-w-3xl mx-auto leading-relaxed">
//             With integrated routines and personalized spaces, Xpanzone helps you optimize every part of your day—leading to smarter work, better health, and a more intentional life.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(200px,auto)]">
//           {benefits.map((item, idx) => (
//             <div
//               key={idx}
//               className={`${item.color} rounded-2xl shadow-md hover:shadow-xl transition-all p-4 md:p-6 flex flex-col justify-between ${item.span}`}
//             >
//               <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wide">{item.category}</div>
//               <div className="flex items-start gap-3 md:gap-4 mt-2">
//                 <div className="flex-shrink-0">{item.icon}</div>
//                 <div>
//                   <h3 className="text-base md:text-lg font-semibold text-[#20361c]">{item.title}</h3>
//                   <p className="text-sm md:text-base text-gray-800 mt-2 leading-snug">{item.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };