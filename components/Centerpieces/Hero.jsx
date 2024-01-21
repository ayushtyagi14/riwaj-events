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
          image="/centerpiece-banner.jpg"
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
          Centerpieces
        </h1>
        <p className="font-medium lg:block hidden lg:text-[18px] xl:text-[22px] md:text-center italic w-[80%] mx-auto">
          Our centerpieces are catered to a variety of styles and tastes from
          contemporary pieces to more traditional styles. We specialize in
          floral centerpieces as well as centerpieces with south asian and
          middle eastern influences. All of our centerpieces are designed to
          complement your stage as well as stand on their own. Don&apos;t find
          what you like? No worries! Our design team can craft the perfect
          centerpiece for your tables using your input and our knowledge!
          Nevertheless, your guests will be left in awe at the intricate details
          and beauty that will be present at every table on your special day!
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
