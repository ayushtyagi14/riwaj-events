import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

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
      name: "Sadia Afrin",
      title: "",
      review:
        "I had the opportunity to meet with Aliyah after numerous failed attempt with different decor vendors. I was looking for someone who can turn my vision into reality, without breaking the bank! Aliyah was super attentive, paid attention to every single detail, and worked very hard to make sure each day was perfect! I was able to trust her with my own pieces for decor, and she returned them nicely packed, unharmed. If you are looking for a wedding decor vendor, look no further. They are super sweet, and willing to work with your budget. Riwaj house was one of the best vendors that made my wedding run perfectly. We can't thank you guys enough!",
    },
    {
      id: 2,
      name: "Allisha Parvez",
      title: "",
      review:
        "Riwaj has done such an amazing job for two events (desi and American/western) for my sisters wedding! They are so talented at putting together such beautiful creations out of nothing. I would definitely highly recommend their services for any desi or American/western events! Irteza, Jeff, Manya, and Aliya are all the best! Very talented and creative crew, highly recommend for any event!",
    },
    {
      id: 3,
      name: "Mahnoor Asim",
      title: "",
      review:
        "I had riwaj team for my event decoration and I absolutely loved it. They are the most pleasant people I've known. They were very helpful in every aspect, for instance the color theme i had planned wasn't matching with my outfit and i was stressed but they told me not to worry about it and leave it on them and when i entered the venue on my day i was soo surprised and happy to see how beautifully they managed everything. The pictures came out so perfect because of the color combination they used which matched my outfit. Everyone gave me alot of compliments about my stage. Choosing Riwaj for my event decorations was one of the best decisions. I'll definitely recommend riwaj to my friends and family and will consider them for my future rvents.",
    },
    {
      id: 4,
      name: "Asma Abeer",
      title: "",
      review:
        "Decorated my stage and tables BEYOND BEAUTIFULLY. You can 100% leave it to Aliya and her team to make your dreams come true with zero stress. Book them now without a second thought. I am in awe every time I look at my decor. Thank you Riwaj Decor!!!",
    },
    {
      id: 5,
      name: "Raha Ismail",
      title: "",
      review:
        "What can I say? Such a pleasure to work with sister Alia and her team. She took her time to get to know us and walked us through her decor. Her options are traditional with a modern twist. Very reliable and excellent communication. Pricing is affordable as well. The pictures speak for itself. Definitely an experienced staff!",
    },
    {
      id: 6,
      name: "Simran",
      title: "",
      review:
        "I would highly recommend Aaliya and her team! Aaliya is patient and cares about what you want and will work with you to create the perfect stage and theme. She was not like other vendors I visited and was very easy to talk to throughout the entire process. She made the process less stressful and I couldn't be happier with the quality of work delivered. Thank you for everything!",
    },
    {
      id: 7,
      name: "Aliza Zaidi",
      title: "",
      review:
        "Great work from aaliya and her team for our special day! She took her time to speak with us, and went above and beyond to make our vision come true! I highly recommend her for your wedding needs.",
    },
  ];

  return (
    <div className="mt-32">
      <motion.h1
        className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30]"
        variants={slideIn("left", "spring", 0.2, 1.25)}
        initial="hidden"
        whileInView="show"
      >
        From Our Clients
      </motion.h1>
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
        className="mySwipe client-card"
        onSlideChange={handleSlideChange}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="text-white flex flex-col items-start w-full text-center mt-5 md:p-10 mb-8 p-6">
              <img src="/quote.png" alt="quotes left" />
              <div className="flex flex-col items-center md:w-[80%] mx-auto">
                <p className="text-[22px] font-thin mb-4 italic">
                  {item.review}
                </p>
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
