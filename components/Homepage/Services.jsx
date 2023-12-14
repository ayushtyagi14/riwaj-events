import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Event Design",
      imgUrl: "/event-designing.jpg",
      description:
        "Our aesthetic philosophy and industry experience. Your style and individuality. An immersive experience for your guests.",
    },
    {
      id: 2,
      title: "Floral Design",
      imgUrl: "/floral.jpg",
      description:
        "Our Riwaj florists craft all our arrangements by hand, customized and curated to match your vision. Any color. Any Style. Yes, really!",
    },
    {
      id: 3,
      title: "Event Planning & Coordination",
      imgUrl: "/event-planning.jpg",
      description:
        "Design your itinerary, plan your budget, execute your vision on the day of your event, and keep your guests amazed.",
    },
    {
      id: 4,
      title: "Bouquets & Centerpieces",
      imgUrl: "/centerpiece.jpg",
      description:
        "Select from a wide range of floral, silk, and non-floral pieces.",
    },
    {
      id: 5,
      title: "Vendor Procurement",
      imgUrl: "/vendor.jpg",
      description:
        "Let us find you the perfect team of vendors from our trusted collaborators all across the industry.",
    },
    {
      id: 6,
      title: "Guest & Entertainment",
      imgUrl: "/guest-and-entertainment.jpg",
      description: "DJ, Dhols, Dancers, Photobooths etc.",
    },
    {
      id: 7,
      title: "Wedding & Reception",
      imgUrl: "/reception.jpg",
      description:
        "With thousands of events under our belt, we know just what it takes to make your ceremony a work of art.",
    },
    {
      id: 8,
      title: "Mehndi & Sangeet",
      imgUrl: "/mehndi.jpg",
      description:
        "Colorful florals, trendy designs, and a touch of traditional charm.",
    },
    {
      id: 9,
      title: "Nikkahs & Ceremonies",
      imgUrl: "/nikkahs.jpg",
      description:
        "Decadent white florals, Nikkah arches, Mandaps, and ceremony decor with your religious customs and traditions in mind.",
    },
  ];

  return (
    <motion.div
      className="flex flex-col items-center w-[90%] mx-auto md:mt-28"
      variants={fadeIn("up", "spring", 0.2, 0.8)}
      initial="hidden"
      whileInView="show"
    >
      <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30]">
        Our Services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-16">
        {serviceData.map((item) => (
          <>
            <ServiceCard
              imageUrl={item.imgUrl}
              desciption={item.description}
              title={item.title}
            />
          </>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
