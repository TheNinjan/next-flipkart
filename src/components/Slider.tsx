"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
const Slider = ({ product }: any) => {
  return (
    <Swiper spaceBetween={5} slidesPerView={5} navigation={true}>
      {product.map((item: any) => (
        <SwiperSlide key={item._id}>
          <Link href="/catogary">
            <div className="p-1 min-w-[13rem] h-[20rem]  justify-center items-center shadow-sm relative">
              <Image
                className=" mt-5 hover:scale-110 duration-300"
                src={item.image}
                width={200}
                height={200}
                alt={item.title}
              />
              <div className="absolute bottom-3">
                <p className="ml-10 text-center text-black ">
                  {item.title.substring(0, 10)}
                </p>
                <p className="ml-5 text-green-500 text-center">
                  From {item.price}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
