import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import BlurImage from "../BlurImage";

import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  const autoplayDelay = 3000;
  const videoDelay = 1500;

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

  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const heroImages = [
    {
      id: "1",
      imgUrl: "/hero-banner1.jpg",
      title: "Your Vision, Our Expertise",
    },
    {
      id: "2",
      imgUrl: "/hero-banner2.jpg",
      title: "Experience the Extraordinary",
    },
    {
      id: "3",
      imgUrl: "/hero-banner3.jpg",
      title: "Creating Lasting Memories",
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10 opacity-[85%]">
        <Navbar />
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        speed={videoDelay}
        loop={true}
        centeredSlides={false}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {heroImages.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="lg:h-[98vh] md:h-[75vh] h-[55vh]">
              <BlurImage
                image={item.imgUrl}
                className={"brightness-[70%] object-cover"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.p
        variants={fadeIn("down", "spring", 0.5, 1.25)}
        initial="hidden"
        whileInView="show"
        className="text-white md:left-[17%] left-4 2xl:left-[30%] md:-mt-36 -mt-10 md:text-[46px] text-[28px] absolute z-[1] leading-tight font-vibes"
      >
        Welcome to <br />
        <span className="lg:text-[180px] text-[70px] text-[#d59a30]">
          Riwaj Events
        </span>
      </motion.p>
    </div>
  );
};

export default Hero;
