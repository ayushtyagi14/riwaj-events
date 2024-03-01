import React from "react";

const Intro = () => {
  return (
    <div className="text-white w-[90%] mx-auto my-10 flex flex-col gap-10 items-center">
      <p className="md:text-[24px] font-light md:text-center italic block lg:hidden">
        The tradition of the Mehndi is rooted in color and spectacle and our
        stages are no different. By combining a rich palette of earthy greens,
        vibrant yellows, deep blues, and a myriad of other colors, we make sure
        that the atmosphere of the venue is just as colorful as the journey that
        you and your loved one are about to embark on! We accent this colorful
        scene with traditional South Asian and Middle Eastern pottery and
        quilt-work. Floral frames and arrangements may also be implemented to
        embellish the other decorations. Our mehndi designs are a perfect tool
        to create a lively event and set the tone for grand celebration!
      </p>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full rounded-lg"
      >
        <source
          src="https://res.cloudinary.com/drn5wtwrx/video/upload/v1709332857/public/decor-video_nce6uj.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Intro;
