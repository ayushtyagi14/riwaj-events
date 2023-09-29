import React from "react";

const PageGallery = ({ galleryData }) => {
  return (
    <>
      <h1 className="text-center md:text-[80px] text-[50px] font-vibes text-[#d59a30] mb-3">
        Gallery
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 w-[90%] mx-auto gap-5 mb-16">
        {galleryData.map((item) => (
          <div className="" key={item.id}>
            {item.itemType === "image" && (
              <img
                src={item.imgUrl}
                alt={`Gallery ${item.id}`}
                className="w-full rounded-lg"
              />
            )}
            {item.itemType === "video" && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full rounded-lg"
              >
                <source src={item.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PageGallery;
