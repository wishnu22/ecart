import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      {/* setting background image */}
       <div className='navdesign'>
       </div>
       {/* end here -navbar bg-transparent */}
       <nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
       <div className='container'>
  <a class="navbar-brand" href="#">Wshnu Cart</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <Link to='/Products' class="nav-link" >Products</Link>
      </li>
      <li class="nav-item">
        <Link to='/Cart' class="nav-link" >Cart</Link>
      </li>
    </ul>
  </div>
  {/* <form className='d-flex'> */}
 {/* <Link to='/cart'><span className='me-2' ><i class="fas fa-shopping-cart"></i>Cart</span></Link>  */}
  {/* </form> */}
  
  </div>
</nav>

</div>
    
  )
}

export default Navbar