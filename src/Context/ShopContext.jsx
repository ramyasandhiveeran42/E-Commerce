import { createContext, useState } from "react";
import React from 'react'
import all_product from '../Components/Assets/all_product'
import '../Pages/CSS/ShopCategory.css'


export const ShopContext = createContext(null)
const getDefaultCart = ()=>{
    let cart = {}
    for(let i=0 ; i <= all_product.length+1; i++ ){
        cart[i] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {

  const [cartItems , SetcartItems] = useState(getDefaultCart())

// console.log(cartItems);


  const addToCart =(itemid)=>{
    SetcartItems((preVal)=>(
        {...preVal, [itemid]:preVal[itemid]+1}
    ))
    console.log(cartItems);
  }

  const removeFromCart =(itemid)=>{
    SetcartItems((preVal)=>(
        {...preVal, [itemid]:preVal[itemid]-1}
    ))  
  }
  // cart item is nothing but entha id la ethana quantity store ayiruku   1: 3  -> 1st id la 3 quantity 
  const getTotalAmount = ()=>{
    let totalAmount = 0;
    for (const item in cartItems){
      if(cartItems[item] > 0){
        let iteminfo = all_product.find((val)=> val.id === Number(item))
        totalAmount += iteminfo.new_price * cartItems[item]
      }
    }
    return totalAmount
  }

  const cartNumberAdd =()=>{
    let totalItems = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
         totalItems += cartItems[item]
      }
    }
    return totalItems
  }
  
  const contextValue = { all_products: all_product ,cartItems,addToCart,removeFromCart, getTotalAmount,cartNumberAdd};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider


