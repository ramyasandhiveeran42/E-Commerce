import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_products,cartItems,removeFromCart, getTotalAmount} = useContext(ShopContext)
  return (
    <div className='cartItems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_products.map((val)=>{
      if(cartItems[val.id]>0){
        return       <div>
        <div className="cartitems-format cartitems-format-main">
            <img className='carticon-product-icon' src={val.image} alt="" />
            <p>{val.name}</p>
            <p>${val.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[val.id]}</button>
            <p>${val.new_price * cartItems[val.id] }</p>
            <img className="carticon-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(val.id)}} alt="" />
        </div>
        <hr/>
      </div>
      }
      return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If You have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
