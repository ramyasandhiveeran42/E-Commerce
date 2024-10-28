import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Explore our stunning collection of dresses designed to make every moment memorable. From casual daywear to elegant evening attire, each piece is crafted with attention to detail, blending comfort and style effortlessly. Our dresses come in a variety of cuts, colors, and fabrics, catering to all tastes and occasions—whether it’s a sleek office look, a relaxed weekend style, or a dazzling outfit for special events.</p>
        <p>Embrace the confidence that comes with the perfect fit, and let our collection elevate your wardrobe with timeless elegance and contemporary flair.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
