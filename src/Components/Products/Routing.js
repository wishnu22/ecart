import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../cart/Cart'
import Product from './Product'
import Products from './Products'

function Routing() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>
    </div>
  )
}

export default Routing