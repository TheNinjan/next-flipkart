import React from 'react'
import Image from 'next/image'
import Grocery from "@/Images/grocery.webp"
import { category } from '@/constant/category'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
const CategoryC = () => {
  return (
    <div className='h-[7rem] px-16 w-full max-w-[1450px] bg-white shadow-md flex  justify-between'>
        { category.map((item)=>(
            <div key={item.id} className='p-1 mt-3 mb-3 cursor-pointer'>
            <Image className='object-cover ' src ={item.img} width={65} height={65} alt={item.title}/>
            <div className='flex items-center justify-center'><p className='font-semibold text-sm text-center '>{item.title}</p>
            {item.more&&<>
            <BiChevronDown className='' /></>}
            </div>
          </div>
        ))
        }
    </div>
  )
}

export default CategoryC

