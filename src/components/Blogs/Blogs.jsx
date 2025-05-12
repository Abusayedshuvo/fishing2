import React from "react";
import img1 from "../../assets/00003.jpg";
import img2 from "../../assets/00002.jpg";
import img3 from "../../assets/00004.jpg";
import img4 from "../../assets/00005.jpg";
import img5 from "../../assets/00001.jpg";
import { Link } from "react-router";

const Blogs = () => {
  return (
    <>
      <div>
        <div className="bg-[url('../src/assets/bg-blogs.png')] h-[500px] bg-no-repeat bg-cover mx-auto relative bg-center">
          <div className="absolute bottom-[15%] left-[18%] text-white">
            <p className="text-3xl font-bold">FIELD INVESTIGATIONS</p>
            <p>
              Explore our field investigations for comprehensive <br />
              insights into environmental conditions,
              <br />
              habitat assessments, and wildlife <br />
              observations. Get informed today
            </p>
            <button className="mt-5 text-black font-bold border-2 border-orange-500 px-10 py-3 bg-orange-500 hover:bg-black hover:text-orange-500 hover:transition-all hover:duration-300 transition-all duration-300">
              WATCH FILMS
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-5 pt-5 gap-5">
          <div className="relative">
            <Link href="#">
              <img src={img1} alt="" className="img-fluid" />
            </Link>
            <div className="bottom-12 md:bottom-32 lg:bottom-32 left-5 lg:left-32 md:left-40 absolute text-white">
              <Link
                className="text-xl lg:text-3xl md:text-xl font-bold mt-5"
                href="#"
              >
                Voyage Updates & Equipment Insights
              </Link>
            </div>
          </div>
          <div className="relative">
            <Link href="#">
              <img src={img2} alt="" className="img-fluid" />
            </Link>
            <div className="bottom-12 md:bottom-32 lg:bottom-32 left-5 lg:left-32 md:left-40 absolute text-white">
              <Link
                className="text-xl lg:text-3xl md:text-xl font-bold"
                href="#"
              >
                Access All Areas Travel Diary
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-5 pt-5 gap-5 pb-5">
          <div className="relative">
            <Link href="#">
              <img src={img3} alt="" className="img-fluid" />
            </Link>
            <div className="bottom-20 md:bottom-32  left-5 xl:left-24  absolute text-white">
              <Link className="text-xl lg:text-3xl font-bold" href="#">
                Guiding Light Podcast
              </Link>
            </div>
          </div>
          <div className="relative">
            <Link href="#">
              <img src={img4} alt="" className="img-fluid" />
            </Link>
            <div className="bottom-20 md:bottom-32  left-5  lg:left-24  absolute text-white">
              <Link className="text-xl lg:text-3xl font-bold" href="#">
                Big Sky Fishing Updates
              </Link>
            </div>
          </div>
          <div className="relative">
            <Link href="#">
              <img src={img5} alt="" className="img-fluid" />
            </Link>
            <div className="bottom-20 md:bottom-32 left-5 xl:left-24 absolute text-white">
              <Link className="text-xl lg:text-3xl font-bold" href="#">
                Neighborhood & Sustainability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
