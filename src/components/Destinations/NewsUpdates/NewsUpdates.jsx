import React from "react";
import Slider from "./Slider";

const NewsUpdates = () => {
  return (
    <>
      <div className="container my-20">
        <div className="text-center">
          <p className="text-3xl lg:text-[53px] font-bold text-center veneer pb-4">
            Fly Fishing Travel News & Updates
          </p>
          <hr className="w-20 mx-auto border-orange-500 border-t-4 mb-16"></hr>
        </div>
        <Slider></Slider>
      </div>
    </>
  );
};

export default NewsUpdates;
