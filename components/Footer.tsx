"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const horizontalLine = "h-[.1rem] w-[40%] bg-color-text-1";
  return (
    <footer className={"w-full px-[5rem]"}>
      <div className={"flex items-center justify-between"}>
        <div className={horizontalLine}></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={"text-color-text-1 font-medium text-[2rem]"}
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

      <p className={" py-[3rem] text-center text-color-text-1 "}>
        Copyright © 2022 | All rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
