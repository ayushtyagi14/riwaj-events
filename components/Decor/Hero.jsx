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
          image="/decor-banner.jpg"
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
          Wedding Decor
        </h1>
        <p className="font-medium lg:block hidden lg:text-[18px] xl:text-[22px] md:text-center italic w-[80%] mx-auto">
          Our design team uses a variety of techniques to create a wedding
          stage. We cater the overall design and feel of the stage to the
          preferences of our Bride and Groom by using elements such as draping,
          framing, and floral work. Each stage and color profile is selected
          with an emphasis on making sure that the Bride and Groom remain the
          focal point of the guests. From the second your guests enter the
          venue, they will find themselves drawn to, and mesmerized by the
          intricate beauty that will showcase the two most important people in
          the room.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
