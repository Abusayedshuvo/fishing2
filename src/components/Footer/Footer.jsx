import React, { useEffect, useState } from "react";
import NewsLater from "./NewsLater";
import Links from "./Links";
import moment from "moment";

const Footer = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetch("/footer-links.json")
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto pb-10 pt-20 px-5 xl:px-0">
          <NewsLater></NewsLater>
          <hr className="border-t border-gray-600 mt-7 pt-10" />
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-x-10">
            {links?.map((subLink) => (
              <div key={subLink?.id}>
                <p className="text-sm font-bold text-orange-500">
                  {subLink?.subCategory}
                </p>
                <div className="pt-3">
                  <Links items={subLink?.items}></Links>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-center pt-20 text-gray-600 font-medium">
            © {moment().format("YYYY")} Fishing Frenzyg Adventures
            <span className="px-3">|</span>
            <a href="#">Terms & Conditions</a>
            <span className="px-3">|</span>
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
