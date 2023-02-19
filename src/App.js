import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Components/Header';
import Store from './Components/Store';
import { useState,useEffect } from 'react';
import Cart from './Components/Cart';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = (items) => {
    setCartItems(items);
  };

  // useEffect(() => {
  //   console.log('from App.js', cartItems);
  // }, [cartItems]);

  // Map over the cartItems array and create a new array of React components

  return (
    <div className="App">
      <Header  cartItems={cartItems}/>
      <Store updateCartItems={updateCartItems} />
      {/* {false && <Cart cartItems={cartItems}/>} */}
    </div>
  );
}

export default App;
