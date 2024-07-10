"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const horizontalLine = "h-[.1rem] flex-1 bg-color-text-1";
  return (
    <footer className={"w-full px-[5rem] md:px-[3rem] smd:px-[2.5rem]"}>
      <div className={"flex items-center justify-between"}>
        <div className={horizontalLine}></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={"text-color-text-1 font-medium text-[2rem] mx-[2rem]"}
        >
          EJIM FAVOUR
        </motion.div>
        <div className={horizontalLine}></div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
        className="text-color-light-blue text-[1.8rem] text-center"
      >
        Innovating one project at a time
      </motion.p>

      <p className={" pt-[3rem] pb-[4rem] text-center text-color-text-1 "}>
        Copyright © 2024 | All rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
