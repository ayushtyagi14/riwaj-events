import React from "react";

const Calendly = () => {
  return (
    <div className="w-[90%] mx-auto mb-16 h-screen">
      <h1 className="text-center md:text-[80px] text-[40px] font-vibes text-[#d59a30]">
        Contact Us
      </h1>
      <iframe
        src="/virtual.html"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default Calendly;
