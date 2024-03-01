import React from "react";

const Intro = () => {
  return (
    <div className="text-white w-[90%] mx-auto my-10 flex flex-col gap-10 items-center">
      <p className="md:text-[24px] font-light md:text-center italic block lg:hidden">
        Our talented team of floral artists are well versed in industry trends
        and traditions. In addition to offering a wide array of styles and
        compositions, we customize all of our arrangements and curate the design
        of each piece with our clients beforehand. This means each flower is
        hand-picked and placed with your eye for florals in mind. Our custom
        arrangement options allow for any arrangement, color scheme, or design,
        to be created or re-created in both silk and fresh florals. Our floral
        designers will work with you each step of the way to create the wedding
        florals you have always dreamed of.
      </p>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full rounded-lg"
      >
        <source
          src="https://res.cloudinary.com/drn5wtwrx/video/upload/v1709332863/public/floral-video_mc3vz6.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex flex-col items-center mt-5 mb-16 text-white">
        <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30] mb-3">
          Pricing
        </h1>
        <div className="pricing-card flex flex-col items-center gap-5 p-8 cursor-pointer italic">
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
            <p className="text-center text-[18px]">
              <span className="font-bold text-[18px]">Small:</span> <br />{" "}
              $75-$125
            </p>
            <p className="text-center text-[18px]">
              <span className="font-bold text-[18px]">Medium:</span> <br />{" "}
              $100-$150(Silk $75)
            </p>
            <p className="text-center text-[18px]">
              <span className="font-bold text-[18px]">Large:</span> <br />{" "}
              $175-$200 (Silk $100)
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-8 text-[18px]">
            <p>
              <span className="font-bold">Custom Arrangement: </span> <br />{" "}
              $250-$1200
            </p>
            <p>
              <span className="font-bold">Head Tables & Runners: </span> <br />
              $250-$400
            </p>
            <br />
            <p>
              <span className="font-bold">Bridal Bouquet: </span> <br />{" "}
              $125-$200
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
