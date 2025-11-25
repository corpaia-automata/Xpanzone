import React from 'react';
import { Eye, Target } from 'lucide-react';
import FounderSection from '../Pages/FounderSection';

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-[60vh] bg-black relative flex justify-center  items-center pl-32">
        <div className='flex flex-col space-y-3 '>
          <h1 className="text-white text-5xl font-bold">
            About Us
          </h1>
        </div>
      </div>
      <div className="w-full px-6 py-16 ">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

          {/* Left: Text 1/3 */}
          <div className="md:col-span-1 text-left">
            <h2 className="text-7xl font-bold text-black mb-4">Our Story</h2>
          </div>

          {/* Right: Image or Graphic 2/3 */}
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed">
              Xpanzone began with a single, powerful question: What if your home could help you live longer, healthier, and happier—just by the way it’s built?

              Like most of us, we spent years living in environments that did little more than shelter us. These spaces were static, disconnected from our goals, and often worked against our health—bad lighting, uninspiring design, cluttered layouts, and no room for reflection or movement. It wasn’t just about aesthetics. It was about well-being.

              That’s when we realized something was missing. Spaces shouldn’t just be places to live—they should be partners in how we live. From that insight, Xpanzone was born.

              <p className='mt-3'>We imagined a future where your space actively supports your daily rhythm. A home that reminds you to stretch, encourages mindful eating, enhances your sleep cycle, and even helps you focus or unwind—naturally, and without apps or alarms.

                Rooted in the science of behavioral design, wellness architecture, and longevity research, we started crafting spaces that nudge you gently toward better habits. Not through pressure—but through presence. Adaptive lighting, movement zones, digital-free sanctuaries, and integrated nature became part of our blueprint.</p>

              <p className='mt-3'>Today, Xpanzone is more than just a design concept—it’s a movement. A vision for a new kind of living, where your environment becomes your ally. We’re building homes that don’t just look good, but live smart—designed for humans who want to feel better, live longer, and grow every day.

                Because the future of wellness begins at home.</p>
            </p>
          </div>
        </div>
      </div>

      <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 rounded-xl overflow-hidden">

        {/* Vision */}
        <div className="relative bg-yellow-300 text-white px-8 shadow-md py-12 flex flex-col justify-between rounded-xl overflow-hidden">
          <div>
            <h3 className="text-lg font-semibold text-black">Our</h3>
            <h2 className="text-4xl font-extrabold mb-4 text-black">VISION</h2>
            <p className="text-base text-black max-w-sm">
              To be the trusted wellness lifestyle provider that redefines how
              environments support long-term health, habits, and longevity.
            </p>
          </div>
          <Eye className="absolute bottom-4 right-4 w-24 h-24 text-gray-600 opacity-20" />
        </div>

        {/* Mission */}
        <div className="relative bg-gray-300 text-white px-8 py-12 flex flex-col justify-between rounded-xl overflow-hidden">
          <div>
            <h3 className="text-lg font-semibold text-black">Our</h3>
            <h2 className="text-4xl font-extrabold mb-4 text-black">MISSION</h2>
            <p className="text-base text-black max-w-sm">
              To create adaptive wellness spaces that help people live better—
              combining smart design, behavioral science, and emotional well-being
              into everyday environments that nudge healthier habits.
            </p>
          </div>
          <Target className="absolute bottom-4 right-4 w-24 h-24 text-gray-600 opacity-20" />
        </div>

      </div>
    </section>
    <div>
      <FounderSection/>
    </div>

    <section
        className="text-center py-24 px-4"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(240, 210, 120, 0.8)),
      url('/your-textured-yellow-bg.png')
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight mt-5">
          Ready to Transform Your Environment?
        </h2>
        <p className="text-lg md:text-xl text-black max-w-2xl mx-auto font-medium mb-8">
          Join thousands of people who have discovered the power of environmental design for lasting wellness.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 text-white text-sm md:text-base">
          <button className="border border-white text-white px-6 py-2 rounded-2xl bg-yellow-300 hover:text-white transition font-medium text-lg">
            Start Free Assesment
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-2xl hover:text-white transition font-medium text-lg">
            Talk to Our Team
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
