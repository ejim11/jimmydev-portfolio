"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { AppCtx } from "@/appContext";

const MediaLinks = () => {
  const ctx = useContext(AppCtx);
  const iconStyle = `text-color-white w-[2.5rem] h-[2.5rem] ml-[2rem] ${
    ctx?.headerStick ? "hover:text-bg-color" : "hover:text-color-light-blue"
  }  transition-all duration-200 ease-in`;
  return (
    <>
      <a href="https://github.com/ejim11" target="blank">
        <FaGithub className={iconStyle} />
      </a>
      <a href="https://twitter.com/favourejim56" target="blank">
        <FaTwitter className={iconStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/favour-ejim-a29967238/"
        target="blank"
      >
        <FaLinkedin className={iconStyle} />
      </a>
    </>
  );
};

export default MediaLinks;
