import React from 'react'
import { PRODUCTS } from '../../products';
import Product from './Product';
import './shop.css'

// map over the products array and create a product for each item
const Shop = () => {
  return (
    <section className='shop'>
        <div className="shopTitle">
            <h1>RaysTech Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map(product => <Product key={product.id} data={product} />)}
        </div>
    </section>
  )
}

export default Shop