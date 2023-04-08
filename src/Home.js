import React, {useState, useContext} from 'react'
import ImageSlider from './ImageSlider'
import "./styles/Home.css"
import { shopItems } from './Items';
import Product from './Product';

export const Context = React.createContext();


function Home() {
    // function addItem(item) {
    //     setSum(sum + item.price);
    //     setCart(item);
    // }

    // console.log(cart);
    // console.log("Totalul este: " + sum);


  return (
    <>
        <ImageSlider/>
        <div className='home'>
            {shopItems.map((item) => {
                return (
                   <Product data={item} />
                );
            })}
        </div>
    </>
  )
}

export default Home