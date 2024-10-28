import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import drop_down_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
import './CSS/ShopCategory.css';

const ShopCategory = ({banner,category}) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
       <div className="shopCategory-sort">
        Sort by <img src={drop_down_icon} alt="" />
       </div>
       </div>
       <div className="shopCategory-products">
       {all_products.map((item, index) => {
            return category === item.category ? (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ) : null;
          })}
       </div>
       <div className="shopCategory-loadmore">
        Explore More
       </div>
      </div>
    
  )
}

export default ShopCategory   
