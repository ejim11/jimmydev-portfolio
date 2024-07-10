"use client";
import React from "react";
import Card from "./Card";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      id="contactMe"
      className="w-full mb-[5rem] "
    >
      <Card heading={"Contact Me"}>
        <div className="bg-color-text-1 w-[50%] mx-auto p-[5rem] mt-[3rem] border-gradient border-[0.2rem]">
          <ContactForm />
        </div>
      </Card>
    </motion.div>
  );
};

export default ContactMe;
