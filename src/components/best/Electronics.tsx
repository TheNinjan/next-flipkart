import React from "react";
import Image from "next/image";
import Electonic from "@/Images/bestOf/electronics.png";
import { electronicsProduct } from "@/constant/electronics";
import "swiper/css";
import Slider from "../Slider";
const Electronics = () => {
  return (
    <div className="h-[20rem]  w-full max-w-[1450px] mt-1  bg-white  flex p-2">
      <div className="w-[15%]  ">
        <div className="flex flex-col justify-center items-center h-[70%]">
          <p className="text-bold text-[32px] text-center">
            Best Of Electronics
          </p>
          <button className="p-4 bg-flipkart_blue text-center text-white">
            {" "}
            View All
          </button>
        </div>

        <div className=" relative  h-[30%]">
          <Image
            className="absolute bottom-0"
            src={Electonic}
            width={350}
            height={350}
            alt="ele"
          />
        </div>
      </div>
      {/* Slider for electronics */}
      <div className="w-[85%] h-[20rem]">
        <div className="flex gap-2 w-full overflow-x-auto">
          <Slider product={electronicsProduct} />
        </div>
      </div>
    </div>
  );
};

export default Electronics;
