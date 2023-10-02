import Address from "@/components/Address";
import CartItem from "@/components/CartItem";
import CartPayment from "@/components/CartPayment";
import { beautyData } from "@/constant/beaty";
import Link from "next/link";
import React from "react";

const cart = () => {
  return (
    <div className="max-w-[80vw] h-full mx-10 px-6 grid grid-cols-5 gap-10 py-4 bg-[#f1f3f6]">
      {beautyData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-2 rounded-sm ">
            <div className="pt-2 flex flex-col gap-2 h-[450px] overflow-y-scroll no-scrollbar shadow-sm">
              <Address />
              {beautyData.map((item: any) => (
                <div key={item._id}>
                  <CartItem item={item} />
                </div>
              ))}
            </div>
            {/* Place order  */}
            <div className="shadow-sm m-0 w-full">
              <div className="flex justify-end">
                <button className="text-white justify-end bg-[#fb641b] w-60 m-4 p-4 text-md items-end  rounded-sm font-semibold">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white h-[350px] sticky w-[400px] rounded-sm ">
            <CartPayment />
          </div>
        </>
      ) : (
        <div className="h-64 bg-white col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">your cart is empty</h1>
          <Link href={"/"}>
            <button className="w-52 h-10 bg-white text-white rounded-lg text-sm font-semibold  hover:text-black">
              Go to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default cart;
