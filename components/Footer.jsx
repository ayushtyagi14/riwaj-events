import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    {
      icon: (
        <img width="22" height="22" src="/phone.png" alt="telephone-receiver" />
      ),
      href: "tel:+15169048854",
    },
    {
      icon: <img width="22" height="22" src="/mail.png" alt="envelope-" />,
      href: "mailto:info@riwaj.events",
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

  return (
    <footer className="bg-[#ff9e3041] text-white text-center py-6 italic">
      <div className="flex flex-col items-center">
        <div className="flex md:flex-row flex-col items-center">
          <div
            className="flex flex-row items-center md:mr-10 mb-3 md:mb-0 cursor-pointer"
            href="tel:+15169048854"
          >
            <FaPhone className="mr-2" />
            <span>+1 516-904-8854</span>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            href="mailto:info@riwaj.events"
          >
            <FaEnvelope className="mr-2" />
            <span>info@riwaj.events</span>
          </div>
        </div>
        <div className="flex flex-row items-center mt-5 justify-center text-[24px]">
          {socialIcons.map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="hover:bg-[#6a540c] rounded-full p-2 w-[40px]"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="text-white text-center mt-5">
        © {new Date().getFullYear()} Riwaj Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
