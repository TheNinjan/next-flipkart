import React, { useState } from "react";
import Image from "next/image";
import FAssured from "@/Images/FAssured.png";
function RangeSlider() {
  const [value, setValue] = useState(10000);

  const handleChange = (e: any) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className=" items-center justify-center">
      <div className="w-64">
        <label htmlFor="range" className="block text-gray-600 text-sm mb-2">
          Price
        </label>
        <input
          type="range"
          id="range"
          name="range"
          min={10000}
          max={62000}
          step={1000}
          value={value}
          onChange={handleChange}
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span>10,000</span>
          <span>62,000</span>
        </div>
        <p className="text-center font-bold text-lg mt-4">
          {value.toLocaleString()}
        </p>
      </div>
      <hr />

      <div className="flex gap-2 items-center mt-5">
        <select
          id="dropdown"
          name="dropdown"
          className="w-[40%] p-2 border rounded-md"
        >
          <option value="">Minimum</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="500">500</option>
          <option value="4000">4000</option>
          <option value="9000">9000</option>
        </select>
        To
        <select
          id="dropdown"
          name="dropdown"
          className="w-[40%] p-2 border rounded-md"
        >
          <option value="">Maximum</option>
          <option value="250">250</option>
          <option value="300">300</option>
          <option value="500">500</option>
          <option value="4000">4000</option>
          <option value="9000">9000</option>
        </select>
      </div>
      <hr className="mt-2" />
      <div className="flex  mt-2 p-2 justify-between">
        <label>
          <input type="checkbox" />
        </label>
        <Image src={FAssured} width={80} height={15} alt="52" />
        <button className="border-2 rounded-full  px-1 py-2 text-xs text-gray-400 ">
          ?
        </button>
      </div>
      <hr className="mt-2" />
      <div className="flex justify-between">
        <label>
          <input type="checkbox" />
        </label>
        <p>Delivery in 1 day</p>
      </div>
    </div>
  );
}

export default RangeSlider;
