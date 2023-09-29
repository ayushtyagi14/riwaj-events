import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Clients = () => {
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

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  const testimonials = [
    {
      id: 1,
      name: "Kiran",
      title: "",
      review:
        "Aliya! Thank you so so so much for making my engagement party on Sunday look absolutely stunning. Everyone was raving about the decor! ♥️",
    },
    {
      id: 2,
      name: "Natasha",
      title: "",
      review:
        "The stage was AMAZING and perfect to the T. Words cannot express how thankful I am for making my dream come true. It was exactly what I had wanted ♥️♥️",
    },
    {
      id: 3,
      name: "Sufiya",
      title: "",
      review:
        "Thank you so much for making such a beautiful stage! Everyone admired it, I appreciate all you have done! I loved every single thing ♥️",
    },
    {
      id: 4,
      name: "Rekha",
      title: "",
      review:
        "The decor was absolutely beautiful ♥️ Everyone loved it and enjoyed the whole party. Frank added your decor business to his folder for vendors bc everyone had there eyes blown away! Thank you so much Again aliya. You're the best ♥️",
    },
    {
      id: 5,
      name: "Aisha Akhtar",
      title: "Bride",
      review:
        "Riwaj decor really went above and beyond for my mehndi and reception. Aliya was very professional, patient, and offered great advise. She was super easy to talk to and I found her selection and stage designs very carefully planned out. I was able to reach her at any time, and she was very prompt in responding... a major plus during stressful wedding planning time. Highly recommended!",
    },
    {
      id: 6,
      name: "Meher",
      title: "Bride",
      review:
        "Working with Aliya was one of the easier decisions and she worked with me every step of the way. She listened to what i wanted and showed me examples of her previous work. When those didn't seem to fit my vision she created a stage from scratch to fit my needs. She was very professional along with the Riwaj team and executed my events beautifully...",
    },
    {
      id: 7,
      name: "Meher",
      title: "Bride",
      review:
        "...Staging, decor, guest book table, floral arrangements etc. everything was perfection. I honestly did not have to stress knowing they were on my side and would do everything in their power to make my vision come to life. Every guest complimented the details and I could have not been happier with choosing Riwaj. ",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-16">
      <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30]">
        From Our Clients
      </h1>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        speed={videoDelay}
        loop={true}
        centeredSlides={false}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="text-white flex flex-col items-start md:w-[80%] mx-auto text-center mt-5 border border-white md:p-10 p-6 rounded-2xl">
              <img src="/quote.png" alt="quotes left" />
              <div className="flex flex-col items-center md:w-[80%] mx-auto">
                <p className="text-[22px] font-thin mb-4">{item.review}</p>
                <h1 className="text-[30px] font-vibes text-[#d59a30]">
                  - {item.name}
                </h1>
                <span>{item.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
