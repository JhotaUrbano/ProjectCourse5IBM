const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const productExists = state.cart.find((plant) => plant.id === action.payload.id);
        if (productExists) {
          return {
            ...state,
            cart: state.cart.map((plant) =>
              plant.id === action.payload.id
                ? { ...plant, quantity: plant.quantity + 1 }
                : plant
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((plant) => plant.id !== action.payload),
        };
      case 'INCREMENT':
        return {
          ...state,
          cart: state.cart.map((plant) =>
            plant.id === action.payload
              ? { ...plant, quantity: plant.quantity + 1 }
              : plant
          ),
        };
      case 'DECREMENT':
        return {
          ...state,
          cart: state.cart.map((plant) =>
            plant.id === action.payload && plant.quantity > 1
              ? { ...plant, quantity: plant.quantity - 1 }
              : plant
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  


  
  
  