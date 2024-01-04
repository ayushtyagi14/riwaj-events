import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Sidebar = () => {
  const socialIcons = [
    {
      icon: (
        <img width="22" height="22" src="/phone.png" alt="telephone-receiver" />
      ),
      href: "tel:+15169048854",
    },
    {
      icon: <img width="22" height="22" src="/mail.png" alt="envelope-" />,
      href: "mailto:riwajeventdecor@gmail.com",
    },
    {
      icon: (
        <img width="22" height="22" src="/calendar.png" alt="calendar-emoji" />
      ),
      href: "/homepage/#booking",
    },
    {
      icon: <img width="22" height="22" src="/whatsapp.png" alt="whatsapp" />,
      href: "https://wa.me/+15169048854",
    },
    {
      icon: (
        <img width="22" height="22" src="/instagram.png" alt="instagram-new" />
      ),
      href: "https://www.instagram.com/riwajeventdecor",
    },
  ];

  const [showIcons, setShowIcons] = useState(true);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const iconsVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: showIcons ? -200 : 200 },
  };

  return (
    <div
      className={`fixed right-0 ${
        showIcons ? "top-[50%]" : "top-[70%]"
      } transform -translate-y-1/2 z-[999]`}
    >
      {showIcons && (
        <button
          className="bg-black px-4 py-2 border-t border-black rounded-tl-lg"
          onClick={() => setShowIcons(false)}
        >
          <FaArrowRight className="text-white rounded-tl-lg" />
        </button>
      )}
      {!showIcons && (
        <button
          className="bg-black px-4 py-2 border-t border-black rounded-l-lg"
          onClick={() => setShowIcons(true)}
        >
          <FaArrowLeft className="text-white rounded-l-lg" />
        </button>
      )}
      <motion.div
        className={`flex flex-col items-center bg-[#d59a30] rounded-bl-xl`}
        initial="hidden"
        animate={showIcons ? "visible" : "hidden"}
        variants={iconsVariants}
      >
        {socialIcons.map(({ icon, href }, index) => (
          <motion.a
            key={index}
            href={href}
            className={`hover:bg-[#ddb466] px-3 py-4 border-t border-black`}
            variants={iconsVariants}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Sidebar;
