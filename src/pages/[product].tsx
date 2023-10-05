import React from "react";
import Image from "next/image";
// import product from "@/Images/electronics/4trimmer.webp";
import FAssured from "@/Images/FAssured.png";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Suggetions from "@/components/Suggetions";
import { useRouter } from "next/router";
import { wholedata } from "@/constant/wholedata";
import { Product } from "../../types.td";
import { category } from "@/constant/category";
import { addToCart } from "@/store/nextSlice";
import image from "next/image";
import { title } from "process";
import { useDispatch } from "react-redux";

// {item}:Item

const Product = () => {
  const router = useRouter();
  const id: any = router.query.data;
  // console.log(id);
  let productItem: Product[] = wholedata.filter((item) => item._id == id);
  // console.log(productItem);
  const dispatch = useDispatch();
  return (
    <div className=" w-full mt-1  bg-white">
      <div className="flex h-50rem] p-5 sticky">
        <div className="w-[5%] bg-white shadow-lg h-[50%]">
          <div className="flex-col justify-center items-center ">
            <Image
              className="hover:scale-110 duration-300"
              src={productItem[0].image}
              width={100}
              height={100}
              alt="hii"
            />
            <Image
              className="hover:scale-110 duration-300"
              src={productItem[0].image}
              width={100}
              height={100}
              alt="hii"
            />
            <Image
              className="hover:scale-110 duration-300"
              src={productItem[0].image}
              width={100}
              height={100}
              alt="hii"
            />
            <Image
              className="hover:scale-110 duration-300"
              src={productItem[0].image}
              width={100}
              height={100}
              alt="hii"
            />
            <Image
              className="hover:scale-110 duration-300"
              src={productItem[0].image}
              width={100}
              height={100}
              alt="hii"
            />
          </div>
        </div>
        <div className="bg-white w-[35%] h-[50%]  sticky border-2">
          <div className="flex justify-end mt-1 mr-5">
            <AiFillHeart className=" text-gray-500 hover:text-red-500" />
          </div>
          <Image
            className="hover:scale-105 duration-300 ml-2 mt-5"
            src={productItem[0].image}
            width={400}
            height={450}
            alt="ietem"
          />
          <div className="flex  justify-center gap-5 mt-5">
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: productItem[0]._id,
                    brand: productItem[0].brand,
                    category: productItem[0].category,
                    description: productItem[0].description,
                    image: productItem[0].image,
                    isNew: productItem[0].isNew,
                    oldPrice: productItem[0].oldPrice,
                    price: productItem[0].price,
                    title: productItem[0].title,
                    quantity: 1,
                  })
                )
              }
              className="w-60 h-14 text-white font-bold bg-[#ff9f00]  rounded-md"
            >
              ADD TO CART
            </button>
            <button className="w-60 h-14 text-white font-bold bg-[#fb641b] rounded-md ">
              BUY NOW
            </button>
          </div>
        </div>
        <div className="bg-white w-[60%] p-5">
          <div className="flex">
            <a href="#" className="text-gray-500 text-sm mt-0 flex p-1">
              {" "}
              <span className="hover:text-blue-600">Home</span> {">"}{" "}
              <span className="hover:text-blue-600">
                {productItem[0].brand}
              </span>{" "}
              {">"}{" "}
              <span className="hover:text-blue-600">
                {productItem[0].title}
              </span>
            </a>
            <div className="flex ml-20">
              <span className="items-center text-sm ml-10 hover:text-blue-600">
                Compare
              </span>
              <div className="hover:text-blue-600">
                <p className=" flex ml-10 gap-3 items-center text-sm">
                  <IoIosShareAlt className=" " />
                  Share
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg">{productItem[0].description}</p>
          <div className="flex gap-2 p-1">
            <div className="flex items-center justify-start bg-green-600 p-0 text-white text-sm w-9 rounded-sm">
              4.3 <AiFillStar />
            </div>
            <div className=" flex p-0 gap-3">
              <p className="text-gray-500 text-md">
                49,163 Ratings & 4,139 Reviews
              </p>
              <Image src={FAssured} width={80} height={80} alt="asssure" />
            </div>
          </div>
          <p className="text-green-500 font-semibold">
            Special price
            <br />
          </p>
          <div className="flex gap-5 items-center p-2">
            <p className="font-semibold text-2xl">₹{productItem[0].price}</p>
            <del className="text-gray-500 ">
              <p>₹{productItem[0].oldPrice}</p>{" "}
            </del>
            <p className="text-green-500 font-bold">16 % off</p>
          </div>
          <div className="p-2 text-lg ">
            <p className="font-bold">Available offers</p>
            <p className="p-1 text-sm flex gap-2 items-center">
              {" "}
              <span>
                {" "}
                <MdLocalOffer className="text-green-500" />{" "}
              </span>{" "}
              <span className="font-semibold">Bank offer</span>
              Flat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI, Min
              Value ₹10,000
              <span className="font-semibold text-blue-800"> T&C</span>{" "}
            </p>
            <p className="p-1 text-sm flex gap-2 items-center">
              {" "}
              <span>
                {" "}
                <MdLocalOffer className="text-green-500" />{" "}
              </span>{" "}
              <span className="font-semibold">Bank offer</span>
              10% Instant Discount on Credit Card Txns, up to ₹1250, on orders
              of ₹5000 and above
              <span className="font-semibold text-blue-800"> T&C</span>{" "}
            </p>
            <p className="p-1 text-sm flex gap-2 items-center">
              {" "}
              <span>
                {" "}
                <MdLocalOffer className="text-green-500" />{" "}
              </span>{" "}
              <span className="font-semibold">Bank offer</span>
              Flat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI, Min
              Value ₹10,000
              <span className="font-semibold text-blue-800"> T&C</span>{" "}
            </p>
            <p className="p-1 text-sm flex gap-2 items-center">
              {" "}
              <span>
                {" "}
                <MdLocalOffer className="text-green-500" />{" "}
              </span>{" "}
              <span className="font-semibold ">Bank offer</span>
              Partner OfferSign-up for Pay Later & get free Times Prime Benefits
              worth ₹10,000*
              <span className="font-semibold text-blue-800 flex">
                {" "}
                Know More
              </span>{" "}
            </p>
            <p className="text-blue-500 font-semibold">View 20 more offers</p>
          </div>
          <div className="flex w-full h-[8rem] mt-5 shadow-sm overflow-hidden border-1">
            <div className="text-gray-500 flex justify-center items-center ml-2  ">
              Description
            </div>
            <div className="ml-5 mt-10 items-center ">
              {productItem[0].description}
            </div>
          </div>

          <div className="border-2 h-[17rem]">
            <div className=" flex justify-around gap-8 p-5 mt-3 w-full">
              <p className="font-semibold text-xl">Ratings & Reviews</p>
              <button className="shadow-lg text-lg rounded-sm h-10 w-40">
                Rate Product
              </button>
            </div>
            <div className="flex p-5 justify-center items-center text-center gap-5">
              <div className="w-[25%]">
                <p className="flex items-center  font-bold text-xl ml-10">
                  4.5
                  <AiFillStar />
                </p>
                <p className="text-gray-500">26,588 Ratings & 2,656 Reviews</p>
              </div>
              <div style={{ width: 80, height: 80 }}>
                <CircularProgressbar
                  value={90}
                  text={`${4.3}%`}
                  styles={buildStyles({
                    pathColor: `#388e3c`,
                    textColor: "#000",
                  })}
                />
                <p>Quality</p>
              </div>
              <div style={{ width: 80, height: 80 }}>
                <CircularProgressbar
                  value={95}
                  text={`${4.4}%`}
                  styles={buildStyles({
                    pathColor: `#388e3c`,
                    textColor: "#000",
                  })}
                />
                <p>Design</p>
              </div>
              <div style={{ width: 80, height: 80 }}>
                <CircularProgressbar
                  value={90}
                  text={`${4.1}%`}
                  styles={buildStyles({
                    pathColor: `#388e3c`,
                    textColor: "#000",
                  })}
                />
                <p>Value for money</p>
              </div>
              <div style={{ width: 80, height: 80 }}>
                <CircularProgressbar
                  value={62}
                  text={`${3.1}%`}
                  styles={buildStyles({
                    pathColor: `#388e3c`,
                    textColor: "#000",
                  })}
                />
                <p>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-0">
        <Suggetions />
      </div>
    </div>
  );
};

export default Product;
