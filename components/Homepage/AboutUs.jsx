import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const AboutUs = () => {
  return (
    <>
      <div className="pt-40 md:pb-[10rem] pb-[31rem] md:mb-16 mt-40 md:mt-[200px] w-[100%] md:w-[95%] ml-2 md:ml-32 2xl:ml-80 mx-auto flex flex-col items-center text-white">
        {/* First */}
        <div className="w-full flex flex-col relative -mt-16">
          <motion.div
            className="about-card flex md:flex-row flex-col-reverse items-center gap-4 md:w-[45%] w-[70%] 2xl:w-[35%] p-5 justify-end absolute right-[1rem] md:right-[12rem] 2xl:right-[38rem] -mt-[9rem] z-[990]"
            variants={slideIn("right", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <p className="text-[14px]">
              My name is Aliya Salem and I would like to congratulate you on
              taking the first steps to planning your perfect wedding!
            </p>
            <img
              src="/aliya-salem.jpg"
              alt="Aliya Salem"
              className="w-40 rounded-lg"
            />
          </motion.div>
          <motion.div
            className="about-card flex md:flex-row flex-col items-center gap-4 md:w-[45%] w-[70%] 2xl:w-[35%] px-5 md:py-10 py-7 absolute md:mt-2 mt-[7.5rem]"
            variants={slideIn("left", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <p className="md:text-[14px] text-[14px]">
              Riwaj means &quot;tradition&quot; and at Riwaj, we make sure that
              your wedding day successfully captures the beauty of traditional
              influences that have been centuries in the making.
            </p>
            <img
              src="/mehndi-banner.jpg"
              alt="Aliya Salem"
              className="w-40 rounded-lg"
            />
          </motion.div>
        </div>

        {/* Second */}
        <div className="w-full flex flex-col md:mt-[24rem] mt-[37rem] relative">
          <motion.div
            className="about-card flex md:flex-row-reverse flex-col-reverse items-center gap-4 md:w-[45%] w-[70%] 2xl:w-[35%] p-5 justify-end absolute right-[1rem] md:right-[12rem] 2xl:right-[38rem] -mt-[8.8rem] z-[990]"
            variants={slideIn("right", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <p className="md:text-[14px] text-[14px]">
              Our stages and centerpieces will take you and your guests back to
              a time of royalty and embellishment. A visual work of Art that
              will be unique to you and the wedding you have always dreamed of.
            </p>
            <img
              src="/centerpiece-banner.jpg"
              alt="Aliya Salem"
              className="w-40 rounded-lg"
            />
          </motion.div>
          <motion.div
            className="about-card flex flex-col items-center gap-4 md:w-[45%] w-[70%] 2xl:w-[35%] px-5 md:py-10 py-6 absolute md:mt-0 mt-[11rem]"
            variants={slideIn("left", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <p className="md:text-[14px] text-[14px]">
              Drawing influence from the rich and colorful traditions of South
              Asia and the Middle East, Riwaj puts a contemporary twist on
              visual philosophies that have been centuries in the making.
            </p>
            <p className="md:text-[14px] text-[14px]">
              By combining our 10+ years of industry experience with our
              philosophy of design, we make sure that your special day is not
              only a celebration for the books but also a work of art!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
