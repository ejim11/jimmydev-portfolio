"use client";
import React from "react";
import Card from "./Card";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <div className="w-full flex items-center flex-col my-[5rem]" id="project">
      <Card
        heading={"Projects"}
        text={
          "I have developed projects that merge functionality with elegance, showcasing innovative solutions, maintainable code, and user-centric design for enduring, delightful products."
        }
        style="text-color-text-1 text-center w-[90%] smd:w-full text-[1.8rem] "
      >
        <ProjectList />
      </Card>
    </div>
  );
};

export default Projects;
