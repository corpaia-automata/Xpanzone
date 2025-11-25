import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Xpanzone?",
    answer:
      "Xpanzone is a wellness innovation platform focused on designing environments that actively support your long-term well-being. We specialize in creating adaptive spaces that promote better habits across seven modes of wellness—like sleep, movement, nutrition, and more.",
  },
  {
    question: "What does Habitual Longevity mean?",
    answer:
      "Habitual longevity is the idea that small, sustainable daily actions—reinforced by your environment—can greatly improve your lifespan and quality of life. Our designs make the healthy choice the easy choice through subtle nudges and smart layouts.",
  },
  {
    question: "Can I customize which wellness modes my space supports?",
    answer:
      "Absolutely. During the Discovery phase, we work with you to understand which modes—like sleep, social connection, nutrition, or movement—are most important to you. Your space is then customized to emphasize those priorities.",
  },
  {
    question: "How is Xpanzone different from traditional architecture or interior design firms?",
    answer:
      "While traditional firms focus mainly on aesthetics and structure, Xpanzone designs for behavior. We integrate habit psychology, environmental cues, and wellness science into every aspect of your space—ensuring it supports how you want to live, every single day.",
  },
  {
    question: "What makes an adaptive space?",
    answer:
      "An adaptive space evolves with your lifestyle. It includes smart layouts, flexible furniture, lighting, airflow, and environmental nudges—all aligned to enhance your daily routine, not interrupt it.",
  }
];

// bg-[#dde7d0]

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto py-16 text-black ">
      <div className="max-w-7xl px-6 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 w-full">
          {/* Left Section */}
          <div className="md:col-span-2">
            <h1 className="text-5xl font-semibold font-sans text-black">
              Frequently <span className="text-yellow-500">Asked</span> Questions
            </h1>
            <p className="text-lg text-black mt-4">
              We’ve answered the most common questions. If you need more details, feel free to reach out!
            </p>
          </div>

          {/* Right Section (FAQ Accordion) */}
          <div className="md:col-span-3 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#c4d1b5]"
              >
                <button
                  className="flex justify-between items-center w-full p-6 transition-all text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-xl text-black font-semibold">{faq.question}</span>
                  <span className="text-2xl text-black font-bold">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-black">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
