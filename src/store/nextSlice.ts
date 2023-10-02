import {createSlice} from "@reduxjs/toolkit"
import { StoreProduct } from "../../types.td"

interface NextState{
    productData:StoreProduct[],
    favouriteData:StoreProduct[],
    allProduct:StoreProduct[],
    userInfo:null | string,
}

const initialState:NextState={
    productData:[],
    favouriteData:[],
    allProduct:[],
    userInfo:null,
}
export const nextSlice=createSlice({
    name:"next",
    initialState,
    reducers:{

        addToCart:(state,action)=>{
            const existingProduct=state.productData.find((item:StoreProduct)=>item._id===action.payload);
            {
                if(existingProduct){
                        existingProduct.quantity++
                }
                else{
                    state.productData.push(action.payload)
                }
            }
        },
        removeFromCart:(state,action)=>{
            state.productData=state.productData.filter((item:StoreProduct)=>item._id!== action.payload);
        },
        resetCart: (state) => {
            state.productData = [];
          },
        increaseQuantity:(state,action)=>{
            const existingProduct=state.productData.find((item:StoreProduct)=>{
                item._id===action.payload._id;
            })
            existingProduct&&existingProduct.quantity++
        },
        decreaseQuantity:(state,action)=>{
            const existingProduct=state.productData.find((item:StoreProduct)=>{
                item._id===action.payload._id;
            })
            if(existingProduct?.quantity===1){
                existingProduct.quantity=1
            }
            else{
                existingProduct!.quantity--;
            }
        },
        addToFavorite:(state,action)=>{
            const existingProduct=state.favouriteData.find((item:StoreProduct)=>item._id===action.payload._id)
            if(existingProduct){
                existingProduct.quantity+=action.payload.quantity
            }
            else{
                state.favouriteData.push(action.payload)
            }

        },
        removeFromFavourite:(state)=>{
            state.favouriteData=[];
        },
        addUser:(state,action)=>{
            state.userInfo=action.payload
        },
        removeUser:(state)=>{
            state.userInfo=null 
        }

    }

})

export const { addToCart ,removeFromCart,increaseQuantity,decreaseQuantity,resetCart,addToFavorite,removeFromFavourite,addUser,removeUser}=nextSlice.actions;
export default nextSlice.reducer