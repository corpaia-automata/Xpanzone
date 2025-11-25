import React from "react";
import { motion } from "framer-motion";

export const ScrollCue = () => {
  return (
    <div className="flex flex-col items-center mt-[-8rem] relative z-10">
      <p className="text-white text-lg md:text-xl font-serif mb-4">
        Step into a world of wellness
      </p>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-14 h-14 rounded-full border-2 border-dotted border-white flex items-center justify-center"
      >
        <motion.span
          animate={{
            y: [0, 8, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-white text-xl"
        >
          ↓
        </motion.span>
      </motion.div>
    </div>
  );
};
