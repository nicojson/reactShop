import React from 'react';
import ProductInfo from '@styles/ProductInfo.scss';

import iconAddToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
      <img className="product-image" src="https://images.pexels.com/photos/4710405/pexels-photo-4710405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bike" />
      <div className="ProductInfo">
        <p>$ 500.00</p>
        <p>Mountain bike</p>
        <p>
          Resistant and light for any day, ideal for difficult roads and with
          its tubeless tires you will not get a flat tire on any route
        </p>
        <button className="primary-button add-to-cart-button">
          <img src={iconAddToCart} alt="add ro cart" />
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductInfo;