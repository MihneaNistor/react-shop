import React, {useContext} from 'react'
import ShopContext from './shop-context'
import { shopItems } from './Items';
import './styles/Cart.css'

function CartItem(props) {
    const { id, name, price, description, url } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  
    return (
        <div className = "cart-item">
          <div className='name-img'>
            <h3 className='itemName'>{name} ${price}</h3>
            <img className='itemImg' src={url}/>
          </div>
          <div className='cartBtns'>
            <button className='cartButton' onClick={() => removeFromCart(id)}> - </button>
            <p className='itemQuantity'><b>{cartItems[id]}</b></p>
            <button className='cartButton' onClick={() => addToCart(id)}> + </button>
          </div>
        </div>
  );
}

export default CartItem