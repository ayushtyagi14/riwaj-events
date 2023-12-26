import React from "react";

const Intro = () => {
  return (
    <div className="text-white w-[90%] mx-auto my-10 flex flex-col gap-10 items-center">
      <p className="md:text-[24px] font-light md:text-center italic">
        Our centerpieces are catered to a variety of styles and tastes from
        contemporary pieces to more traditional styles. We specialize in floral
        centerpieces as well as centerpieces with south asian and middle eastern
        influences. All of our centerpieces are designed to complement your
        stage as well as stand on their own. Don&apos;t find what you like? No
        worries! Our design team can craft the perfect centerpiece for your
        tables using your input and our knowledge! Nevertheless, your guests
        will be left in awe at the intricate details and beauty that will be
        present at every table on your special day!
      </p>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full rounded-lg"
      >
        <source src="/centerpiece-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;
