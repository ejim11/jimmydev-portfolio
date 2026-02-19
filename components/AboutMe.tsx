/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      className="w-[45%] text-color-text-1 text-[1.8rem] text-justify py-[3rem] xlg:w-[48%] md:w-full md:flex md:flex-col md:items-center"
      id="about"
    >
      <Card
        heading={"About me"}
        container="md:flex md:flex-col md:items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          viewport={{ once: false }}
          className="my-[1rem]"
        >
          Throughout my journey as an engineer, I have had the privilege of
          collaborating with seasoned designers and engineers who have
          significantly elevated my expectations and standards for the quality
          and functionality of any application.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
          viewport={{ once: false }}
        >
          These experiences have afforded me the opportunity to craft remarkable
          products that are not only delightful to use but also embody
          maintainable and comprehensible code, ensuring their longevity and
          ease of enhancement.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
          viewport={{ once: false }}
          className="mt-[2rem] flex items-center md:mx-auto"
        >
          <a
            href={
              "https://drive.google.com/file/d/1Ln113ckitcjdBQog9C6K0T2e4xYidcR4/view?usp=sharing"
            }
            target="blank"
            download
            className="block text-color-light-blue py-[.5rem] px-[1.5rem] border border-gradient  rounded-md hover:bg-color-light-blue hover:text-color-white transition-all duration-200 ease-in"
          >
            Download CV
          </a>
        </motion.p>
      </Card>
    </div>
  );
};

export default AboutMe;
