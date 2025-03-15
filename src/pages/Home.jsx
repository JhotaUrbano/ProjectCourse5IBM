import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('hasSeenModal', 'true'); 
  };


  useEffect(() => {

    if (!localStorage.getItem('hasSeenModal')) {
      setIsModalOpen(true);    
    }
 
  }, []); 
  

  return (
    <div className="home" style={{ backgroundImage: 'images/background.jpg', backgroundSize: 'cover' }}>
        <h1>Welcome to Our Plant Shop</h1>
      <div className="main-content">
        <p>Your go-to place for beautiful indoor and outdoor plants</p>
        <ProductList />
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Welcome to Our Shop!</h2>
            <p>Click "Accept" to continue shopping.</p>
            <button onClick={closeModal}>Accept</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

