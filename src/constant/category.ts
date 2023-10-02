import Grocery from "@/Images/grocery.webp"
import Appliences from "@/Images/appliences.webp"
import Home from "@/Images/home.webp"
import Mobile from "@/Images/mobils.webp"
import Vehicle from "@/Images/vehicle.webp"
import Electronics from "@/Images/electronics.webp"
import Fashion from "@/Images/fashion.webp"
import Travel from "@/Images/travel.webp"
import Beauti from "@/Images/beauti.webp"
import { StaticImageData } from "next/image"

export interface ICategory {
    id:string
    title:string,
    img:StaticImageData
    more:boolean
}

export const category:ICategory[]=[

    {   id:'1',
        title:'Grocery',
        img:Grocery,
        more:false
    },

    {   id:'2',
        title:'Mobile',
        img:Mobile,
        more:false
    },

    {   id:'3',
        title:'Fashion',
        img:Fashion,
        more:true,
    },

    {   id:'4',
        title:'Electronics',
        img:Electronics,
        more:true,
    },

    {   id:'5',
        title:'Home & Furnuture',
        img:Home,
        more:true,
    },

    {   id:'6',
        title:'Appliences',
        img:Appliences,
        more:false
    },

    {   id:'7',
        title:'Travel',
        img:Travel,
        more:false
    },

    {   id:'8',
        title:'Beauty ,Toy & More',
        img:Beauti,
        more:true,
    },

    {   id:'9',
        title:'Two Wheelers',
        img:Vehicle,
        more:true,
    },
]

