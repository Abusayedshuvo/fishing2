import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";

const NewsLater = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <p className="text-3xl xl:text-6xl font-bold text-orange-500 mr-0 xl:mr-10">
            NEWSLETTER SIGNUP
          </p>
        </div>
        <div className="border-b border-white flex justify-between pt-5">
          <input
            className="bg-transparent mb-0 focus:border-black focus:shadow-none w-full text-white focus-visible:outline-0"
            type="text"
            id="email"
            name="email"
            placeholder="Type your email"
          />
          <button className="text-orange-500 font-medium text-xs mb-0">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="md:flex px-0 xl:px-5 justify-center text-center mt-8">
        <div className="pt-5">
          <button className="w-full xl:w-auto border-orange-500 border-2 py-4 px-12 font-bold text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 hover:transition-all hover:duration-300">
            CONTACT US
          </button>
        </div>
        <div className="pt-5 ps-0 lg:ps-5">
          <button className="w-full xl:w-auto border-orange-500 border-2 py-4 px-5 font-bold text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 hover:transition-all hover:duration-300">
            DOWNLOAD CATALOG
          </button>
        </div>
      </div>
      <div className="px-5  pt-5  text-center">
        <span className="text-orange-500 text-xs font-medium">
          <FaPhone className="me-2  inline-block" />
          125-463-2558
        </span>
        <span className="text-white px-1">-</span>
        <span className="text-orange-500 text-xs font-medium">
          125-023-2589
        </span>
      </div>
      <div className="px-5  pt-3 lg:ms-0 ms-0 text-center text-xl">
        <Link className="  text-white me-3" href="#">
          <FaFacebookF className="inline-block" />
        </Link>
        <Link className=" text-white me-3" href="#">
          <FaXTwitter className="inline-block" />
        </Link>
        <Link className="  text-white me-3" href="#">
          <FaInstagram className="inline-block" />
        </Link>
        <Link className="  text-white me-3" href="#">
          <FaYoutube className="inline-block" />
        </Link>
      </div>
    </>
  );
};

export default NewsLater;
