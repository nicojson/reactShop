import React from 'react';
import Order from '@styles/Order.scss';

import iconFlechita from '@icons/flechita.svg';

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>04.25.2021</span>
        <span>6 articles</span>
      </p>
      <p>$ 2500.00</p>
      <img src={iconFlechita} alt="arrow" />
    </div>
  );
}

export default Order;