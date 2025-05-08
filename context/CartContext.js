import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import network from '../utils/network';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [itemLoaders, setItemLoaders] = useState(false);
  const toggleItemLoader = () => {
    setItemLoaders(prev => !prev);
  };
  

  const loadCart = async () => {
    try {
      const res = await axios.get(`${network.BASE_URL}/products/cart`);
      setCartItems(res.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addItemToCart = async (productId, quantity = 1) => {
    try {
      await axios.post(`${network.BASE_URL}/products/cart/add`, {
        productId,
        quantity,
      });
      await loadCart(); 
    } catch (err) {
    }
  };

  const removeItemFromCart = async (productId) => {
    try {
      await axios.delete(`${network.BASE_URL}/products/cart/remove/${productId}`);
      await loadCart();
    } catch (err) {
    }
  };

  const updateItemQuantity = async (productId, quantity) => {
    try {
      await axios.patch(`${network.BASE_URL}/products/cart/update`, {
        productId,
        quantity
      });
      await loadCart();
    } catch (err) {
    }
  };

  const clearUserCart = async () => {
    try {
      await axios.delete(`${network.BASE_URL}/products/cart/clear`);
      await loadCart();
    } catch (err) {
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearUserCart,
        loadCart,
        cartUpdated,
        setCartUpdated,
        itemLoaders,
        toggleItemLoader
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
