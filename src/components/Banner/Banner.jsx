import React from "react";
import "./Banner.css";
import { FaCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <div className="overflow-hidden Banner">
        <div className="banner relative bg-black h-[520px] xl:h-[720px]">
          <div className="homeHero__backgroundWrapper">
            <iframe
              className="banner-bg"
              src="https://player.vimeo.com/video/333153674?background=1"
              allow="autoplay; fullscreen"
              allowFullScreen=""
              data-gtm-yt-inspected-6395001_35="true"
              data-gtm-yt-inspected-12="true"
            ></iframe>
          </div>

          <div className="homeHero__inner">
            <div className="homeHero__content w-full lg:w-2/3 ml-0 px-5 lg:px-0">
              <h1 className="text-3xl md:text-5xl lg:text-8xl text-orange-500 uppercase veneer">
                <span className="text-white">Experience Fly</span>Fishing
                Worldwide - Your Go-To for Travel & Gear Expertise E
              </h1>
              <button
                className="border-orange-500 border-2 bg-orange-500 mt-5 font-semibold py-4 px-10 flex items-center text-black"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                WATCH VIDEO
                <FaCirclePlay className="ps-2 text-xl" />
              </button>

              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box h-[400px] min-h-[400px] max-w-3xl  bg-transparent">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 text-white">
                      ✕
                    </button>
                  </form>

                  <iframe
                    className="w-full"
                    height="350"
                    src="https://www.youtube.com/embed/jWMh_npaqXE?si=eJXnTfphRob2rkQR&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.yellowdogflyfishing.com"
                    title="Yellow Dog Flyfishing - Launch"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen=""
                    data-gtm-yt-inspected-6395001_35="true"
                    id="862136916"
                    data-gtm-yt-inspected-18="true"
                  ></iframe>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
