import React from "react";
import { motion } from "framer-motion";
import { fadeInAndScale, slideIn } from "../../utils/motion";

const AboutUs = () => {
  return (
    <>
      <div className="pt-40 2xl:pb-[20rem] lg:pb-[2rem] md:pb-[68rem] pb-[80rem] lg:mb-16 mt-40 lg:mt-[200px] w-[100%] lg:w-[95%] ml-2 lg:ml-32 2xl:ml-80 mx-auto flex flex-col items-center text-white italic">
        {/* First */}
        <div className="w-full flex flex-col relative -mt-16">
          <motion.div
            className="about-card flex lg:flex-row flex-col-reverse items-center gap-4 lg:w-[45%] h-[350px] md:h-[300px] lg:h-[150px] 2xl:h-[200px] w-[80%] md:w-[60%] 2xl:w-[45%] px-5 py-2 absolute justify-end right-[3rem] md:right-[12rem] lg:right-[28rem] 2xl:right-[46.2rem] -mt-[8rem] 2xl:-mt-[7rem] z-[990]"
            variants={slideIn("right", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <p className="2xl:text-[22px] text-center lg:text-left">
              My name is Aliya Salem and I would like to congratulate you on
              taking the first steps to planning your perfect wedding!
            </p>
            <img
              src="/aliya-poloroid.png"
              alt="Aliya Salem"
              className="w-[200px] 2xl:w-full -mt-2 rounded-lg"
            />
          </motion.div>
          <motion.div
            className="about-card flex flex-col-reverse items-center justify-end gap-4 lg:w-[350px] h-[400px] md:h-[350px] lg:h-[220px] 2xl:h-[320px] w-[80%] md:w-[60%] 2xl:w-[450px] px-3 lg:py-10 py-7 absolute lg:mt-[1rem] left-[1.8rem] md:left-[8rem] lg:-left-[6rem] 2xl:mt-20 mt-[16rem] 2xl:-left-[10rem]"
            variants={slideIn("left", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <p className="2xl:text-[22px] text-center">
              Riwaj means &quot;tradition&quot; and at Riwaj, we make sure that
              your wedding day successfully captures the beauty of traditional
              influences that have been centuries in the making.
            </p>
            <img
              src="/mehndi-poloroid.png"
              alt="Aliya Salem"
              className="w-[200px] 2xl:w-[350px] lg:-mt-[12rem] 2xl:-mt-[19rem] rounded-lg"
            />
          </motion.div>
          <motion.div
            className="lg:block absolute hidden 2xl:mt-20 lg:mt-[2rem] 2xl:left-[26rem] left-[21rem] z-[999]"
            variants={fadeInAndScale(0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <img
              src="/mehndi-poloroid.png"
              alt="Aliya Salem"
              className="w-[320px] 2xl:w-[470px] -mt-[3.2rem] rounded-lg"
            />
          </motion.div>
        </div>

        {/* Second */}
        <div className="w-full flex lg:flex-col flex-col lg:mt-[24rem] mt-[43rem] relative">
          <motion.div
            className="about-card flex lg:flex-col-reverse flex-col-reverse items-center gap-4 lg:w-[350px] h-[400px] md:h-[350px] lg:h-[220px] w-[80%] md:w-[60%] 2xl:h-[320px] 2xl:w-[450px] px-3 lg:py-10 py-7 justify-end absolute right-[2.9rem] md:right-[12rem] lg:right-[8rem] 2xl:right-[20rem] lg:-mt-[23rem] 2xl:-mt-[19rem]"
            variants={slideIn("right", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <p className="2xl:text-[22px] text-center">
              Our stages and centerpieces will take you and your guests back to
              a time of royalty and embellishment. A visual work of Art that
              will be unique to you and the wedding you have always dreamed of.
            </p>
            <img
              src="/centerpiece-poloroid.png"
              alt="Aliya Salem"
              className="w-[200px] 2xl:w-[320px] 2xl:-mt-[18rem] lg:-mt-[12rem] rounded-lg"
            />
          </motion.div>
          <motion.div
            className="about-card flex flex-col items-center gap-4 lg:w-[80%] w-[80%] md:w-[60%] 2xl:w-[65%] h-[770px] md:h-[650px] lg:h-[210px] 2xl:h-[350px] px-5 lg:py-10 py-6 absolute 2xl:mt-12 lg:-mt-28 mt-[27.5rem] left-[1.8rem] md:left-[8rem] lg:left-[0rem] 2xl:left-[5rem]"
            variants={slideIn("left", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex lg:flex-row flex-col items-center">
              <img
                src="/reception-poloroid.png"
                alt="Aliya Salem"
                className="w-[200px] 2xl:w-[320px] lg:-mt-28 rounded-lg"
              />
              <p className="2xl:text-[22px] text-center">
                Drawing influence from the rich and colorful traditions of South
                Asia and the Middle East, Riwaj puts a contemporary twist on
                visual philosophies that have been centuries in the making.
              </p>
              <img
                src="/centerpiece2-poloroid.png"
                alt="Aliya Salem"
                className="w-[200px] 2xl:w-[320px] lg:-mt-28 rounded-lg"
              />
            </div>
            <p className="2xl:text-[22px] text-center">
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
