import React, { useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import MenuMobile from '@components/MobileMenu';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
const { state, toggleOrder, toggleMenu, toggleMenuMobile } = useContext(AppContext);

  return (
    <nav className="navbar">
      <img
        className="menu-icon"
        src={iconMenu}
        alt="menu"
        onClick={() => toggleMenuMobile()} />
      <div className="navbar-left">
        <img
          className="nav-logo"
          src={logo}
          alt="logo"/>
        <ul className="categories">
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
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <p className="navbar-email" onClick={() => toggleMenu()}>
              juanperez@gmail.com</p>
          </li>
          <li className="navbar-shopping-cart" onClick={() => toggleOrder()}>
            <img
              src={shoppingCart}
              alt="cart"
            />
            {state.cart.length > 0 ? <div>`{state.cart.length}`</div> : null}
          </li>
        </ul>
      </div>
      {state.menuMobileIsOpen && <MenuMobile />}
      {state.menuIsOpen && <Menu />}
      {state.orderIsOpen && <MyOrder />}
    </nav>
  );
}

export default Header;