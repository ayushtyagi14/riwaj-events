import React from "react";

const Stages = () => {
  const pricing = [
    {
      id: 1,
      title: "Intimate & Soirees",
      price: "$1500",
      description: "Small events and home decor (i.e baby showers, birthdays)",
      keyPoints: [
        "10-16 ft backdrop",
        "Choice of Prop, Balloon, or Floral design",
        "Stage Uplighting",
        "Choice of loveseat or table decor",
      ],
    },
    {
      id: 2,
      title: "Mehndi Night",
      price: "$2500",
      description:
        "Colorful decor packages for Mehendi, Sangeet, and Dholki events",
      keyPoints: [
        "16-20 ft Draped Multi-color Backdropp",
        "Choice of: swing, bench, ottomans, or traditional chairs",
        "Stage Uplighting",
        "Stage embellishments: lanterns, umbrellas, matkis, etc.",
        "Traditional centerpieces (up to 15 tables)",
        "Florals not included",
      ],
    },
    {
      id: 3,
      title: "Bridal & Venue",
      price: "$3500",
      description:
        "Decor packages including basic draping, non-customizable  floral and prop designs. For Wedding and Reception events (200+ guests)",
      keyPoints: [
        "16ft-32ft backdrop",
        "Loveseat and chairs",
        "Prop Design",
        "Setup and Installation",
        "Stage Uplighting",
      ],
    },
    {
      id: 4,
      title: "Nikkah Ceremony",
      price: "$2000",
      description:
        "All white, floral designs including partition and ceremony setup",
      keyPoints: [
        "16-24 ft draped White/Ivory Backdrop",
        "Floral Partition Arch",
        "Prop Design",
        "Choice of: swing, bench, ottomans, or traditional chairs",
        "Stage Uplighting",
        "Stage embellishments: candles, vases, etc.",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center w-[90%] mx-auto mt-5 mb-16 text-white">
        <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30] mb-3">
          Stages & Backdrop
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {pricing.map((item) => (
            <div
              className="pricing-card flex flex-col gap-5 p-8 cursor-pointer"
              key={item.id}
            >
              <p className="font-vibes text-[30px] bg-[#d59a30] py-2 px-4 rounded-full text-center">
                {item.title}
              </p>
              <h1 className="text-[50px] font-extrabold text-center">
                <span className="text-[14px]">Starting At</span> {item.price}
              </h1>
              <p className="text-center font-light text-[20px]">
                {item.description}{" "}
              </p>
              <ul className="mt-5">
                {item.keyPoints.map((points, index) => (
                  <li className="mt-2" key={index}>
                    {points}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pricing-card flex flex-col gap-5 p-8 cursor-pointer">
            <p className="font-vibes text-[30px] bg-[#d59a30] py-2 px-4 rounded-full text-center">
              Floral Design
            </p>
            <div className="leading-none font-extrabold text-end">
              <div className="mb-1 text-center">
                <span className="text-[14px]">Starting At</span>{" "}
                <span className="text-[50px]">$1000</span>
              </div>
              <span className="text-[14px] font-light">
                *plus package price
              </span>
            </div>
            <p className="text-center font-light text-[20px] mt-3">
              Our customized floral service which includes curation and design
              of custom florals and floral pieces. <br /> Including but not
              limited to:
            </p>
            <ul className="mt-5">
              <li className="mt-2">Custom floral design</li>
              <li className="mt-2">Floral coordination</li>
              <li className="mt-2">Customization of existing floral pieces</li>
              <li className="mt-2">Centerpiece Florals</li>
              <li className="mt-2">
                Silk & Fresh Floral Design (Fresh florals are subject to
                additional supply costs)
              </li>
            </ul>
          </div>
          <div className="pricing-card flex flex-col gap-5 p-8 cursor-pointer">
            <p className="font-vibes text-[30px] bg-[#d59a30] py-2 px-4 rounded-full text-center">
              Centerpieces & Rental
            </p>
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-[24px] font-bold text-[#d59a30]">
                Available rentals:
              </h1>
              <p>
                Non Floral Centerpieces <br /> (starting at $55 per piece)
              </p>
              <p>
                Silk-Floral Centerpieces <br /> (Starting at $75 per piece)
              </p>
              <p>Rickshaw</p>
              <p>Carriage</p>
              <p>Doli</p>
              <p>Photobooths</p>
              <p>Nikkah Partitions</p>
              <p>Floral Walls</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stages;
