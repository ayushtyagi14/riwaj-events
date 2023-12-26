import React from "react";

const DayOf = () => {
  const data = [
    {
      id: 1,
      title: "Itinerary Coordination",
      description:
        "Curation and scheduling of all major events and ceremonies on your big day ensuring communication and coordination between vendors, clients and guests.",
    },
    {
      id: 2,
      title: "Seating Chart and Guest Services",
      description:
        "Creation of a seating chart with table cards and usher services for guests upon arrival to the event.",
    },
    {
      id: 3,
      title: "Email Phone and Text Availability",
      description:
        "A personal liaison with open lines of communication at every step of the way to answer any questions and provide advice.",
    },
    {
      id: 4,
      title: "Entrance and Ceremony Coordination",
      description:
        "Curation and coordination of family entrances, family performances, religious ceremonies, traditional ceremonies, couples dances,",
    },
    {
      id: 5,
      title: "Event Coordinators",
      description:
        "A team of coordinators to will expedite vendors, manage event timeline, attend to families and guests ",
    },
    {
      id: 6,
      title: "In-Person Conferences",
      description:
        "As we guide you through the planning process, our in-person conferences are designed to provide a manageable pathway to execution. Follow our established procedures to create your wedding from the ground up.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-16 flex flex-col gap-3 items-center text-white">
      <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30] mb-3">
        &quot;Day Of&quot; Package
      </h1>
      <p className="text-[18px] text-center w-[80%] italic">
        For all planning and coordination needs the day of your event. Hand over
        the reigns to us and we will make sure you and your family have to only
        worry about one thing- enjoying the big day!
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5">
        {data.map((item) => (
          <div
            className="pricing-card flex flex-col items-center gap-3 p-5"
            key={item.id}
          >
            <h1 className="font-vibes text-[26px] bg-[#d59a30] py-1 px-3 rounded-full text-center">
              {item.title}
            </h1>
            <p className="text-center italic">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayOf;
