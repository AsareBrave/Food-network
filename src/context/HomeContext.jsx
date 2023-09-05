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

  const getTotalItemsCount = () => {
    console.log(cartItems)
    }

//getTotalitemsCount isnt working yet


  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const clearItem = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] * 0}))
    }

  const clearAllItems = (totalItemCount) => {
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ITEMS.find((y) => y.id === Number(item));
        totalItemCount += cartItems[item] * itemInfo;
        console.log('b');
        console.log(totalItemCount)
        setCartItems((prev) => ({...prev, [totalItemCount]: prev[totalItemCount] * 0}))
      }
    }
  }
//clearAllItems isnt working yet

  const contextValue = {cartItems, getTotalCartAmount, addToCart, removeFromCart, clearItem, clearAllItems, getTotalItemsCount}


  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  )
}
