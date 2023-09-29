import React from "react";

const Intro = () => {
  return (
    <div className="text-white w-[90%] mx-auto my-10 flex flex-col gap-10 items-center">
      <p className="md:text-[24px] font-light md:text-center">
        Our design team uses a variety of techniques to create a wedding stage.
        We cater the overall design and feel of the stage to the preferences of
        our Bride and Groom by using elements such as draping, framing, and
        floral work. Each stage and color profile is selected with an emphasis
        on making sure that the Bride and Groom remain the focal point of the
        guests. From the second your guests enter the venue, they will find
        themselves drawn to, and mesmerized by the intricate beauty that will
        showcase the two most important people in the room.
      </p>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full rounded-lg"
      >
        <source src="/decor-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
