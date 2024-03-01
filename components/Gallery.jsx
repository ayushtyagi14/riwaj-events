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
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332860/public/floral/floral3_o4v957.jpg",
    },
    {
      id: 2,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332861/public/floral/floral9_cf41h5.jpg",
    },
    {
      id: 3,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332850/public/centerpiece/centerpiece4_hcr99g.jpg",
    },
    {
      id: 4,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332850/public/centerpiece/centerpiece2_jlerc2.jpg",
    },
    {
      id: 5,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332856/public/decor/decor4_accayy.jpg",
    },
    {
      id: 6,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332854/public/decor/decor10_whihna.jpg",
    },
    {
      id: 7,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332863/public/mehndi/mehndi11_dod9e0.jpg",
    },
    {
      id: 8,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332864/public/mehndi/mehndi13_dp32le.jpg",
    },
    {
      id: 9,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332852/public/ceremonies/ceremonies2_i7vsu6.jpg",
    },
    {
      id: 10,
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332853/public/ceremonies/ceremonies5_bhpieb.jpg",
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
