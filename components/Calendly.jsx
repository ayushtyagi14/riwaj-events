import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Calendly = () => {
  return (
    <div className="w-[90%] mx-auto mb-16 md:h-screen h-[120vh]" id="booking">
      <motion.h1
        className="text-center md:text-[80px] text-[40px] font-vibes text-[#d59a30]"
        variants={slideIn("left", "spring", 0.8, 1.25)}
        initial="hidden"
        whileInView="show"
      >
        Contact Us
      </motion.h1>
      <iframe
        src="/virtual.html"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default Calendly;
