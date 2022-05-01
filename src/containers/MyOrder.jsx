import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';

import iconFlechita from '@icons/flechita.svg';

const MyOrder = () => {
  const { state, toggleOrder } = useContext(AppContext);
  
  const sumTotal = () => {
    const reducer = (acomulator, currentValue) => acomulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={iconFlechita} alt="flechita" 
        onClick={() => toggleOrder()}/>
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div>
        {state.cart.map(product => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        </div>
        <div className="order orderTotal">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button add-to-cart-button">Checkout</button>
      </div>
    </aside>
  );
}

export default MyOrder;