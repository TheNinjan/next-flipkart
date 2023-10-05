"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/Images/flipkart-full.png";
import { BsCloudPlus } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { HiArrowTrendingUp, HiShoppingCart } from "react-icons/hi2";
import { IoMdDownload } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser } from "@/store/nextSlice";
import { StateProps } from "../../types.td";

const Header = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { productData, favoriteData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);
  return (
    <div className="w-full h-14 bg-flipkart_blue text-lightText sticky top-0 z-20 mt-0 ">
      <div className="h-full w-full max-w-[1250px]  mx-auto px-16 flex items-center justify-around  ">
        <div className="flex justify-between items-center  w-[60%]">
          {/* Logo */}
          <Link href={"/"} className="  ">
            <Image
              className="object-cover"
              src={logo}
              alt="logo"
              width={75}
              height={75}
            />
            <p className="italic flex gap-1 text-[0.65rem] ">
              Explore{" "}
              <span className="text-flipkart_yellow2 flex font-bold ">
                Plus{" "}
                <span className="">
                  <BsCloudPlus />
                </span>
              </span>
            </p>
          </Link>
          {/* searchBar */}
          <div className="h-9 w-[25rem] ml-2 flex items-center justify-between relative bg-white  shadow-md rounded-sm">
            <input
              type="text"
              placeholder="Search for products,brand and more"
              className="text-black outline-none placeholder:text-sm placeholder:font-[400]  rounded-sm pl-5 h-full w-[23rem]"
            />
            <ImSearch className="text-flipkart_blue absolute right-3" />
          </div>
          {/* Login */}
          {userInfo ? (
            <div className="flex  p-2   hover:border-white cursor-pointer duration-300 h-[100%] gap-1">
              <div className="text-md text-gray-100 flex flex-col justify-between relative group">
                <p className=" text-white w-full cursor-pointer font-bold p-2 h-full flex justify-center items-center">
                  {userInfo.name}{" "}
                  <span>
                    <BiChevronDown className=" group-hover:hidden duration-300" />
                  </span>
                  <span>
                    <BiChevronUp className="hidden group-hover:block duration-300" />
                  </span>{" "}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-10 w-28 gap-1 p-1 ">
              <button
                onClick={() => signIn()}
                className="bg-white text-flipkart_blue rounded-sm w-full h-full font-bold"
              >
                Login
              </button>
            </div>
          )}
        </div>

        {/* seller */}
        <div className="flex justify-between items-center w-[40%]">
          <div className="h-full gap-1 flex items-center justify-between ">
            <p className=" p- text-white cursor-pointer w-full h-full font-bold">
              Become a Seller
            </p>
          </div>
          {/* more */}
          <div className="h-full gap-1 relative group   ">
            <p className=" text-white w-full cursor-pointer font-bold p-2 h-full flex justify-center items-center">
              More{" "}
              <span>
                <BiChevronDown className=" group-hover:hidden duration-300" />
              </span>
              <span>
                <BiChevronUp className="hidden group-hover:block duration-300" />
              </span>{" "}
            </p>
            <div className="absolute top-12 -left-5 bg-white shadow-lg w-60 h-[12rem] hidden group-hover:block ">
              <div className="w-full  items-center justify-center p-2 ">
                <div className="flex gap-2 hover:bg-slate-50 p-3 shadow-sm">
                  <IoIosNotifications className="text-flipkart_blue" />
                  <span className="text-sm text-black  ">
                    Notification Preferences
                  </span>
                </div>
                <div className="flex gap-2 hover:bg-slate-50 p-3 shadow-sm">
                  <BsFillQuestionSquareFill className="text-flipkart_blue" />
                  <span className="text-sm text-black  ">
                    {" "}
                    24 x 7 Customer care
                  </span>
                </div>
                <div className="flex gap-2 hover:bg-slate-50 p-3 shadow-sm ">
                  <HiArrowTrendingUp className="text-flipkart_blue" />
                  <span className="text-sm text-black  ">Adverties</span>
                </div>
                <div className="flex gap-2 hover:bg-slate-50 p-3 shadow-sm">
                  <IoMdDownload className="text-flipkart_blue" />
                  <span className="text-sm text-black  ">Downlaod App</span>
                </div>
              </div>
            </div>
          </div>
          {/* cart */}
          <div className="h-10 gap-1">
            <Link
              href={"/cart"}
              className="text-white cursor-pointer gap-2 p-2 w-full h-full flex"
            >
              <HiShoppingCart className="mt-1" />
              <p className="flex items-center justify-center cursor-pointer font-bold">
                Cart
              </p>
              <span className="absolute text-white text-sm top-1 bg-red-500 w-4 text-center rounded-md right-[175px] font-semibold ">
                {productData ? productData.length : 0}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
