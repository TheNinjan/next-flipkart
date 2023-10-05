import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../types.td";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import FormattedPrice from "./FormattedPrice";

const CartPayment = () => {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalNAmount, setTotalNAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.oldPrice * item.quantity;
      return;
    });
    setTotalAmount(amt);
    let namt = 0;
    productData.map((item: StoreProduct) => {
      namt += item.price * item.quantity;
    });
    setTotalNAmount(namt);
  }, [productData]);

  return (
    <div className=" shadow-md bg-white">
      <div className="mt-2 border-b-2 p-3">
        <p className="text-gray-500 ml-5 text-lg font-semibold ">
          PRICE DETAILS
        </p>
      </div>
      <div className="p-2 m-2">
        <div className="flex justify-between p-2 gap-24">
          <div>Price({productData?.length} items)</div>
          <div>{totalAmount}</div>
        </div>
        <div className="flex p-2 justify-between gap-24">
          <div>Discount</div>
          <div>{totalAmount - totalNAmount}</div>
        </div>
        <div className="flex p-2 justify-between gap-24">
          <div>Coupons for you </div>
          <div>none</div>
        </div>
        <div className="flex p-2 justify-between gap-24">
          <div>Delivery Charges </div>
          <div>00.00</div>
        </div>
      </div>
      <div className="flex p-2 justify-between gap-20 border-dashed border-y-2">
        <div className="text-lg font-semibold">Total Amount</div>
        <div className="text-lg font-semibold">
          <FormattedPrice amount={totalNAmount} />
        </div>
      </div>
      <div className="p-3 ">
        <p className="font-semibold text-green-500 ">
          You will save ₹5,381 on this order
        </p>
      </div>
    </div>
  );
};

export default CartPayment;
