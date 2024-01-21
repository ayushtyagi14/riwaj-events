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
          image="/event-banner.jpg"
          className={"brightness-[70%] object-cover rounded-b-[8%]"}
        />
      </div>
      <motion.div
        variants={slideIn("up", "tween", 0.5, 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute flex flex-col items-center top-[40%] left-[2%] lg:left-0 gap-[4rem] lg:top-[20%] xl:top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10"
      >
        <h1 className="lg:text-[100px] 2xl:text-[120px] md:text-[70px] text-[36px] mt-20 font-vibes leading-none">
          Event Planning & Coordination
        </h1>
        <p className="font-medium lg:block hidden lg:text-[18px] xl:text-[22px] md:text-center italic w-[80%] mx-auto xl:w-[60%]">
          With a decade plus of events under our belt, Riwaj Events offers a
          team of established industry professionals and emerging talent that
          can match your pacing and expectations at each step of an otherwise
          long and tasking process. Our Event Artists familiarize themselves
          with your personality, taste, family priorities, event priorities, and
          aesthetic to execute a balancing act between each individual aspect of
          your event. Our trusted industry collaborators offer a wide selection
          of vendors at all levels and budgets to create a vendor team that can
          deliver. With our team, planning your big event will feel like a
          choose-your-own adventure and allow you to remain stress-free and
          ready to enjoy a day that is meant to be all about you
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
