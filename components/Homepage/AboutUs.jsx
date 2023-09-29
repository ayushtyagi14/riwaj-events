import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="text-white my-16 grid md:grid-cols-3 grid-cols-1 items-center gap-10 w-[90%] mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-[50px] font-vibes leading-tight text-[#d59a30]">
            Riwaj means <br /> &quot;Tradition&quot;
          </h1>
          <p>
            My name is Aliya Salem and I would like to congratulate you on
            taking the first steps to planning your perfect wedding!
          </p>
          <img src="/aliya-salem.jpg" alt="Aliya Salem Riwaj Events" className="rounded-lg" />
        </div>

        <div className="flex flex-col items-center text-center gap-6">
          <p>
            Riwaj means “tradition” and at Riwaj, we make sure that your wedding
            day successfully captures the beauty of traditional influences that
            have been centuries in the making.
          </p>
          <img
            src="/decor1.jpg"
            alt="Riwaj Events Image"
            className="rounded-lg"
          />
          <p>
            Drawing influence from the rich and colorful traditions of South
            Asia and the Middle East, Riwaj puts a contemporary twist on visual
            philosophies that have been centuries in the making.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-6">
          <p>
            Our stages and centerpieces will take you and your guests back to a
            time of royalty and embellishment. A visual work of Art that will be
            unique to you and the wedding you have always dreamed of. By
            combining our 10+ years of industry experience with our philosophy
            of design, we make sure that your special day is not only a
            celebration for the books, but also a work of art!
          </p>
          <button className="bg-[#d59a30] rounded-full px-6 py-3">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
