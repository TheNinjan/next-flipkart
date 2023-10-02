import React from 'react'
import Image from 'next/image'
import PaymentsM from '@/Images/payment-methods.svg'
const Footer = () => {
  return (
    <footer className='mt-2' >
    <div className='flex p-10 h-[23rem] w-full relative bg-[#172337] text-white text-xs justify-between'>
        {/*1st portion  */}
<div className=' flex gap-2 justify-between w-[60%] '> 
        {/* About */}
      <div className='p-2 w-[25%]'>
        <h1 className='text-gray-400'>ABOUT</h1>
        <p className='p-1'>Contact Us</p>
        <p className='p-1'>About Us</p>
        <p className='p-1'>Careers</p>
        <p className='p-1'>Flipkart Stories</p>
        <p className='p-1'>Press</p>
        <p className='p-1'>Flipkart Wholesale</p>
        <p className='p-1'>Cleartrip</p>
        <p className='p-1'>Corporate Information</p>
      </div>
      {/* Help */}
      <div className='p-2 w-[25%]'>
        <h1 className='text-gray-400'>HELP</h1>
        <p className='p-1'>Payments</p>
        <p className='p-1'>Shipping</p>
        <p className='p-1'>Cancellation & Returns</p>
        <p className='p-1'>FAQ</p>
        <p className='p-1'>Report Infringement</p>
      </div>

      {/* CONSUMER POLICY */}
      <div className='p-2 w-[25%]'>
        <h1 className='text-gray-400'>CONSUMER POLICY</h1>
            <p className='p-1'>Cancellation & Returns</p>
            <p className='p-1'>Terms Of Use</p>
            <p className='p-1'>Security</p>
            <p className='p-1'>Privacy</p>
            <p className='p-1'>Sitemap</p>
            <p className='p-1'>Grievance Redressal</p>
            <p className='p-1'>EPR Compliance</p>
    </div>
    {/* social */}
    <div className='p-2 w-[25%]'>
        <h1 className='text-gray-400'>SOCIAL</h1>
        <p className='p-1'>Facebook</p>
        <p className='p-1'>Twitter</p>
        <p className='p-1'>YouTube</p>
    </div>
</div>
{/* portion 2 */}
<div className='flex  w-[40%]  '>
      {/* Mail Us: */}
      <div className='p-2 w-[50%]'>
          <h1 className='text-gray-400'>MAIL US</h1>
          <p className='p-1'>
          Flipkart Internet Private Limited,
            Buildings Alyssa, Begonia &
            Clove Embassy Tech Village,
            Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103,
            Karnataka, India
          </p>
      </div>
      {/* Registered Office Address: */}
      <div className='p-2 w-[50%]'>
            <h1 className='text-gray-400'>ADDRESS</h1>
            <p className='p-1'>Flipkart Internet Private Limited,
            Buildings Alyssa, Begonia &
            Clove Embassy Tech Village,
            Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103,
            Karnataka, India
            CIN : U51109KA2012PTC066107
            Telephone: 044-45614700</p>
      </div>
</div>
     
    </div>
     {/* copyright */}
     <div className='text-white p-5  bg-[#172337] '>
    <ul className='flex justify-between gap-5'>
        <li>Become a Seller</li>
        <li>Advertise</li>
        <li> Gift Cards</li>
        <li>Help Center</li>
        <li>© 2007-2023 Flipkart.com</li>
        <Image className='' src={PaymentsM} alt='payments' height={350} width={350}/>
    </ul>
    
</div>
    </footer>
  )
}

export default Footer
