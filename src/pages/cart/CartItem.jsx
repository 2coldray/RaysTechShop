import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'

const CartItem = ({data}) => {
  const {id, productName, price, productImage} = data 
  const {cartItems, addItemToCart, removeItemFromCart, updateCartItemCount } = useContext(ShopContext) 
  return (
    <div className='cartItem'>
        <img src={productImage} alt="product" />
        <div className="description">
            <p> <strong>{productName}</strong> </p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeItemFromCart(id)} >-</button>
                <input type='text' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}  />
                <button onClick={() => addItemToCart(id)} >+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem