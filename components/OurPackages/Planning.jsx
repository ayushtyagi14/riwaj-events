import React from "react";

const Planning = () => {
  const pricing = [
    {
      id: 1,
      title: "“Day of” Package",
      price: "$2500-$5000",
      description:
        "For all planning and coordination needs the day of your event. Hand over the reigns to us and we will make sure you and your family have to only worry about one thing- enjoying the big day!",
      keyPoints: [
        "Itinerary Coordination",
        "Entrance and Ceremony Coordination",
        "Seating Chart and Guest Services",
        "Email, Phone, Text availability",
        "2-1 hour virtual or phone conferences",
        "3-1 hour in-person conferences",
        "2 day-of coordinators",
      ],
    },
    {
      id: 2,
      title: "“Behind the Scenes” Package",
      price: "$5000-$10,000",
      description:
        "For all planning and coordination needs prior to the day of your event. Background, planning, and coordination between the different moving parts of your event.",
      keyPoints: [
        "Event Concept",
        "Vendor Procurement",
        "Budgeting and Disbursement",
        "Email, Phone, Text availability",
        "3-1 hour virtual or phone conferences",
        "4-1 hour in-person conferences",
      ],
    },
    {
      id: 3,
      title: "“Happy Bride” Package",
      price: " $12,500-$15,000",
      description:
        "Our all-inclusive package for planning and coordination. Let us completely take the reigns and ensure a well-timed and collaborative process that results in a detailed and cohesive event that captures your vision on all fronts.",
      keyPoints: [
        "Event Concept",
        "Budgeting and Disbursement",
        "Vendor Procurement",
        "Itinerary Coordination",
        "Entrance and Ceremony Coordination",
        "Seating Chart and Guest Services",
        "Email, Phone, Text availability",
        "5-1 hour virtual or phone conferences",
        "10-1 hour in-person conferences",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center w-[90%] mx-auto mt-5 mb-16 text-white">
        <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30] mb-3">
          Event Planning and Coordination
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8">
          {pricing.map((item) => (
            <div
              className="pricing-card flex flex-col gap-5 p-8 cursor-pointer"
              key={item.id}
            >
              <p className="font-vibes text-[30px] bg-[#d59a30] py-2 px-4 rounded-full text-center">
                {item.title}
              </p>
              <h1 className="text-[38px] font-extrabold text-center">
                {item.price}
              </h1>
              <p className="text-center font-light text-[20px]">
                {item.description}{" "}
              </p>
              <ul className="mt-5">
                {item.keyPoints.map((points, index) => (
                  <li className="mt-2" key={index}>{points}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Planning;
