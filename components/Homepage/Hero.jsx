import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import BlurImage from "../BlurImage";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Hero = () => {
  const [width, setWidth] = useState(null);
  let mobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  if (width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      id: "1",
      imgUrl: "/hero-banner4.jpg",
      title: "Your Vision, Our Expertise",
    },
    {
      id: "2",
      imgUrl: "/hero-banner1.jpeg",
      title: "Experience the Extraordinary",
    },
    {
      id: "3",
      imgUrl: "/hero-banner3.jpeg",
      title: "Creating Lasting Memories",
    },
    {
      id: "3",
      imgUrl: "/hero-banner2.jpeg",
      title: "Creating Lasting Memories",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10 opacity-[85%]">
        <Navbar />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="lg:h-[85vh] 2xl:h-[90vh] md:h-[75vh] h-[55vh]"
        >
          <Image
            src={heroImages[currentImageIndex].imgUrl}
            alt={heroImages[currentImageIndex].title}
            fill
            className={"brightness-[70%] object-cover"}
          />
        </motion.div>
      </AnimatePresence>
      <motion.div className="text-white md:left-[14%] lg:left-[16%] xl:left-[20%] left-4 2xl:left-[30%] md:-mt-36 -mt-10 md:text-[46px] text-[28px] absolute z-[1] leading-none font-vibes">
        Welcome to <br />
        <span
          className="lg:text-[180px] md:text-[120px] text-[70px] text-[#d59a30]"
          style={{ whiteSpace: "nowrap" }}
        >
          <Typewriter
            words={["Riwaj Events"]}
            loop={1}
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </span>
      </motion.div>
    </div>
  );
};

export default Hero;
