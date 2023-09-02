import React, { useState } from 'react'
import { createContext } from 'react'
import { ITEMS } from '../items';

export const HomeContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ITEMS.length + 1; i++) {
    cart[i] = 0
  }
  return cart;
}


export default function HomeContextProvider(props) {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ITEMS.find((x) => x.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const clearItems = () => {
    let close = 0;
    for (const item in cartItems) {
      closeInfo = ITEMS.find((x) => x.id === Number(item));
      close += cartItems[item] * closeInfo.id

    }
    return close;
  }
  //line above isnt working yet

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const contextValue = {cartItems, getTotalCartAmount, addToCart, removeFromCart, clearItems}


  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  )
}
