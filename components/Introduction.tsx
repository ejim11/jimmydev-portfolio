/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext } from "react";
import SvgAnimation from "./SVGAnimation";
import { motion } from "framer-motion";
import { AppCtx } from "@/appContext";

const Introduction = () => {
  const ctx = useContext(AppCtx);

  const leaveViewportHandler = () => {
    ctx?.setHeaderStick(true);
  };

  const enterViewportHandler = () => {
    ctx?.setHeaderStick(false);
  };
  return (
    <motion.section
      onViewportLeave={leaveViewportHandler}
      onViewportEnter={enterViewportHandler}
      viewport={{ margin: "0px 0px 0px 0px" }}
      className="flex justify-between items-center py-[5rem]"
    >
      <div className="w-[45%] flex flex-col items-start">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className={" text-color-light-blue text-[2rem] "}
        >
          Hello, I am
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
          className={"text-color-white text-[4rem] my-[1rem]"}
        >
          EJIM
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
          className="text-gradient  text-[6rem]"
        >
          Software Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "30" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.3 }}
          className={"text-[hsla(0,0%,100%,.5)] text-[1.8rem] my-[1rem]"}
        >
          I create exquisite creations with a fervent passion for software
          engineering and its practical applications. With an eye for detail, I
          excel in designing intricate web applications featuring sophisticated
          user interfaces. My dedication ensures each project is not only
          functional but also beautifully refined.
        </motion.p>
      </div>
      <div className="w-[45%]">
        <SvgAnimation />
      </div>
    </motion.section>
  );
};

export default Introduction;