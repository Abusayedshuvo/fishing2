import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="px-5 xl:px-0">
          <p className="text-[40px] font-bold veneer">SHOP ALL-NEW PRODUCTS</p>
          <hr className="w-20 border-orange-500 border-t-4" />

          <p className=" pb-10 pt-3">
            Discover latest arrivals! Explore our fresh collection of innovative
            products.
          </p>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper !px-5 xl:!px-0 pb-10 "
        >
          {products.map((product) => (
            <SwiperSlide className="pb-10" key={product.id}>
              <Product product={product}></Product>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Products;
