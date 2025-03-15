// src/components/Cart.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeFromCart } from '../redux/actions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (plantId) => {
    dispatch(increment(plantId));
  };

  const handleDecrement = (plantId) => {
    dispatch(decrement(plantId));
  };

  const handleRemove = (plantId) => {
    dispatch(removeFromCart(plantId));
  };

  const totalCost = cartItems.reduce((total, plant) => total + plant.price * plant.quantity, 0);

  return (
    <div className="product-shop-card">
      <h1>Your Cart</h1>
      <ul >
        {cartItems.map((plant) => (
          <><li key={plant.id}>
                <img src={plant.image} alt={plant.name} className="product-image-card" />
                <p>{plant.name}</p>
                <p>${plant.price}</p>
                <p>Quantity: {plant.quantity}</p>
                <button onClick={() => handleIncrement(plant.id)}>+</button>
                <button onClick={() => handleDecrement(plant.id)}>-</button>
                <button onClick={() => handleRemove(plant.id)}>Remove</button>
            </li><br></br></>
        ))}
      </ul>
      <br></br>
      <p>Total Cost: ${totalCost}</p>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
};

export default Cart;
