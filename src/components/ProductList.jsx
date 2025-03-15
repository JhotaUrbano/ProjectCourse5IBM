import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { addToCart } from '../redux/actions';
import plant1 from '../assets/images/plant1.jpg';
import plant2 from '../assets/images/plant2.jpg';
import plant3 from '../assets/images/plant3.jpg';
 

const products = [
  { id: 1, name: 'Gynura ', price: 10, image: plant1, category: 'indoor' },
  { id: 2, name: 'Violeta africana ', price: 15, image: plant2, category: 'indoor' },
  { id: 3, name: 'Senecio azul ', price: 20, image: plant3, category: 'outdoor' },
];

const ProductList = () => {
    const dispatch = useDispatch();
  
    // Usamos useSelector para obtener el carrito desde el estado global de Redux
    const cartItems = useSelector((state) => state.cart);
  
    // Función para verificar si el producto está en el carrito
    const isProductInCart = (productId) => {
      return cartItems.find((plant) => plant.id === productId);
    };
  
    // Función para manejar la acción de agregar al carrito
    const handleAddToCart = (plant) => {
      dispatch(addToCart(plant)); // Dispara la acción de Redux para agregar al carrito
    };
  
    return (
      <div className="product-list">
        {products.map((plant) => {
          const productInCart = isProductInCart(plant.id); // Verificamos si el producto está en el carrito
  
          return (
            <div key={plant.id} className="product-card">
              <img src={plant.image} alt={plant.name} className="product-image" />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
  
              {/* Mostrar el contador y el botón de añadir al carrito */}
              <div className="cart-info">
                {productInCart ? (
                  <>
                    {/* Mostrar la cantidad en el carrito */}
                    <span>{/*{productInCart.quantity}*/}</span><br></br>
                    <button disabled>Added to Cart</button>
                  </>
                ) : (
                  <button onClick={() => handleAddToCart(plant)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ProductList;
