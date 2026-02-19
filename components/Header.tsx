"use client";
// import { HashLink as Link } from "react-router-hash-link";
import React from "react";
import MediaLinks from "./MediaLinks";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useState, FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import profileImg from "../assets/ejim.jpg";
import { useContext } from "react";
import { AppCtx } from "@/appContext";

const Header: FC = () => {
  const mediaLinks: { title: string; link: string }[] = [
    {
      title: "about",
      link: "#about",
    },
    {
      title: "stack",
      link: "#technologies",
    },
    {
      title: "projects",
      link: "#project",
    },
    {
      title: "contact me",
      link: "#contactMe",
    },
  ];

  const ctx = useContext(AppCtx);

  const [menuVisible, setMenuVisible] = useState(false);

  const displayMenuHandler = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const list: any = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const item: any = {
    hide: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: "easeIn" },
  };

  return (
    <header
      className={`flex items-center px-[6rem] smd:px-[2.5rem] h-[8rem] z-30  ${
        ctx?.headerStick
          ? "bg-color-light-blue fixed top-0 right-0 left-0 opacity-90 smd:opacity-100"
          : "bg-color-transparent "
      } transition-all duration-200 ease-in `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="rounded-full border border-color-white w-[3rem] h-[3rem] flex items-center justify-center border-color-text mr-[1rem] "
      >
        <Image
          src={profileImg}
          alt="profile-img"
          priority
          width={200}
          height={200}
          className="w-[2rem] h-[2rem] rounded-full"
        />
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={"text-[2.5rem] text-color-white"}
        href="#"
      >
        EJIM
      </motion.a>
      <nav
        onClick={displayMenuHandler}
        className={`${
          menuVisible
            ? " flex smd:translate-x-0 smd:opacity-100"
            : "smd:opacity-0 smd:-translate-x-[100%]  flex"
        }  items-center ml-[3rem] flex-1 smd:fixed smd:top-0 smd:left-0 smd:right-0 smd:bottom-0 smd:bg-color-black-trans  smd:ml-0 smd:z-50 smd:items-stretch transition-all duration-200 ease-in-out `}
      >
        <motion.ul
          variants={list}
          initial={"hide"}
          animate={"show"}
          className="flex flex-1  items-center smd:flex-col smd:bg-color-light-blue smd:flex-[0.75] smd:py-[3rem] smd:items-start "
        >
          {mediaLinks.map((link: { title: string; link: string }) => (
            <motion.li
              key={link.title}
              variants={item}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={link.link}
                className={`text-color-white capitalize mr-[2rem] text-[1.8rem] smd:px-[2rem] smd:mr-0 smd:py-[1rem] smd:block ${
                  ctx?.headerStick
                    ? "hover:text-bg-color smd:hover:text-color-white"
                    : "hover:text-color-light-blue smd:hover:text-color-white"
                }  transition-all duration-200 ease-in`}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
          <div
            className={
              "ml-auto flex  items-center  smd:ml-0  smd:pb-[3rem] smd:mt-auto"
            }
          >
            <MediaLinks />
          </div>
        </motion.ul>
        {menuVisible && (
          <FaTimes
            className={
              "hidden smd:flex text-color-white ml-auto w-[2.8rem] h-[2.8rem] mt-[2rem] mr-[2rem] "
            }
          />
        )}
      </nav>
      {!menuVisible && (
        <HiOutlineMenuAlt2
          onClick={displayMenuHandler}
          className={
            "hidden smd:flex text-color-white ml-auto w-[2.8rem] h-[2.8rem]"
          }
        />
      )}
    </header>
  );
};

export default Header;
