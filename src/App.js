import React from 'react';
import './App.css';
import Header from './Components/Header';
import Store from './Components/Store';
import { useState,useEffect } from 'react';
import About from './Components/About';
import Home from './Components/Home';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = (items) => {
    setCartItems(items);
  };

  return (
    <div className="App">
      <Header  cartItems={cartItems}/>
      {/* <Home/> */}
      <Store updateCartItems={updateCartItems} />
      {/* <About/> */}
    </div>
  );
}

export default App;
