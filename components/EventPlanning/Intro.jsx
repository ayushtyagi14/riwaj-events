import React from "react";

const Intro = () => {
  return (
    <div className="text-white w-[90%] mx-auto my-10 flex flex-col gap-10 items-center">
      <p className="md:text-[24px] font-light md:text-center">
        With a decade plus of events under our belt, Riwaj Events offers a team
        of established industry professionals and emerging talent that can match
        your pacing and expectations at each step of an otherwise long and
        tasking process. Our Event Artists familiarize themselves with your
        personality, taste, family priorities, event priorities, and aesthetic
        to execute a balancing act between each individual aspect of your event.
        Our trusted industry collaborators offer a wide selection of vendors at
        all levels and budgets to create a vendor team that can deliver. With
        our team, planning your big event will feel like a choose-your-own
        adventure and allow you to remain stress-free and ready to enjoy a day
        that is meant to be all about you
      </p>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full rounded-lg"
      >
        <source src="/event-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
