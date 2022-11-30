import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

// useSelector helping to access store's state
    
       const cartData=useSelector((state)=>state.productsData.cartData)
    
  return (
    <div>
      <h2>Cart</h2>
      </div>
  )
}

export default Cart