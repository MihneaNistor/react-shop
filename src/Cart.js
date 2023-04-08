import React , { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import "./styles/Cart.css"
import { shopItems } from './Items';
import ShopContext from './shop-context';
import CartItem from './CartItem';


function Cart() {
  // const [cart, setCart] = useState(null);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cart'>
        {/* {cart == null ?
        <div className='empty'>
          <h1>Your Cart is Empty</h1>
          <h2>Go To <Link to="/">Home</Link> To Buy Some Clothes</h2>
        </div> : */}
        {shopItems.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data = {item} />
          }
        })
      } 
      {totalAmount === 0 ? 
        <div className='empty'>
          <h1>Your Cart is Empty</h1>
          <h2>Go To <Link to="/">Home</Link> To Buy Some Clothes</h2>
        </div> :
         <p className='total'>Subtotal: <b>${totalAmount}</b></p>
        }
    </div>    

  )
}

export default Cart