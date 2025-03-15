// src/redux/actions.js

export const addToCart = (plant) => ({
    type: 'ADD_TO_CART',
    payload: plant,
  });
  
  export const removeFromCart = (plantId) => ({
    type: 'REMOVE_FROM_CART',
    payload: plantId,
  });
  
  export const increment = (plantId) => ({
    type: 'INCREMENT',
    payload: plantId,
  });
  
  export const decrement = (plantId) => ({
    type: 'DECREMENT',
    payload: plantId,
  });
  