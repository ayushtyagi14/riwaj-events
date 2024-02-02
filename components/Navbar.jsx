import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [eventDecorationHover, setEventDecorationHover] = useState(false);

  const router = useRouter();

  const navigation = [
    {
      id: 1,
      url: "/contact-us",
      title: "Contact Us",
    },
    {
      id: 2,
      url: "/our-packages",
      title: "Our Packages",
    },
    {
      id: 3,
      url: "/florals",
      title: "Florals",
    },
    {
      id: 4,
      url: "/centerpieces",
      title: "Centerpieces",
    },
    {
      id: 5,
      title: "Event Decoration",
      dropdownOptions: [
        { url: "/wedding-decor", title: "Wedding Decor" },
        { url: "/mehndi-decor", title: "Mehndi Decor" },
        { url: "/ceremonies", title: "Ceremonies" },
      ],
    },
    {
      id: 6,
      url: "/event-planning",
      title: "Event Planning",
    },
  ];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        scrolling ? "bg-[#2a2a2ab7]" : "bg-[#2a2a2a41]"
      } italic fixed w-full z-[999]`}
    >
      <div
        className={`grid grid-cols-3 px-4 md:px-10 py-2 lg:py-0 lg:pb-2 text-white ${
          dropdown ? "bg-none" : "bg-none"
        }`}
      >
        <div className="flex flex-row items-center lg:justify-end justify-start w-full">
          <div className="cursor-pointer lg:hidden block">
            {!dropdown ? (
              <img src="/menu.png" onClick={() => setDropdown(true)} />
            ) : (
              <img src="/close.png" onClick={() => setDropdown(false)} />
            )}
          </div>
          <div className="lg:flex hidden flex-col items-end cursor-pointer">
            <div
              className="flex flex-row items-center mb-2 hover:text-[#d59a30] text-[15px] 2xl:text-[16px]"
              href="tel:+15169048854"
            >
              <FaPhone className="mr-2" />
              <span>+1 516-904-8854</span>
            </div>
            <div className="text-white text-center lg:flex hidden flex-row w-full gap-4 pt-2 2xl:text-[18px]">
              {navigation.slice(0, 3).map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.url || "#"} // Adjust the URL accordingly
                    className="hover:text-[#d59a30] p-2 transition-colors text-[18px]"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href={"/homepage"}>
          <div className="flex flex-row items-center justify-center">
            <img
              src="/logo.png"
              alt="logo"
              className="md:w-[35%] mt-2 rounded-lg cursor-pointer"
            />
          </div>
        </Link>

        <div className="flex flex-row items-center justify-start">
          <div className="lg:flex hidden flex-col items-start cursor-pointer">
            <div
              className="flex flex-col items-start text-[15px] 2xl:text-[16px]"
              href="mailto:info@riwaj.events"
            >
              <div className="flex flex-row items-center mb-2 hover:text-[#d59a30]">
                <FaEnvelope className="mr-2" />
                <span>info@riwaj.events</span>
              </div>
            </div>

            <div className="text-white text-center lg:flex hidden flex-row w-full gap-4 pt-2 2xl:text-[18px]">
              {navigation.slice(3, 6).map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() =>
                    item.title === "Event Decoration" &&
                    setEventDecorationHover(true)
                  }
                  onMouseLeave={() =>
                    item.title === "Event Decoration" &&
                    setEventDecorationHover(false)
                  }
                >
                  <Link
                    href={item.url || "#"} // Adjust the URL accordingly
                    className="hover:text-[#d59a30] transition-colors text-[18px]"
                  >
                    {item.title}
                  </Link>
                  {item.dropdownOptions && eventDecorationHover && (
                    <div className="absolute z-10 top-full left-0 bg-[#2a2a2ab7] p-2 rounded-md w-max">
                      {item.dropdownOptions.map((option, optionIndex) => (
                        <Link
                          href={option.url || "#"} // Adjust the URL accordingly
                          key={optionIndex}
                          className="block hover:text-[#d59a30] p-2 transition-colors text-[18px]"
                        >
                          {option.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
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
            <div className="h-max pb-5 flex flex-col md:px-10 px-5 py-4 text-white font-bold bg-[#2a2a2a]">
              {navigation.map((item, index) => (
                <div
                  key={index}
                  className="relative group p-2"
                  onClick={() =>
                    item.title === "Event Decoration" &&
                    setEventDecorationHover(!eventDecorationHover)
                  }
                >
                  <Link
                    href={item.url || "#"} // Adjust the URL accordingly
                    className="hover:text-[#d59a30] transition-colors"
                  >
                    {item.title}
                  </Link>
                  {item.dropdownOptions &&
                    eventDecorationHover &&
                    item.dropdownOptions.map((option, optionIndex) => (
                      <Link
                        href={option.url || "#"} // Adjust the URL accordingly
                        key={optionIndex}
                        className="block hover:text-[#d59a30] p-2 transition-colors text-center font-normal"
                      >
                        {option.title}
                      </Link>
                    ))}
                </div>
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
    </div>
  );
};

export default Navbar;
