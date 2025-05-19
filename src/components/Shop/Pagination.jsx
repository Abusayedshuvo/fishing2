import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Pagination = () => {
  return (
    <>
      <div className="relative">
        <Breadcrumb></Breadcrumb>
        <div className="bottom-0 absolute text-white bg-black py-10 w-full block xl:flex border-b-8 border-orange-500">
          <div className="container veneer">
            <p className="text-xl mb-2 text-orange">
              Shop <span className="text-white px-1"> | </span> Fly Rods
            </p>
            <p className="text-[54px]  ">Echo Fly Rods</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
