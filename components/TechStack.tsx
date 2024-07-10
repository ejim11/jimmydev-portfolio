import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const TechStack = () => {
  const stacks: string[] = [
    "Html/Css",
    "Scss",
    "tailwind css",
    "Javascript",
    "Typescript",
    "React Js",
    "Next Js",
    "Node Js",
    "React Native",
    "Flutter",
    "Solidity",
    "Firebase",
  ];
  return (
    <div
      className="w-[45%] text-color-text-1 text-[1.8rem] text-justify py-[3rem] md:w-full"
      id="technologies"
    >
      <Card heading={"Tech Stack"}>
        <div className="flex flex-wrap mt-[2rem] md:justify-center">
          {stacks.map((stack: string, i) => (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: i / 10 }}
              viewport={{ once: false }}
              key={stack}
              className="mr-[2rem] px-[1.5rem] py-[.5rem] mb-[2rem] text-transparent border rounded-md border-gradient capitalize"
            >
              {stack}
            </motion.p>
          ))}
        </div>
        <p></p>
      </Card>
    </div>
  );
};

export default TechStack;
