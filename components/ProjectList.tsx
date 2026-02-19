"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectsData from "@/data";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectList = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
  };

  const projectsList = ProjectsData.map((item, i) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: i / 10 }}
      viewport={{ once: false }}
      key={item.id}
      className={
        "w-[40rem] border border-gradient mb-[4rem] text-color-text-1 text-center pb-[4rem] flex flex-col justify-start mr-[2rem] xmd:mr-0 xmd:w-[80%] smd-[90%] sm:w-full"
      }
    >
      <div className="w-full">
        <Slider {...settings}>
          {item.imgs.map((img, i) => (
            <div className={""} key={i}>
              <Image
                src={img}
                alt={item.title}
                priority
                width={800}
                height={800}
                className="w-full h-[30rem] object-contain "
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="p-[1rem] flex flex-col items-center my-[2rem]">
        <h3 className="text-color-light-blue text-[2rem] font-medium ">
          {item.title}
        </h3>
        <p className={"text-[1.8rem] my-[1rem]"}>{item.text}</p>
        <div className={"flex flex-col items-center"}>
          <p className={"text-color-light-blue font-medium"}>STACK</p>
          <div className={" flex mt-[1.5rem] flex-wrap justify-center"}>
            {item.techs.map((tech, i) => (
              <p
                key={i}
                className="mr-[2rem] last:mr-0 text-color-light-blue border-gradient border p-[1rem] mb-[1.5rem]"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-auto ">
        {item.visit && (
          <a
            href={item.visit}
            target="#blank"
            className="bg-color-light-blue text-color-white px-[1rem] py-[.5rem] rounded-md duration-200 transition-all ease-in hover:text-color-light-blue hover:bg-color-white"
          >
            Visit
          </a>
        )}
        {item.source ? (
          <a
            href={item.source}
            className="bg-color-light-blue px-[1rem] py-[.5rem] text-color-white rounded-md  duration-200 transition-all ease-in hover:text-color-light-blue hover:bg-color-white"
          >
            Source
          </a>
        ) : (
          <p className="px-[1rem] py-[.5rem] border border-color-light-blue rounded-md text-color-white">
            Private Repository
          </p>
        )}
      </div>
    </motion.div>
  ));

  return (
    <div className="flex flex-wrap justify-between mt-[4rem] xmd:justify-center">
      {projectsList}
    </div>
  );
};

export default ProjectList;
