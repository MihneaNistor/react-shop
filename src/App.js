import './styles/App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Navbar from './Navbar';
import Info from './Info';
import { ShopContextProvider } from "./shop-context";
import { shopItems } from './Items';
import Footer from './Footer';



function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar/>
              <Routes>
                <Route path="/" exact element = {<Home/>}/>
                <Route path="/cart" exact element = {<Cart/>}/>
                <Route path="/info" exact element = {<Info/>}/>
              </Routes>
            <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
