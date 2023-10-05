import Address from "@/components/Address";
import CartItem from "@/components/CartItem";
import CartPayment from "@/components/CartPayment";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../types.td";
import { resetCart } from "@/store/nextSlice";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

const cart = () => {
  const dispatch = useDispatch();
  const { productData, favoriteData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  function handleResetCart() {
    const confirmReset = window.confirm(
      "Are you sure to reset the cart.....!!!!!"
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  }

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { data: session } = useSession();
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: productData, email: session?.user?.email }),
    });
    const checkoutSession = await response.json();

    // Redirecting user/customer to Stripe Checkout
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error.message);
    }
  };

  return (
    <div className="max-w-[80vw] h-full mx-10 px-6 grid grid-cols-5 gap-10 py-4 bg-[#f1f3f6]">
      {productData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-2 rounded-sm ">
            <div className="pt-2 flex flex-col gap-2 h-[450px] overflow-y-scroll no-scrollbar shadow-sm">
              <Address />
              {productData.map((item: any) => (
                <div key={item._id}>
                  <CartItem item={item} />
                </div>
              ))}
            </div>
            {/* Place order  */}
            <div className="shadow-sm m-0 w-full">
              <div className="flex justify-between">
                <button
                  onClick={handleResetCart}
                  className="bg-red-500 rounded-sm  m-4 p-4  text-sm text-white"
                >
                  Reset Cart
                </button>

                <button
                  className={`text-white   w-60 m-4 p-4 text-md items-end  rounded-sm font-semibold ${
                    userInfo
                      ? `bg-[#fb641b]`
                      : `bg-gray-400  disabled:bg-transparent cursor-not-allowed`
                  }`}
                  onClick={handleCheckout}
                >
                  {userInfo ? "PLACE ORDER" : <p>Please login to shopping</p>}
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
          <h1 className="text-lg font-medium">Your Cart Is Empty</h1>
          <Link href={"/"}>
            <button className="w-52 h-10 bg-flipkart_blue p-2 m-2 text-white rounded-lg text-sm font-semibold duration-500">
              Go to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default cart;
