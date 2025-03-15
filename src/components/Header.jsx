// src/components/Header.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import iconhome from '../assets/images/icon-home.png';
import iconshop from '../assets/images/icon-shop.png';


const Header = () => {
  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((total, plant) => total + plant.quantity, 0);

  return (
    <header>
      <nav>
      <Link to="/">
          <img 
            src = {iconhome}
            alt="Home" 
            style={{ width: '50px', height: '50px', marginRight: '8px' }} 
          />
        </Link>
        <Link to="/cart">
          <img src= {iconshop} alt="Cart" style={{ width: '50px', height: '50px', marginRight: '8px' }} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
