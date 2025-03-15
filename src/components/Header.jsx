// src/components/Header.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((total, plant) => total + plant.quantity, 0);

  return (
    <header>
      <nav>
      <Link to="/">
          <img 
            src="/images/icon-home.png"
            alt="Home" 
            style={{ width: '50px', height: '50px', marginRight: '8px' }} 
          />
        </Link>
        <Link to="/cart">
          <img src= "/images/icon-shop.png" alt="Cart" style={{ width: '50px', height: '50px', marginRight: '8px' }} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
