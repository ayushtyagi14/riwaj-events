import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
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
            href="mailto:riwajeventdecor@gmail.com"
          >
            <FaEnvelope className="mr-2" />
            <span>riwajeventdecor@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-row items-center mt-5 justify-center text-[24px]">
          <a href="#" className="hover:bg-[#6a540c] rounded-full p-2 mr-2">
            <FaFacebookF className="text-white" />
          </a>
          <a href="#" className="hover:bg-[#6a540c] rounded-full p-2 mr-2">
            <FaTwitter className="text-white" />
          </a>
          <a href="#" className="hover:bg-[#6a540c] rounded-full p-2">
            <FaInstagram className="text-white" />
          </a>
        </div>
      </div>
      <div className="text-white text-center mt-5">
        © {new Date().getFullYear()} Riwaj Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
