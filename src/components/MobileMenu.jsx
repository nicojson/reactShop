import React, { useContext } from 'react';
import '@styles/MobileMenu.scss';
import iconClose from "@icons/icon_close.png";
import AppContext from '../context/AppContext';

const MobileMenu = () => {
  const { toggleMenuMobile } = useContext(AppContext);

  return (
    <div className="mobile-menu">
      <img src={iconClose} alt="close"
      onClick={() => toggleMenuMobile()} />
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My accounts</a>
        </li>
      </ul>
      <ul className="MenuMobile-end">
        <li>
          <a href="/" className="email">
            juanperez@gmail.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;