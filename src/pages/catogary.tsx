import CatProduct from "@/components/best/CartProduct";
import { wholedata } from "@/constant/wholedata";
import Image from "next/image";
import React from "react";
import CategoryImg from "@/Images/bestOf/electronics.png";
import RangeSlider from "@/components/DragInput";
import CartProduct from "@/components/best/CartProduct";

const catogary = ({ items }: any) => {
  return (
    <div className="w-full flex h-full p-2 m-2">
      <div className="w-[20%]  h-full">
        <div className="w-full h-[13rem] bg-white">
          <div>
            <Image src={CategoryImg} width={450} height={450} alt="ll" />
            <hr className="mt-1" />
          </div>
          <div className="p-4">
            <p className="font-semibold text-md">Latest Product</p>
            <p className="text-xs">Sale is live from 140</p>
          </div>
        </div>
        <div className="mt-2 bg-white">
          <div className="p-4 text-xl font-semibold">Filters</div>
          <hr />
          <div className="p-4">
            <p>Category</p>
            <p className="text-gray-500 text-sm"> {"<"}Eletronics</p>
            <p className="text-gray-500 text-sm">{"<"}Fashion</p>
            <p className="text-gray-500 text-sm">{"<"}Beauty</p>
            <p className="text-gray-500 text-sm">{"<"}Groccery</p>
            <p className="text-md font-semibold">
              <span className="text-white">llo</span>Home
            </p>
          </div>
          <hr className="mt-1" />
          <div>
            <RangeSlider />
          </div>
        </div>
      </div>
      <div className="w-[80%] bg-white ml-2 shadow-lg">
        <div className="p-2">
          <a href="#" className="text-xs text-gray-400">
            Home {">"} Product
          </a>
          <br />
          <a href="#" className="text-xs text-flipkart_blue">
            Dell Computers ,Assembled Computers ,DELL Computers ,WD Computers
            ,Audio Players ,MSI Computers ,Amkette Computers ,BenQ Computers
            ,DEZFUL Computers ,Hynix Computers
          </a>
          <br />
          <div className="flex gap-2 p-2 items-center">
            <p className="text-[1rem] font-[500]">Wireless Mouse KEB </p>
            <p className="text-xs text-gray-400">
              (Showing 1 – 39 products of 39 products)
            </p>
          </div>
          <div className="flex justify-start gap-5 p-2 text-sm">
            <p className="font-semibold"> Sort By</p>
            <p className="text-flipkart_blue border-b-blue-500"> Popular</p>
            <p className="">Price Low to High</p>
            <p className="">Price High to Low </p>
            <p className=""> Newest First</p>
          </div>
          <hr />
        </div>
        <div className="w-[100%]">
          <div className="">
            <CartProduct product={wholedata} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default catogary;
