import React from "react";

const Work = () => {
  const pastWork = [
    {
      id: 1,
      title: "Floral",
      description: "Bouquets, Arches, Custom arrangements, silk florals, etc..",
      imgUrl: "/floral-work.jpg",
      url: "/",
    },
    {
      id: 2,
      title: "Centerpieces",
      description:
        "Our centerpieces are catered to a variety of styles and tastes from contemporary to traditional…",
      imgUrl: "/centerpiece-work.jpg",
      url: "/",
    },
    {
      id: 3,
      title: "Mehndi Decor",
      description:
        "The tradition of the Mehndi is rooted in color and spectacle and our stages are no different…",
      imgUrl: "/mehndi-work.jpg",
      url: "/",
    },
    {
      id: 4,
      title: "Wedding Decor",
      description:
        "Elevated designs rooted in luxury and grandeur. Select from available designs or create a custom stage…",
      imgUrl: "/decor-work.jpg",
      url: "/",
    },
    {
      id: 5,
      title: "Planning & Coordination",
      description:
        "Professional planning and coordination services covering all your event needs from itinerary to vendors and budgeting.",
      imgUrl: "/planning-work.jpg",
      url: "/",
    },
  ];

  return (
    <div className="flex flex-col items-center w-[90%] mx-auto mb-16 leading-tight">
      <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30]">
        Past Work
      </h1>
      <p className="text-center text-white text-[20px]">
        Check out our amazing work from Real Weddings
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-10 mt-10">
        {pastWork.map((item) => (
          <div className="book" key={item.id}>
            <div className="flex flex-col items-end gap-10 w-[80%] ml-auto mr-5">
              <p className="text-white text-end text-[20px]">
                {item.description}
              </p>
              <button className="border-black border p-3 rounded-full hover:shadow-lg text-white">
                View More
              </button>
            </div>
            <div className="cover flex flex-col items-center">
              <img
                src={item.imgUrl}
                alt="Floral Work Riwaj Events"
                className="w-full object-cover h-[80%] rounded-t-[20px]"
              />
              <p className="text-[35px] font-vibes text-white pt-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
