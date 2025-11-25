import React from "react";
import { Lightbulb, Clock, Repeat, Goal, Layers3 } from "lucide-react";

const principles = [
  {
    icon: <Layers3 size={32} />,
    title: "5S Methodology",
    desc: "Decluttered, intentional layouts driven by Sort, Set in order, Shine, Standardize, and Sustain — making spaces clean and efficient."
  },
  {
    icon: <Repeat size={32} />,
    title: "Atomic Habits",
    desc: "Habit loop design built around cues, simplicity, visibility, and rewards. Xpanzone encourages positive routines that stick."
  },
  {
    icon: <Goal size={32} />,
    title: "12-Week Year System",
    desc: "Focus mode zones are optimized for short, intense productivity sprints — using 12WY to align goals and execution."
  },
  {
    icon: <Clock size={32} />,
    title: "Circadian Rhythm Science",
    desc: "Smart lighting, airflow, and noise levels follow your natural energy cycles — improving your sleep, alertness, and mood."
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Behavioral Design Thinking",
    desc: "Environmental cues and subtle nudges based on behavioral psychology help guide your actions — without friction."
  }
];

const DesignPhilosophy = () => (
  <section className="bg-[#f5f7f1] text-[#20361c] py-20 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Backed by Science. <span className="text-[#3d5c3a]">Built for Life.</span>
      </h2>
      <p className="text-lg text-[#3d5c3a]/80 max-w-2xl mx-auto mb-16">
        Every inch of Xpanzone is shaped by systems that work — rooted in neuroscience, behavior design, and goal architecture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        {principles.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 text-[#3d5c3a]">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#20361c] mb-2">{item.title}</h3>
            <p className="text-[#20361c]/80 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DesignPhilosophy;
