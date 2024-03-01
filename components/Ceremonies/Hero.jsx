import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import BlurImage from "../BlurImage";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10 opacity-[85%]">
        <Navbar />
      </div>
      <div className="lg:h-[98vh] md:h-[75vh] h-[55vh]">
        <BlurImage
          image="https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332853/public/ceremonies-banner_zlknak.jpg"
          className={"brightness-[70%] object-cover rounded-b-[8%]"}
        />
      </div>
      <motion.div
        variants={slideIn("up", "tween", 0.5, 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute flex flex-col items-center top-[40%] left-[30%] lg:left-0 gap-[3rem] lg:top-[20%] xl:top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10"
      >
        <h1 className="lg:text-[100px] 2xl:text-[120px] md:text-[70px] text-[36px] mt-20 font-vibes leading-none">
          Ceremonies
        </h1>
        <p className="font-medium lg:block hidden lg:text-[18px] xl:text-[22px] md:text-center italic w-[80%] mx-auto">
          South Asian weddings are a tapestry of cultural diversity, with Nikah
          symbolizing Islamic unions through Quranic verses and a joyous Walima
          feast. Hindu weddings weave vibrant threads of pre-wedding rituals
          like Mehendi and Sangeet, leading to a sacred fire ceremony where vows
          are exchanged. Sikh weddings, or Anand Karaj, take place in
          Gurudwaras, emphasizing spiritual unity through hymns from the Guru
          Granth Sahib, followed by a communal Langar. Each ceremony reflects
          the region&apos;s richness, blending religious traditions, cultural
          practices, and familial celebrations.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
