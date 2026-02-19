"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const Card: React.FC<{
  children: ReactNode;

  heading: string;
  text?: string;
  style?: string;
  container?: string;
}> = ({ style, heading, text, children, container }) => {
  return (
    <div className={`flex flex-col items-center w-full  `} id="projects">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        className={
          "w-[12rem] h-[.1rem] my-[1rem] bg-gradient-to-r from-[#13adc7] to-[#945dd6]"
        }
        viewport={{ once: false }}
      ></motion.div>
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        viewport={{ once: false }}
        className="text-gradient text-[4rem] capitalize"
      >
        {heading}
      </motion.h2>
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ once: false }}
          className={style}
        >
          {text}
        </motion.p>
      )}
      <div className={`w-full ${container}`}>{children}</div>
    </div>
  );
};

export default Card;
