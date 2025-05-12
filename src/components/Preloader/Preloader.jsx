import React from "react";
const Preloader = () => {
  return (
    <>
      <div className="text-center h-[100vh] flex justify-center items-center absolute top-0 left-0 right-0 w-full z-10 bg-white">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </>
  );
};

export default Preloader;
