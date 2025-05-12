import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const menus = (
    <>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/destinations">Destinations</NavLink>
      </li>
      <li>
        <NavLink to="/team">Team</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className="p-2 z-50 w-40">
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <a href="destinations.html"> Destinations</a>
            </li>
            <li>
              <a href="team.html"> Team </a>
            </li>
            <li>
              <a href="blog.html"> Blog </a>
            </li>
            <li>
              <a href="blog-details.html"> Blog Details </a>
            </li>
            <li>
              <a href="account-login.html"> Login </a>
            </li>
            <li>
              <a href="signup.html"> Sing Up</a>
            </li>
            <li>
              <a href="pricing-policy.html"> Pricing Policy</a>
            </li>
            <li>
              <a href="returns-policy.html"> Returns Policy</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="">
        <a
          href="account-login.html"
          className="    text-orange-500 font-semibold"
        >
          Login
        </a>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 px-0 container">
        <div className="navbar-start w-full md:w-1/2 justify-between md:justify-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold veneer pe-5 lg:pe-0">
            Fishing <span className="text-orange-500"> Frenzy</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 items-center font-semibold text-base">
            {menus}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
