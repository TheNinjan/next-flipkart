import React from "react";
import Image from "next/image";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import FormattedPrice from "./FormattedPrice";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-sm  rounded-lg flex items-center gap-4">
      <div>
        <Image
          className="object-cover"
          width={150}
          height={150}
          src={item.image}
          alt="productImage"
        />

        <div className="flex gap-2 items-center">
          <span
            className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent border-2 hover:bg-gray-300 cursor-pointer decoration-purple-300"
            onClick={() =>
              dispatch(
                increaseQuantity({
                  _id: item._id,
                  brand: item.brand,
                  category: item.category,
                  description: item.description,
                  image: item.image,
                  isNew: item.isNew,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  title: item.title,
                  quantity: 1,
                })
              )
            }
          >
            <LuPlus />
          </span>

          <div className="flex items-center mt-1 justify-between bg-white border border-gray-300 px-4 py-1 rounded-sm w-10 shadow-lg shadow-gray-300">
            <span className="w-8 h-4 flex items-center justify-center rounded-lg text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300 ">
              {item.quantity}
            </span>
          </div>
          <span
            className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300 border-2"
            onClick={() =>
              dispatch(
                decreaseQuantity({
                  _id: item._id,
                  brand: item.brand,
                  category: item.category,
                  description: item.description,
                  image: item.image,
                  isNew: item.isNew,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  title: item.title,
                  quantity: 1,
                })
              )
            }
          >
            <LuMinus />
          </span>
        </div>
      </div>
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold ">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <div className="text-sm text-gray-600">
            Unit Price{" "}
            <span className="font-semibold ">
              <FormattedPrice amount={item.price} />
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex  items-center  gap-2 text-sm font-medium text-black hover:text-flipkart_blue cursor-pointer duration-500">
              <span>SAVE FOR LATER</span>
            </div>
            <div
              onClick={() => dispatch(removeFromCart(item._id))}
              className="flex  items-center  gap-2 text-sm font-medium text-gray-400 hover:text-red-700 cursor-pointer duration-500"
            >
              <IoMdClose className="" /> <p>remove</p>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
