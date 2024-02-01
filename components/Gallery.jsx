import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

const Gallery = () => {
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

  const imgGallery = [
    {
      id: 1,
      imgUrl: "/floral/floral3.jpeg",
    },
    {
      id: 2,
      imgUrl: "/floral/floral9.jpg",
    },
    {
      id: 3,
      imgUrl: "/centerpiece/centerpiece4.jpeg",
    },
    {
      id: 4,
      imgUrl: "/centerpiece/centerpiece2.jpeg",
    },
    {
      id: 5,
      imgUrl: "/decor/decor4.jpeg",
    },
    {
      id: 6,
      imgUrl: "/decor/decor10.jpeg",
    },
    {
      id: 7,
      imgUrl: "/mehndi/mehndi11.jpeg",
    },
    {
      id: 8,
      imgUrl: "/mehndi/mehndi13.jpeg",
    },
    {
      id: 9,
      imgUrl: "/ceremonies/ceremonies2.jpeg",
    },
    {
      id: 10,
      imgUrl: "/ceremonies/ceremonies5.jpeg",
    },
  ];

  const slidesToShow = mobile ? 2.5 : 4.5;

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow, // Use the conditional value
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <div className="w-[80%] mx-auto mb-28 mt-6 leading-tight">
      <motion.h1
        className="text-center md:text-[80px] text-[40px] font-vibes text-[#d59a30]"
        variants={slideIn("left", "spring", 0.8, 1.25)}
        initial="hidden"
        whileInView="show"
      >
        Decoration Gallery
      </motion.h1>
      <motion.p
        className="text-center text-white md:text-[20px] text-[14px] italic"
        variants={fadeIn("right", "spring", 0.8, 1.25)}
        initial="hidden"
        whileInView="show"
      >
        Ready to Walk Down the Aisle?
      </motion.p>

      <Slider {...settings}>
        {imgGallery.map((item) => (
          <div key={item.id} className="px-1.5 mt-10">
            <img
              src={item.imgUrl}
              alt={`Image ${item.id}`}
              className="mx-0 rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
