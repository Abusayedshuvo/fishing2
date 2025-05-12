import React from "react";
import guide1 from "../../../assets/guide-1.jpg";
import guide2 from "../../../assets/guide-2.jpg";
import guide3 from "../../../assets/guide-3.jpg";
import guide4 from "../../../assets/guide-4.jpg";
import guide5 from "../../../assets/guide-5.jpg";

const Guide = () => {
  return (
    <>
      {/* Quick Reference area start  */}
      <div className="container mx-auto py-20">
        <p className="font-bold text-2xl  uppercase text-center pb-10">
          Rapid Guide Legend
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-5 justify-center mx-5 space-y-10 xl:space-y-0">
          <div className="text-center">
            <img src={guide1} alt="" className="img mx-auto w-10" />
            <p className="font-bold pt-2">Dive / Snorkel Program On-site</p>
          </div>
          <div className="text-center">
            <img src={guide2} alt="" className="img mx-auto w-10" />
            <p className="font-bold pt-2">On-Site Gear</p>
          </div>
          <div className="text-center">
            <img src={guide3} alt="" className="img mx-auto w-10" />
            <p className="font-bold pt-2">Preferred Couples Destination</p>
          </div>
          <div className="text-center">
            <img src={guide4} alt="" className="img mx-auto w-10" />
            <p className="font-bold pt-2">Familly Destination</p>
          </div>
          <div className="text-center">
            <img src={guide5} alt="" className="img mx-auto w-10" />
            <p className="font-bold pt-2">Wi-Fi Available</p>
          </div>
        </div>
      </div>
      {/* Quick Reference area end  */}
    </>
  );
};

export default Guide;
