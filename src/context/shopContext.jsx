import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

// START OF HIGHLIGHTED CODE
export const ShopContext = createContext(null)
// sets the default state of the cart to an object with the product id as the key, and number of times it was added to cart as the value {1: 0, 2: 0}
const getDefaultCart = () => {
    let cart = {}

    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }

    return cart
}


const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  
  // add item to cart function
  const addItemToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }
  
  // remove item from cart function
  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  // update the item in the cart through the input box functino
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

  // get the total amount of items in the cart
  const getTotalCartAmount = () => {
    let total = 0
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find(product => product.id === Number(item))
            total += itemInfo.price * cartItems[item]
        }
    }
    return total
  }

  // values that will be shared between components
  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateCartItemCount,
    getTotalCartAmount
  }

  console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue} >
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

// END OF HIGHLIGHTED CODE