import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaUser,
  FaCartShopping,
} from "react-icons/fa6";
import { Link } from "react-router";
const TopNav = () => {
  return (
    <>
      {/* Top Nav Start */}
      <div className="bg-black text-orange-500  text-sm font-semibold  ">
        <div className="container hidden md:flex justify-between items-center">
          <div className="flex">
            <div>
              <FaPhone className="mr-2 inline-block" />
              <Link href="tel:406-585-8667">888-777-5060</Link>
              <span className="border-r-2 px-1 mr-3"></span>
              <Link href="tel:406-585-8667">406-585-8667</Link>
            </div>
            <div className="ml-10">
              <i className="fa-regular fa-envelope mr-2"></i>
              <FaEnvelope className="mr-2 inline-block" />
              <Link href="mailto:example@gmail.com">example@gmail.com</Link>
              <span className="border-r-2 px-1 mr-3"></span>
              <Link href="mailto:yourmail@gmail.com">yourmail@gmail.com</Link>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <Link href="#">
              <i className="fa-solid fa-heart pr-2"></i>
              <FaHeart className="mr-2 inline-block" />
              Favorites
            </Link>
            <Link href="#">
              <FaUser className="mr-2 inline-block" />
              Account
            </Link>
            <Link to="/cart" className="bg-orange text-white px-4 py-2">
              <FaCartShopping className="mr-2 inline-block" />
              Cart
            </Link>
          </div>
        </div>
      </div>
      {/* top nav end */}
    </>
  );
};

export default TopNav;
