import React from 'react';
import './App.css';
import Header from './Components/Header';
import Store from './Components/Store';
import { useState,useEffect } from 'react';
import About from './Components/About';
import Home from './Components/Home';
import { Route, Switch,Redirect } from "react-router-dom";
import Contactus from './Components/Contactus';
import ProductDetail from './Components/ProductDetail';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = (items) => {
    setCartItems(items);
  };

  return (

    <div className="App">
      <header>
      <Header  cartItems={cartItems}/>
      </header>
      <main>
      <Switch>
      <Route path='/' exact>
          <Redirect to='/home'/>
        </Route>
      <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store" exact>
        <Store updateCartItems={updateCartItems} />
        </Route>

        <Route path="/contact">
        <Contactus/>
        </Route>

        <Route path="/store/:id">
          <ProductDetail />
        </Route>

      </Switch>
      
      </main>
    
    </div>
  );
}

export default App;
