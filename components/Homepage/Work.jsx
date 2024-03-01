import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import WorkCard from "./WorkCard";

const Work = () => {
  const router = useRouter();
  const [active, setActive] = useState(2);

  const pastWork = [
    {
      id: 1,
      title: "Floral",
      description: "Bouquets, Arches, Custom arrangements, silk florals, etc..",
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332861/public/floral-work_pgggdp.jpg",
      url: "/florals",
    },
    {
      id: 2,
      title: "Centerpieces",
      description:
        "Our centerpieces are catered to a variety of styles and tastes from contemporary to traditional…",
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332850/public/centerpiece-work_mc7tyd.jpg",
      url: "/centerpieces",
    },
    {
      id: 3,
      title: "Mehndi Decor",
      description:
        "The tradition of the Mehndi is rooted in color and spectacle and our stages are no different…",
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332866/public/mehndi-work_pm5aao.jpg",
      url: "/mehndi-decor",
    },
    {
      id: 4,
      title: "Wedding Decor",
      description:
        "Elevated designs rooted in luxury and grandeur. Select from available designs or create a custom stage…",
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332857/public/decor-work_djvzlb.jpg",
      url: "/wedding-decor",
    },
    {
      id: 5,
      title: "Planning & Coordination",
      description:
        "Professional planning and coordination services covering all your event needs from itinerary to vendors and budgeting.",
      imgUrl:
        "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332867/public/planning-work_xj22m1.jpg",
      url: "/event-planning",
    },
  ];

  return (
    <div className="flex flex-col items-center w-[90%] mx-auto my-28 leading-tight">
      <motion.h1
        className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30]"
        variants={slideIn("left", "spring", 0.8, 1.25)}
        initial="hidden"
        whileInView="show"
      >
        Past Work
      </motion.h1>
      <motion.p
        className="text-center text-white md:text-[20px] text-[14px] italic"
        variants={fadeIn("right", "spring", 0.8, 1.25)}
        initial="hidden"
        whileInView="show"
      >
        Check out our amazing work from Real Weddings
      </motion.p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {pastWork.map((item, index) => (
            <WorkCard
              key={item.id}
              {...item}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
