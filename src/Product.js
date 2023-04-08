import React, {useState, useContext} from 'react'
import ImageSlider from './ImageSlider'
import "./styles/Home.css"
import { shopItems } from './Items';
import ShopContext from './shop-context';

function Product(props) {
    // const [cart, setCart] = useState(null);
    // const [sum, setSum] = useState(0);
    const { id, name, price, description, url } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];

  return (
     // <Context.Provider value={{cart, setCart}}>
     <div className='item'>
        <img src={url}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>${price}</h3>
        <button onClick={() => addToCart(id)}>
          <b>Add to Cart</b> {cartItemCount > 0 && <>({cartItemCount})</>}
        </button>
 </div>
// </Context.Provider>
  )
}

export default Product