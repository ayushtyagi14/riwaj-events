import React, { useState } from "react";

const ServiceCard = ({ imageUrl, desciption, title }) => {
  return (
    <div
      className={`service-cards hover:cursor-pointer md:hover:h-[100%] md:h-[210px] overflow-hidden relative ease-in-out border-2 border-[#d59a30]`}
    >
      <div className="outlinePage ease-in-out relative w-[320px] h-[160px] overflow-hidden">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="detailPage flex flex-col text-center items-center p-4 relative bg-white w-[320px] h-full ease-in-out">
        <h2 className="font-vibes text-[24px] font-bold leading-none mb-2">
          {title}
        </h2>
        <p className="italic">{desciption}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
