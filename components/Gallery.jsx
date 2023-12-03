import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      imgUrl: "/floral-work.jpg",
    },
    {
      id: 2,
      imgUrl: "/centerpiece-work.jpg",
    },
    {
      id: 3,
      imgUrl: "/mehndi-work.jpg",
    },
    {
      id: 4,
      imgUrl: "/decor-work.jpg",
    },
    {
      id: 5,
      imgUrl: "/planning-work.jpg",
    },
    {
      id: 6,
      imgUrl: "/floral-work2.jpg",
    },
    {
      id: 7,
      imgUrl: "/centerpiece-work2.jpg",
      url: "/",
    },
    {
      id: 8,
      imgUrl: "/mehndi-work2.jpg",
    },
    {
      id: 9,
      imgUrl: "/decor-work2.jpg",
    },
    {
      id: 10,
      imgUrl: "/planning-work2.jpg",
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
    <div className="w-[80%] mx-auto mb-5 mt-6 leading-tight">
      <h1 className="text-center md:text-[80px] text-[40px] font-vibes text-[#d59a30]">
        Decoration Gallery
      </h1>
      <p className="text-center text-white text-[20px]">
        Ready to Walk Down the Aisle?
      </p>

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
