import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="mb-8 md:mb-16 mt-40 md:mt-[190px] w-[90%] md:w-[95%] md:ml-24 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 items-center text-white">
        <div className="relative mx-auto md:mx-0">
          <img
            src="/aliya-salem.jpg"
            alt="aliya-salem"
            width={250}
            className="rounded-lg"
          />
          <div className="pricing-card mx-auto absolute p-2 -top-20 md:-top-16 -right-0 md:-right-16 w-full md:w-[250px] z-[1]">
            <p className="text-center text-[14px]">
              My name is Aliya Salem and I would like to congratulate you on
              taking the first steps to planning your perfect wedding!
            </p>
          </div>
          <div className="pricing-card mx-auto absolute p-2 -bottom-24 md:-bottom-28 -right-0 md:-right-16 w-full md:w-[250px] z-[1]">
            <p className="text-center text-[14px]">
              Riwaj means &quot;tradition&quot; and at Riwaj, we make sure that
              your wedding day successfully captures the beauty of traditional
              influences that have been centuries in the making.
            </p>
          </div>
        </div>
        <div className="relative mx-auto md:mx-0">
          <img
            src="/mehndi-banner.jpg"
            alt="mehndi"
            width={300}
            className="rounded-lg"
          />
          <div className="pricing-card mx-auto absolute p-2 -top-20 md:-top-20 -right-0 md:-right-16 w-full md:w-[250px] z-[1]">
            <p className="text-center text-[14px]">
              Drawing influence from the rich and colorful traditions of South
              Asia and the Middle East, Riwaj puts a contemporary twist on
              visual philosophies that have been centuries in the making.
            </p>
          </div>
          <div className="pricing-card mx-auto absolute p-2 -bottom-28 md:-bottom-32 -right-0 md:-right-16 w-full md:w-[250px] z-[1]">
            <p className="text-center text-[14px]">
              By combining our 10+ years of industry experience with our
              philosophy of design, we make sure that your special day is not
              only a celebration for the books, but also a work of art!
            </p>
          </div>
        </div>
        <div className="mx-auto md:mx-0">
          <img
            src="/centerpiece-banner.jpg"
            alt="centerpiece"
            width={250}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
