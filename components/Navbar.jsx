import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const router = useRouter();

  const navigation = [
    {
      url: "/about-us",
      title: "About Us",
    },
    {
      url: "/contact-us",
      title: "Contact Us",
    },
    {
      url: "/our-packages",
      title: "Our Package",
    },
    {
      url: "/florals",
      title: "Florals",
    },
    {
      url: "/centerpieces",
      title: "Centerpieces",
    },
    {
      url: "/mehndi-decor",
      title: "Mehndi Decor",
    },
    {
      url: "/wedding-decor",
      title: "Wedding Decor",
    },
    {
      url: "/event-planning",
      title: "Event Planning",
    },
  ];

  return (
    <>
      <div
        className={`grid grid-cols-3 px-4 md:px-10 py-2 lg:py-0 text-white bg-[#2a2a2a] text-[15px] ${
          dropdown ? "bg-none" : "bg-none"
        }`}
      >
        <div className="flex flex-row items-center lg:justify-end justify-start">
          <div className="cursor-pointer lg:hidden block">
            {!dropdown ? (
              <img src="/menu.png" onClick={() => setDropdown(true)} />
            ) : (
              <img src="/close.png" onClick={() => setDropdown(false)} />
            )}
          </div>
          <div
            className="lg:flex hidden flex-col items-end text-[18px] cursor-pointer"
            href="tel:+15169048854"
          >
            <div className="flex flex-row items-center mb-2">
              <FaPhone className="mr-2" />
              <span>+1 516-904-8854</span>
            </div>
          </div>
        </div>

        <Link href={"/homepage"}>
          <div className="flex flex-row items-center justify-center">
            <img
              src="/logo.png"
              alt="logo"
              className="md:w-[25%] mt-2 rounded-lg cursor-pointer"
            />
          </div>
        </Link>

        <div
          className="lg:flex hidden flex-row items-center justify-start cursor-pointer"
          href="mailto:info@riwaj.events"
        >
          <div className="flex flex-col items-start text-[18px]">
            <div className="flex flex-row items-center mb-2">
              <FaEnvelope className="mr-2" />
              <span>info@riwaj.events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2b2b2b] text-white text-center lg:flex hidden flex-row w-full justify-evenly pt-2">
        {navigation.map((item, index) => (
          <Link
            href={item.url}
            className="hover:bg-[#d59a30] p-2 transition-colors"
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial="hidden"
            animate={dropdown ? "visible" : "hidden"}
            exit="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -10 },
            }}
          >
            <div className="h-max pb-5 flex flex-col md:px-10 px-5 text-white font-bold bg-[#ecab61]">
              {navigation.map((item, index) => (
                <Link
                  href={item.url}
                  className="hover:bg-[#d59a30] p-2 transition-colors"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
              <div
                className="flex flex-col items-center my-3"
                href="tel:+15169048854"
              >
                <FaPhone className="mb-1" />
                <span>+1 516-904-8854</span>
              </div>
              <div
                className="flex flex-col items-center my-3"
                href="mailto:info@riwaj.events"
              >
                <FaEnvelope className="mb-1" />
                <span>info@riwaj.events</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
