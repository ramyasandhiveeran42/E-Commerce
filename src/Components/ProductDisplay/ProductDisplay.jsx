import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({product}) => {
    const {addToCart} = useContext(ShopContext);
    console.log("Product:", product); 
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
          <div className="productdisplay-image-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
      </div>
      <div className="productdisplay-right">
      <h1>{product.name}</h1>
      <div className="productdisplay-rightstars">
         <img src={star_icon} alt="" />
         <img src={star_icon} alt="" />
         <img src={star_icon} alt="" />
         <img src={star_icon} alt="" />
         <img src={star_dull_icon} alt="" />
         <p>(122)</p>
      </div>
      <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
      </div>
      <div className="productdisplay-right-description">
       This elegant dress features a fitted bodice and flowing skirt, perfect for any occasion. Its soft fabric and flattering silhouette add a touch of sophistication and grace.
      </div>
      <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XLL</div>
        </div>
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
      <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
