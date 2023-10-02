export interface Product {
    "_id": number,
    "title": string,
    "isNew": boolean,
    "oldPrice": number,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "brand": string
}

export interface Item {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
    quantity: number;
  }

export interface StoreProduct {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
    quantity: number;
  }
  export interface StateProps {
    productData: [];
    favoriteData: [];
    userInfo: null | string;
    next: any;
  }