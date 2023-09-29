import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col items-center gap-10 my-10 w-[90%] mx-auto">
      <h1 className="md:text-[70px] text-[50px] text-center font-vibes leading-tight text-[#d59a30]">
        Welcome to Riwaj Decor!
      </h1>
      <div className="text-white grid lg:grid-cols-2 grid-cols-1 items-start">
        <img
          src="/aliya-salem-full.jpg"
          alt="Aliya Salem Riwaj Events"
          className="lg:h-screen ml-10 lg:block hidden rounded-xl"
        />
        <p className="flex flex-col lg:text-end text-center h-full justify-between">
          My name is Aliya Salem and I would like to congratulate you on taking
          the first steps to planning your perfect wedding! Riwaj means
          “tradition” and at Riwaj, we make sure that your wedding day
          successfully captures the beauty of traditional influences that have
          been centuries in the making. By combining our industry experience
          with our philosophy of design, we make sure that your special day is
          not only a celebration for the books, but also a work of art!
          <br />
          <img
            src="/aliya-salem-full.jpg"
            alt="Aliya Salem Riwaj Events"
            className="lg:hidden block rounded-xl"
          />
          <br />
          Here at Riwaj we have a team of talented designers who will take
          inspiration from your imagination and create a custom wedding for you.
          We specialize in floral design, mandaps, chuppahs, drapes,
          centerpieces, backdrops, linens, chair covers and many more.
          <br />
          <br />
          All you have to worry about is enjoying the journey, whether it be a
          wedding, reception or colorful mehndi, book your event with us and
          rest-assured, your event will be managed by a team of professionals
          that will make your event stylish and memorable! The work of our
          creative team will leave a lasting impression on your guests.
          <br />
          <br />
          Every bride dreams of her wedding from the day she was a little girl.
          That is exactly why me and my team will be there with you every step
          of the way. After all, a flawless bride deserves a flawless wedding.
          <br />
          <br />
          Create the wedding you&apos;ve always dreamed of, with the magic of
          Riwaj!
        </p>
      </div>
    </div>
  );
};

export default Main;
