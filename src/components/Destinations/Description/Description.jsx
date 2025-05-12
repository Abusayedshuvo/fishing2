import React from "react";

const Description = () => {
  return (
    <>
      <div className=" bg-[#f1f1f1] py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4">
            <div className="col-span-1 my-auto text-left xl:text-right px-5 xl:px-0 ">
              <a
                className="text-3xl font-bold veneer mb-10 xl:mb-0 inline-block"
                href="/"
                data-discover="true"
              >
                Fishing <span className="text-orange-500"> Frenzy</span>
              </a>
            </div>
            <div className="col-span-3">
              <div className="w-full lg:w-2/3 px-5 lg:px-0 xl:mx-auto">
                <p className="font-bold text-2xl">Fly Fishing The Outback</p>
                <p className="py-5">
                  {`Immerse yourself in the unparalleled beauty of the world's
            bonefishing capital. With crystal-clear waters and abundant marine
            life, it's an angler's paradise. Explore pristine flats, cast your
            line for elusive bonefish, and create unforgettable memories in this
            tropical haven. Book your adventure now and discover the thrill of
            bonefishing in this stunning destination.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
