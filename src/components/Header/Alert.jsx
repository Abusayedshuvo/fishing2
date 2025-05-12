import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Alert = () => {
  return (
    // Top Alert Start
    <>
      <div className="bg-orange-500 text-center text-xs uppercase">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          speed={2000}
          loop={true} 
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Mousewheel, Pagination, Autoplay]}
          className="mySwipe h-10"
        >
          <SwiperSlide>
            <p className="font-bold text-black py-3">
              FAST &amp; FREE SHIPPING ON ORDERS OVER $49
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-bold text-black py-3">
              With Every Trip Booked & Product Sold!
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-bold text-black py-3">
              Win a Golden Mahseer Trip to India
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
    // Top Alert End
  );
};

export default Alert;
