import React from "react";

const HappyBride = () => {
  const data = [
    {
      id: 1,
      title: "Event Concept",
    },
    {
      id: 2,
      title: "Itinerary Coordination",
    },
    {
      id: 3,
      title: "Event Coordinators",
    },
    {
      id: 4,
      title: "Vendor Procurement",
    },
    {
      id: 5,
      title: "Entrance and Ceremony Coordination",
    },
    {
      id: 6,
      title: "Email, Phone, Text Availability",
    },
    {
      id: 7,
      title: "Budgeting",
    },
    {
      id: 8,
      title: "Seating Chart and Guest Services",
    },
    {
      id: 9,
      title: "In-Person Conferences",
    },
    {
      id: 10,
      title: "Site Visits and Shopping Services",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-16 flex flex-col gap-3 items-center text-white">
      <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30] mb-3">
        &quot;Happy Bride&quot; Package
      </h1>
      <p className="text-[18px] text-center w-[80%]">
        Our all-inclusive package for planning and coordination. Let us
        completely take the reigns and ensure a well-timed and collaborative
        process that results in a detailed and cohesive event that captures your
        vision on all fronts.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5">
        {data.map((item) => (
          <div className="pricing-card p-5" key={item.id}>
            <h1 className="font-vibes text-[26px] bg-[#d59a30] py-1 px-3 rounded-full text-center">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyBride;
