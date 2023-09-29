import React from "react";

const Calendly = () => {
  return (
    <div className="w-[90%] mx-auto mb-16">
      <h1 className="text-center md:text-[80px] text-[40px] font-vibes text-[#d59a30]">
        Contact Us
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 text-white mt-5 border border-white lg:p-10 p-5 pb-10 rounded-xl">
        <div className="flex flex-col items-start gap-5">
          <h1 className="md:text-[50px] text-[32px] text-center md:text-start font-vibes lg:w-[70%] w-full">
            Book Your Consultation Today!
          </h1>
          <p className="text-[18px] font-thin text-center lg:text-start">
            Any questions? Not a problem! Meet with one of our event
            coordinators to discuss the details of your event, desired services,
            and pricing options. Our team of professionals will ensure that all
            of your needs and concerns are catered-to at every step of the
            process. So don&apos;t stress and book your consultation today, we&apos;ll
            take care of the rest!
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-0 mt-5 lg:mt-0 lg:items-end h-full justify-around">
          <button className="bg-[#d59a30] md:px-4 px-2 md:py-2 py-1 rounded-xl">
            Schedule 45-Minutes Virtual Consultation
          </button>
          <button className="bg-[#d59a30] md:px-4 px-2 md:py-2 py-1 rounded-xl">
            Schedule 1 hour In-Person Consultation
          </button>
          <button className="bg-[#d59a30] md:px-4 px-2 md:py-2 py-1 rounded-xl">
            Schedule 30-Minutes Phone Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendly;
