import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          //"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          "url(/images/banner1.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Stories Worth Reading</h1>
          <p className="mb-5">
            Discover, explore, and collect books you'll love. Thousands of
            titles — all in one place.
          </p>
          <button className="btn btn-primary">Browse Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
