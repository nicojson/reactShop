import React from 'react';
import '@styles/ShoppingCartItem';

const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img src="https://images.pexels.com/photos/4710405/pexels-photo-4710405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="mountain bike" />
      </figure>
      <p>Mountain bike</p>
      <p>$ 500.00</p>
    </div>
  );
}

export default ShoppingCartItem;