import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router";

const Slider = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  console.log(news);

  return (
    <div className="relative px-5 lg:px-0">
      <div className="absolute top-1/2 !left-[-50px] z-10 -translate-y-1/2 cursor-pointer swiper-button-prev !hidden !lg:flex"></div>
      <div className="absolute top-1/2 !right-[-50px] z-10 -translate-y-1/2 cursor-pointer swiper-button-next !hidden !lg:flex"></div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {news.map((singNews) => (
          <SwiperSlide key={singNews.id}>
            <div className="shadow-xl hover:-translate-y-2 hover:transition-all hover:duration-300 transition-all duration-300 mb-10">
              <Link className="" href="#">
                <img src={singNews.img} alt="" className="img-fluid" />
              </Link>

              <div className="py-5 px-5">
                <div className="text-end mt-[-18px]">
                  <button>
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
                <Link className="text-lg font-bold hover:text-orange-500 hover:transition-all hover:duration-300 transition-all duration-300">
                  {singNews.title}
                </Link>

                <p className="font-bold text-orange-500 uppercase mt-4">
                  Read More
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
