import React from "react";
import { motion } from "framer-motion";
import { fadeInAndScale, slideIn } from "../../utils/motion";

const AboutUs = () => {
  return (
    <>
      <div className="pt-40 2xl:pb-[20rem] lg:pb-[2rem] md:pb-[68rem] pb-[65rem] lg:mb-16 mt-40 lg:mt-[200px] w-[100%] lg:w-[95%] ml-2 lg:ml-32 2xl:ml-80 mx-auto flex flex-col items-center text-white italic">
        {/* First */}
        <div className="w-full flex flex-col relative -mt-16">
          <motion.div
            className="about-card flex lg:flex-row flex-col-reverse items-center gap-4 lg:w-[45%] h-[320px] md:h-[300px] lg:h-[150px] 2xl:h-[200px] w-[80%] md:w-[60%] 2xl:w-[45%] px-5 py-2 absolute justify-end right-[3rem] md:right-[12rem] lg:right-[28rem] 2xl:right-[46.2rem] -mt-[10rem] 2xl:-mt-[9rem] z-[890] bg-[#d59a30]"
            variants={slideIn("right", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <p className="2xl:text-[22px] text-center lg:text-left">
              My name is Aliya Salem and I would like to congratulate you on
              taking the first steps to planning your perfect wedding!
            </p>
            <img
              src="https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332848/public/aliya-salem_btqhvz.jpg"
              alt="Aliya Salem"
              className="w-[200px] 2xl:w-[250px] lg:-mt-2 rounded-lg"
            />
          </motion.div>
          <motion.div
            className="about-card flex flex-col-reverse items-center justify-end gap-4 lg:w-[350px] h-[340px] md:h-[350px] lg:h-[220px] 2xl:h-[320px] w-[80%] md:w-[60%] 2xl:w-[450px] px-3 lg:py-10 py-7 absolute lg:mt-[1rem] left-[1.8rem] md:left-[8rem] lg:-left-[6rem] 2xl:mt-20 mt-[12rem] 2xl:-left-[10rem] bg-[#d59a30]"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="2xl:text-[22px] text-center">
              Riwaj means &quot;tradition&quot; and at Riwaj, we make sure that
              your wedding day successfully captures the beauty of traditional
              influences that have been centuries in the making.
            </p>
            <img
              src="https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332868/public/scrapbook-left_c29ucc.jpg"
              alt="Mehndi Poloroid"
              className="w-[220px] 2xl:w-[320px] lg:-mt-[8rem] 2xl:-mt-[10rem] rounded-lg"
            />
          </motion.div>
          <motion.div
            className="lg:block absolute hidden 2xl:mt-[3.7rem] lg:mt-[0.3rem] 2xl:left-[26rem] left-[20rem] z-[899]"
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332868/public/scrapbook-center_xfcbhe.jpg"
              alt="Aliya Salem"
              className="w-[360px] 2xl:w-[470px] mt-[0.5rem] 2xl:mt-[1.8rem] rounded-lg"
            />
          </motion.div>
        </div>

        {/* Second */}
        <div className="w-full flex lg:flex-col flex-col lg:mt-[24rem] mt-[43rem] relative">
          <motion.div
            className="about-card flex lg:flex-col-reverse flex-col-reverse items-center gap-4 lg:w-[350px] h-[390px] md:h-[350px] lg:h-[220px] w-[80%] md:w-[60%] 2xl:h-[320px] 2xl:w-[450px] px-3 lg:py-10 py-7 justify-end absolute right-[2.9rem] md:right-[12rem] lg:right-[8rem] 2xl:right-[20rem] -mt-[7.5rem] lg:-mt-[23rem] 2xl:-mt-[19rem] bg-[#d59a30]"
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
              src="https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332849/public/centerpiece-banner_qogp97.jpg"
              alt="Aliya Salem"
              className="w-[200px] 2xl:w-[250px] lg:-mt-[10rem] rounded-lg"
            />
          </motion.div>
          <motion.div
            className="about-card flex flex-col items-center gap-4 lg:w-[80%] w-[80%] md:w-[60%] 2xl:w-[65%] h-[650px] md:h-[650px] lg:h-[210px] 2xl:h-[300px] px-5 lg:py-10 py-6 absolute 2xl:mt-12 lg:-mt-28 mt-[19rem] left-[1.8rem] md:left-[8rem] lg:left-[0rem] 2xl:left-[5rem] bg-[#d59a30]"
            variants={slideIn("left", "spring", 0.2, 1.25)}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex lg:flex-row flex-col items-center gap-2">
              <img
                src="https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332868/public/reception_fgyzgy.jpg"
                alt="Aliya Salem"
                className="w-[200px] 2xl:w-[280px] lg:-mt-28 mt-4 rounded-lg"
              />
              <p className="2xl:text-[22px] text-center">
                Drawing influence from the rich and colorful traditions of South
                Asia and the Middle East, Riwaj puts a contemporary twist on
                visual philosophies that have been centuries in the making.
              </p>
              <img
                src="https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332851/public/centerpiece/centerpiece51_xusfdl.jpg"
                alt="Aliya Salem"
                className="w-[200px] 2xl:w-[280px] lg:-mt-28 rounded-lg"
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
