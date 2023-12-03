import { useRouter } from "next/router";
import React from "react";

const Work = () => {
  const router = useRouter();

  const pastWork = [
    {
      id: 1,
      title: "Floral",
      description: "Bouquets, Arches, Custom arrangements, silk florals, etc..",
      imgUrl: "/floral-work.jpg",
      url: "/florals",
    },
    {
      id: 2,
      title: "Centerpieces",
      description:
        "Our centerpieces are catered to a variety of styles and tastes from contemporary to traditional…",
      imgUrl: "/centerpiece-work.jpg",
      url: "/centerpieces",
    },
    {
      id: 3,
      title: "Mehndi Decor",
      description:
        "The tradition of the Mehndi is rooted in color and spectacle and our stages are no different…",
      imgUrl: "/mehndi-work.jpg",
      url: "/mehndi-decor",
    },
    {
      id: 4,
      title: "Wedding Decor",
      description:
        "Elevated designs rooted in luxury and grandeur. Select from available designs or create a custom stage…",
      imgUrl: "/decor-work.jpg",
      url: "/wedding-decor",
    },
    {
      id: 5,
      title: "Planning & Coordination",
      description:
        "Professional planning and coordination services covering all your event needs from itinerary to vendors and budgeting.",
      imgUrl: "/planning-work.jpg",
      url: "/event-planning",
    },
  ];

  return (
    <div className="flex flex-col items-center w-[90%] mx-auto mt-5 leading-tight">
      <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30]">
        Past Work
      </h1>
      <p className="text-center text-white text-[20px]">
        Check out our amazing work from Real Weddings
      </p>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-start gap-6 mt-10">
        {pastWork.map((item) => (
          <div className="flex flex-col pricing-card md:h-[370px] h-[330px]" key={item.id}>
            <div className="flex flex-col items-center">
              <img
                src={item.imgUrl}
                alt="Floral Work Riwaj Events"
                className="w-full object-cover h-40 rounded-t-[20px]"
              />
              <p className="text-[24px] font-vibes my-4 text-[#d59a30]">
                {item.title}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between h-full pb-2">
              <p className="text-white text-center">{item.description}</p>
              <button
                className="border-black border rounded-full hover:shadow-lg text-white hover:text-[#d59a30]"
                onClick={() => router.push(item.url)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
