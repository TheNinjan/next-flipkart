import React from "react";
import Image from "next/image";
import Beauti from "@/Images/bestOf/beauti.png";
import Slider from "../Slider";
import { beautyData } from "@/constant/beaty";
const Beauty = () => {
  return (
    <div className="h-[20rem]  w-full max-w-[1450px] mt-2  bg-white  flex p-2">
      <div className="w-[15%]  ">
        <div className="flex flex-col justify-center items-center h-[70%]">
          <p className="text-bold text-[32px] text-center">
            Best Beauty,Toy & More
          </p>
          <button className="p-3 bg-flipkart_blue text-center text-white">
            {" "}
            View All
          </button>
        </div>
        <div className=" relative  h-[30%]">
          <Image
            className="absolute bottom-0"
            src={Beauti}
            width={350}
            height={350}
            alt="ele"
          />
        </div>
      </div>
      {/* Slider for beauty and toy */}
      <div className="w-[85%] h-[20rem]">
        <div className="flex flex-2 overflow-hidden">
          <Slider product={beautyData} />
        </div>
      </div>
    </div>
  );
};

export default Beauty;
