import React from "react";

const Bts = () => {
  const data = [
    {
      id: 1,
      title: "Event Concept",
      description:
        "Curation of a cohesive and unique event concept that reflects the vision and taste of the client in all aspects ranging from food and decor, to music and dress code.",
    },
    {
      id: 2,
      title: "Vendor Procurement",
      description:
        "Guiding of  clients in reaching out to and securing vendors that match their stylistic and budgeting needs for all major aspects of the event.",
    },
    {
      id: 3,
      title: "In-Person Conferences",
      description:
        "As we guide you through the planning process, our in-person conferences are designed to provide a manageable pathway to execution. Follow our established procedures to create your wedding from the ground up.",
    },
    {
      id: 4,
      title: "Budgeting",
      description:
        "Management of client budget and timeline with possible options for vendor disbursement, invoice management, and budget optimization.",
    },
    {
      id: 5,
      title: "Email, Phone, Text Availability",
      description:
        "A personal liaison with open lines of communication at every step of the way to answer any questions and provide advice.",
    },
    {
      id: 6,
      title: "Site Visits and Shopping Services",
      description:
        "Venue visits, curation of shopping lists, purchasing, vendor and price negotiation, budgeting, etc. ",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-16 flex flex-col gap-3 items-center text-white">
      <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30] mb-3">
        &quot;Behind the Scenes&quot; Package
      </h1>
      <p className="text-[18px] text-center w-[80%]">
        For all planning and coordination needs prior to the day of your event.
        Background, planning, and coordination between the different moving
        parts of your event.
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
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bts;
