import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart } from '../ProductActions/ProductActions';

function Product() {
  const [product,setProduct]=useState({});
  const {id} = useParams();
  const dispatch=useDispatch() ;
  
  
  const getApiData=async()=>{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data=await res.json()
   setProduct(data)
    
  }
  

  useEffect(()=>{
    getApiData()
  },[])

  return (
    <div>
  <h2>Product</h2>
  <div className='container'>
    {
   Object.keys(product).length?(
    <div className='row border border-primary mt-2'>
    <div className='col-lg-6 p-5 my-2'>
      <img className='img-fluid' src={product.image} alt={product.title}/>
</div>
    <div className='col-lg-6 p-5 my-2'>
      <div>
<h3>{product.title}</h3>
</div>
<div>
<h3 className='bg-info text-center'>Price: ${product.price}</h3>
</div>
<div>
<h3 className='text-center'>{product.category}</h3>
</div>
<div>
<p className='text-center'>{product.description}</p>
</div>

<button className='btn btn-primary' onClick={()=>{dispatch(addToCart(product))}}>Add to Cart</button>

</div>
    </div>
   ):<p>Loading....</p>  
    }
  </div>
   
    </div>
  )
}

export default Product
