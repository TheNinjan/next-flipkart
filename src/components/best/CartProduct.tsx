import { beautyData } from "@/constant/beaty";
import Image from "next/image";
import React from "react";
import { MdFavorite } from "react-icons/md";
import FAssured from "@/Images/FAssured.png";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const CartProduct = ({ product }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
      {product.map((item: any) => (
        <Link
          href={`/product?data=${item._id}`}
          key={item._id}
          className=" min-w-[16rem] h-[30rem]  hover:shadow-lg p-2  justify-center items-center relative "
        >
          <p className="text-gray-400 mt-5 float-right">
            <MdFavorite />
          </p>
          <Image
            className=" mt-5"
            src={item.image}
            width={200}
            height={200}
            alt={item.title}
          />
          <div className=" hover:text-flipkart_blue">
            <p className="  text-black ">{item.title}</p>
            <p className="py-2 text-gray-400 text-xs">color</p>
          </div>
          <div>
            <div className=" flex p-2 gap-1">
              <div className="flex items-center bg-green-700 text-white rounded-sm text-sm">
                4.3
                <AiFillStar className="" />
              </div>
              <p className="text-gray-500  ml-0 text-sm">(4,913)</p>
              <Image src={FAssured} width={80} height={10} alt="asssure" />
            </div>
            <div className="flex gap-4">
              <p className="text-md font-semibold">€{item.price}</p>
              <del className="text-gray-400  text-md ">price</del>
              <p className="text-green-600 text-sm">55% OFF</p>
            </div>
            <div>
              <p className="text-sm">
                Free Delivery <span className="font-bold">Today</span>
              </p>
              <p className="text-green-600"> BANK OFFER</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CartProduct;
