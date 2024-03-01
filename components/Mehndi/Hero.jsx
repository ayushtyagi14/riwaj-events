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
          image="https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332865/public/mehndi-banner_qlpohy.jpg"
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
          Mehndi Decor
        </h1>
        <p className="font-medium lg:block hidden lg:text-[18px] xl:text-[22px] md:text-center italic w-[80%] mx-auto">
          The tradition of the Mehndi is rooted in color and spectacle and our
          stages are no different. By combining a rich palette of earthy greens,
          vibrant yellows, deep blues, and a myriad of other colors, we make
          sure that the atmosphere of the venue is just as colorful as the
          journey that you and your loved one are about to embark on! We accent
          this colorful scene with traditional South Asian and Middle Eastern
          pottery and quilt-work. Floral frames and arrangements may also be
          implemented to embellish the other decorations. Our mehndi designs are
          a perfect tool to create a lively event and set the tone for grand
          celebration!
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
