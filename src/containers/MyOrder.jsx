import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';

import iconFlechita from '@icons/flechita.svg';

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (acomulator, currentValue) => acomulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={iconFlechita} alt="flechita" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map(product => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
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