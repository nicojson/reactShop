import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import iconAddToCart from '@icons/bt_add_to_cart.svg'
import iconAddedToCart from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = item => {
    console.log('incart: ', state.cart.includes(item));
    addToCart(item);
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="produc-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          { state.cart.includes(product) ? 
          <img className="disable add-to-cart-btn" 
          src={iconAddedToCart} alt="added To Cart" />
          : <img className="add-to-cart-btn pointer" 
          src={iconAddToCart} alt="add To Cart" />
          }
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;