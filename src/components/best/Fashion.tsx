import React from "react";
import Image from "next/image";
import Fashionv from "@/Images/bestOf/fashion.png";
import Slider from "../Slider";
import { fashionData } from "@/constant/fashion";
const Fashion = () => {
  return (
    <div className="h-[20rem]  w-full max-w-[1450px] mt-2  bg-white  flex p-2">
      <div className="w-[15%]  ">
        <div className="flex flex-col justify-center items-center h-[70%]">
          <p className="text-bold text-[32px] text-center">Best Of Fashion</p>
          <button className="p-3 bg-flipkart_blue text-center text-white">
            {" "}
            View All
          </button>
        </div>
        <div className=" relative  h-[30%]">
          <Image
            className="absolute bottom-0"
            src={Fashionv}
            width={350}
            height={350}
            alt="ele"
          />
        </div>
      </div>
      {/* Slider for fashion */}
      <div className="w-[85%] h-[20rem]">
        <div className="flex flex-2 overflow-hidden">
          <Slider product={fashionData} title={"Fashion Products"} />
        </div>
      </div>
    </div>
  );
};

export default Fashion;
