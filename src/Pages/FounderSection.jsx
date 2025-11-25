import { useState } from "react";
import React from "react";

export default function TeamSection() {
  const [selected, setSelected] = useState("saleeque");

  const people = {
    huzain: {
      name: "Dr. Muhammed Huzain KM",
      role: "Founder",
      img: "/huzain.jpg",
      title: "About Dr. Muhammed Huzain KM",
      bio: `Dr. Muhammed Huzain KM is a visionary dedicated to advancing human longevity by integrating wellness science with technology-enabled environmental design. His mission centers on creating adaptive spaces that naturally promote long-term healthy living by harmonizing behavior, environment, and intelligent systems. With a deep passion for habitual longevity, he works to redefine how people interact with their surroundings, ensuring technology supports well-being rather than disrupts it. His expertise spans lifestyle engineering, environmental psychology, and tech-driven wellness innovation, empowering individuals and communities to live healthier, more balanced, and resilient lives through thoughtfully crafted, future-aligned environments.`,
    },
    saleeque: {
      name: "Mr. SALEEQUE MP",
      role: "Co-Founder",
      img: "/saleeque.png",
      title: "About SALEEQUE MP",
      bio: `Saleeque MP is a deep-tech strategist and AI architect with a rich, cross-industry background spanning edtech, medtech, agritech, and buildtech. With over 15 years of innovation leadership, he has designed and deployed intelligent systems built on AI agents, robotics, digital twins, and immersive metaverse technologies. His work blends scientific research with practical engineering, enabling organizations to adopt scalable automation and future-ready digital ecosystems. As a digital health architect and technology consultant, he specializes in solving high-complexity problems through structured thinking, systems engineering, and applied intelligence. His mission is to transform industries by building advanced AI-driven platforms that create lasting impact.`,
    },
  };

  const person = people[selected];

  return (
    <div className="bg-black text-white px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Meet the Founders
          </h1> 
        </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE — TWO CARDS IN ONE ROW */}
        <div className="grid grid-cols-2 gap-6">
          {Object.entries(people).map(([key, p]) => (
            <div
              key={key}
              onClick={() => setSelected(key)}
              className={`rounded-xl overflow-hidden cursor-pointer transition-all 
                ${selected === key ? "ring-2 ring-white" : "ring-1 ring-white"}`}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[350px] object-cover"
              />
              <div className="p-4 bg-black/70">
                <h2 className="text-lg font-bold">{p.name}</h2>
                <p className="text-gray-400">{p.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">
            {person.title}
          </h2>

          <p className="text-gray-300 leading-8 text-xl">
            {person.bio}
          </p>
        </div>

        

      </div>
    </div>
  );
}
