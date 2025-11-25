import React from 'react';

const Modes = () => {
  return (
    <div className=" py-16 px-4 font-sans">
      <div className="w-10/12 mx-auto">
        {/* Section Header */}
        <div className="text-start mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Transformable Spaces for Every Mode of Living</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Your environment should evolve with your needs. XPANZONE’s intelligent design adapts to seven core human modes — from productivity and focus to rest, play, and connection.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 no-scrollbar scroll-hidden">
          {/* Sticky Sidebar */}
          <div className="lg:w-1/2  sticky top-24 self-start">
            <h2 className="text-6xl font-bold text-blue-900 mb-2 font-sans" style={{ fontFamily: 'Manrope, sans-serif' }}>The</h2>
            <h2 className="text-8xl font-bold text-blue-900 mb-2 font-sans" style={{ fontFamily: 'Manrope, sans-serif' }}>Seven</h2>
            <h2 className="text-8xl font-bold text-blue-900 mb-2 font-sans" style={{ fontFamily: 'Manrope, sans-serif' }}>Modes</h2>
          </div>


          {/* Scrollable Content */}
          <div className="lg:w-3/4 max-h-[40vh] overflow-y-auto pr-4 space-y-2">
            <div className='bg-white p-6 rounded-md' id="mode-work">
              <h3 className="text-4xl font-semibold text-red-800 mb-3"> Work</h3>
              <p className="text-gray-700">The Work mode is about productivity and focus. XPANZONE's ergonomic layouts, acoustic zoning, and smart lighting systems are designed to boost your output while reducing stress.</p>
            </div>

            <div className='bg-white p-6 rounded-md' id="mode-sleep">
              <h3 className="text-4xl font-semibold text-blue-600 mb-3"> Sleep</h3>
              <p className="text-gray-700">Quality sleep is essential for longevity. Our soundproofing, blue-light blockers, and ambient sleep lighting help improve your rest and recovery.</p>
            </div>

            <div className='bg-white p-6 rounded-md' id="mode-fitness">
              <h3 className="text-4xl font-semibold text-green-600 mb-3"> Fitness / Relaxation</h3>
              <p className="text-gray-700">Our design supports daily physical activity and mindfulness by offering space-efficient workout areas and zen-like relaxation nooks.</p>
            </div>

            <div className='bg-white p-6 rounded-md' id="mode-entertainment">
              <h3 className="text-4xl font-semibold text-yellow-500 mb-3"> Entertainment</h3>
              <p className="text-gray-700">Entertainment zones are tailored with immersive sound and mood lighting, helping you unwind and enjoy time with others or solo.</p>
            </div>

            <div className='bg-white p-6 rounded-md' id="mode-focus">
              <h3 className="text-4xl font-semibold text-brown-700 mb-3"> Focus / Mindscape</h3>
              <p className="text-gray-700">Enhance deep thinking and creative flow with minimal-distraction zones, surrounded by biophilic design and calming colors.</p>
            </div>

            <div className='bg-white p-6 rounded-md' id="mode-social">
              <h3 className="text-4xl font-semibold text-green-800 mb-3"> Social</h3>
              <p className="text-gray-700">Our layouts encourage organic connection — whether family dinners, friendly chats, or collaborative work, the design makes space for relationships to grow.</p>
            </div>

            <div className='bg-white p-6 rounded-md' id="mode-relax">
              <h3 className="text-4xl font-semibold text-sky-600 mb-3"> Recharge / Relaxation</h3>
              <p className="text-gray-700">Recharge with micro-moments of peace. Soft furnishings, natural light, and cozy corners create restorative experiences throughout your day.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modes;



import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Moon,
  Activity,
  Brain,
  Utensils,
  Users,
  Sun,
  Repeat
} from "lucide-react";

const modes = [
  {
    icon: <Moon className="text-green-800 w-8 h-8" />,
    title: "Restorative Sleep",
    description: "Sleep-enhancing environments designed for rest and recovery."
  },
  {
    icon: <Activity className="text-green-800 w-8 h-8" />,
    title: "Daily Movement",
    description: "Spaces that invite physical activity and flow."
  },
  {
    icon: <Brain className="text-green-800 w-8 h-8" />,
    title: "Mental Clarity",
    description: "Calm-inducing design to improve focus and reduce stress."
  },
  {
    icon: <Utensils className="text-green-800 w-8 h-8" />,
    title: "Nutritive Living",
    description: "Kitchens and dining spaces that encourage healthy eating."
  },
  {
    icon: <Users className="text-green-800 w-8 h-8" />,
    title: "Social Connection",
    description: "Layouts that foster togetherness and community."
  },
  {
    icon: <Sun className="text-green-800 w-8 h-8" />,
    title: "Natural Light & Airflow",
    description: "Maximized daylight and ventilation for energy and mood."
  },
  {
    icon: <Repeat className="text-green-800 w-8 h-8" />,
    title: "Behavioral Nudges & Habit Design",
    description: "Smart spatial cues that support positive habits."
  }
];

export default function SevenModesSection() {
  return (
    <section className="bg-[#dde7d0] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#20361c] mb-4">
          Your Environment, Tuned for Total Wellness
        </h2>
        <p className="text-[#3d5c3a] text-lg">
          We design with seven modes of well-being in mind:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {modes.map((mode, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="h-full"
          >
            <Card className="bg-[#dce3cf] shadow-lg rounded-2xl p-6 h-full">
              <CardContent className="flex flex-col items-start space-y-4">
                {mode.icon}
                <h3 className="text-xl font-semibold text-[#20361c]">
                  {mode.title}
                </h3>
                <p className="text-[#3d5c3a] text-sm">
                  {mode.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
