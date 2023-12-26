import React from "react";

const Floral = () => {
  return (
    <>
      <div className="flex flex-col items-center w-[90%] mx-auto mt-5 mb-16 text-white">
        <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30] mb-3">
          Floral
        </h1>
        <div className="pricing-card flex flex-col items-center gap-5 p-8 cursor-pointer">
          <p className="font-vibes text-[30px] bg-[#d59a30] py-2 px-4 rounded-full text-center">
            Bouquets and Arrangements
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 italic">
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
          <div className="flex flex-col items-center text-center mt-8 text-[18px] italic">
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
    </>
  );
};

export default Floral;
