import React from 'react'
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from './FormattedPrice'

const CartPayment = () => {
  return (
    <div className=" shadow-md bg-white">
        <div className='mt-2 border-b-2 p-3'>
            <p className='text-gray-500 ml-5 text-lg font-semibold '>PRICE DETAILS</p>

        </div>
        <div className='p-2 m-2'>
            <div className='flex justify-between p-2 gap-24'>
            <div>Price(2 Items)</div>
            <div>2500</div>
            </div>
            <div className='flex p-2 justify-between gap-24'>
            <div>Discount</div>
            <div>2500</div>
            </div>
            <div className='flex p-2 justify-between gap-24'>
            <div>Coupons for you </div>
            <div>253</div>
            </div >
            <div className='flex p-2 justify-between gap-24'>
            <div>Delivery Charges </div>
            <div>2500</div>
            </div>
        </div>
        <div className='flex p-2 justify-between gap-20 border-dashed border-y-2'>
            <div className='text-lg font-semibold'>Total Amount</div>
            <div className='text-lg font-semibold'>2500</div>
        </div>
        <div className='p-3 '>
            <p className='font-semibold text-green-500 '>You will save ₹5,381 on this order</p>
        </div>
        
      
    </div>
  )
}

export default CartPayment
