import React from "react";

const CTA2 = () => {
  return (
    <>
      <div className="bg-[url('../app/assest/cta2-bg.jpg')] h-[500px] bg-no-repeat bg-cover mx-auto relative bg-center">
        <div className="container relative  h-[520px] xl:h-[720px]">
          <div className="w-full lg:w-2/3 ml-0 px-5 lg:px-0 py-20">
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-orange-500 uppercase veneer ">
              <span className="text-white">Experience Fly</span>Fishing
              Worldwide - Your Go-To for Travel & Gear Expertise E
            </h1>
            <button className="mt-5 text-black font-bold border-2 border-orange-500 px-10 py-3 bg-orange-500 hover:bg-black hover:text-orange-500 hover:transition-all hover:duration-300 transition-all duration-300 uppercase">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA2;
