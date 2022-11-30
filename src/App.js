import logo from './logo.svg';
import React, { Component }  from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import Navbar from './Components/Products/Navbar';
import Routing from './Components/Products/Routing';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
    </div>
  );
}

export default App;
