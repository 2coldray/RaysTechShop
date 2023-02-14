import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';


// Actual Cart Item for each product that will be rendered onto the page
const Product = ({ data }) => {
  // destructure the data props to use for displaying data  
  const { id, productName, price, productImage } = data; 
  const {addItemToCart, cartItems} = useContext(ShopContext);  
  const cartItemAmount = cartItems[id]
  return (
    <section className='product'>
        <img src={productImage} alt="product" />
        <div className="description">
            <p> <strong>{productName}</strong></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addItemToCart(id)} >
            Add To Cart {cartItemAmount > 0 ? `(${cartItemAmount})` : null}
        </button>
    </section>
  )
}

export default Product