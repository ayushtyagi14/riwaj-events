import React from "react";

const Intro = () => {
  return (
    <div className="text-white w-[90%] mx-auto my-10 flex flex-col gap-10 items-center">
      <p className="md:text-[24px] font-light md:text-center italic block lg:hidden">
        South Asian weddings are a tapestry of cultural diversity, with Nikah
        symbolizing Islamic unions through Quranic verses and a joyous Walima
        feast. Hindu weddings weave vibrant threads of pre-wedding rituals like
        Mehendi and Sangeet, leading to a sacred fire ceremony where vows are
        exchanged. Sikh weddings, or Anand Karaj, take place in Gurudwaras,
        emphasizing spiritual unity through hymns from the Guru Granth Sahib,
        followed by a communal Langar. Each ceremony reflects the region&apos;s
        richness, blending religious traditions, cultural practices, and
        familial celebrations.
      </p>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full rounded-lg"
      >
        <source src="/ceremonies-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
