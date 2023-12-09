import React, { useState } from "react";

const ServiceCard = ({ imageUrl, desciption, title }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`service-cards rounded-b-xl hover:cursor-pointer md:hover:h-[100%] md:h-[200px] overflow-hidden relative ease-in-out`}
    >
      <div className="outlinePage ease-in-out relative rounded-[25px] w-[300px] h-[200px] overflow-hidden">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="detailPage flex flex-col text-center items-center p-4 relative bg-white w-[300px] h-full ease-in-out">
        <h2 className="font-vibes text-[36px] leading-none mb-2">{title}</h2>
        <p>{desciption}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
