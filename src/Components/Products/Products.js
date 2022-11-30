import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Products.css'


function Products() {
    const dispatch=useDispatch();
   const state=useSelector((state)=>state.productsData)
   console.log(state)
    const [products,setProducts]=useState([])

const getData=async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    setProducts(data)
   
}

   useEffect(()=>{
      getData()
   
   },[])

  return (
    <div>
        <div className='bodystyle'>
   <h2 className='heading my-5'>Products</h2>
   <div className='container py-3'>
   <div className='row'>
    {
        products.length>0?
        (
            products.map((product)=>(
                <div className='col-md-3'>
                    
                <div className='card my-4'>
                <Link to={`/products/${product.id}` }>
                <img class="card-img-top mx-auto" src={product.image} alt="Card image cap"/>
                </Link>
  <div class="card-body">
    <h5 class="card-title">{product.price}</h5>
    <p class="card-text">{product.category}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
                    </div>
                    
                </div>
             
            ))
            
        ):"Loading Data"
    }
   </div>
   </div>
   </div>
     </div>
   
  )
}

export default Products