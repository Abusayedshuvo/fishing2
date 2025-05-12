import React from "react";
import ctaImg from "../../assets/010222.png";
import shape1 from "../../assets/compass-1.png";
import shape2 from "../../assets/compass-2.png";

const CTA = () => {
  return (
    <>
      <div className="bg-[#E4E5E0] pb-32 lg:pb-10">
        <div className="">
          <img className="h-14 w-full object-cover" src={ctaImg} alt="" />
        </div>
        <div className="relative">
          <div className="bg-[url('./assets/bg-010.webp')] h-[400px] bg-no-repeat bg-cover mx-auto"></div>
          <div className="top-20 left-0 right-0 mx-auto absolute text-center px-5 lg:px-0">
            <p className="text-2xl xl:text-[40px] veneer font-bold pb-4 leading-10 text-center">
              {` WE'RE THE ONES WHO CAN ELEVATE `} <br />
              <span className="ps-0 lg:ps-20">YOUR NEXT JOURNEY</span>
            </p>
            <hr className="w-20 border-orange-500 border-t-4 mx-auto" />

            <p className="pt-7">
              Trust us to elevate your next journey with expert guidance,
              personalized itineraries,
              <br />
              and unforgettable experiences. Whether you adventure or
              relaxation, our team ensures <br />
              every aspect of your trip exceeds expectations. Let us turn your
              travel dreams into reality.
            </p>
            <div className="pt-10">
              <button className="text-black border-orange-500 border-2 py-2 px-10 font-bold bg-orange-500 hover:bg-black hover:text-white transition-all duration-300 hover:transition-all hover:duration-300">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="absolute top-24 right-0">
            <img src={shape1} alt="" className="img-fluid w-36 top-0" />
          </div>
          <div className="absolute top-0 left-0-0">
            <img src={shape2} alt="" className="img-fluid w-44 top-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
