import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);


  const loadCart = async () => {
    try {
      const res = await axios.get('http://192.168.1.92:3000/products/cart');
      setCartItems(res.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addItemToCart = async (productId, quantity = 1) => {
    try {
      await axios.post('http://192.168.1.92:3000/products/cart/add', {
        productId,
        quantity,
      });
      await loadCart(); // 🟢 refresh cart after adding
    } catch (err) {
    }
  };

  const removeItemFromCart = async (productId) => {
    try {
      await axios.delete(`http://192.168.1.92:3000/products/cart/remove/${productId}`);
      await loadCart();
    } catch (err) {
    }
  };

  const updateItemQuantity = async (productId, quantity) => {
    try {
      await axios.patch(`http://192.168.1.92:3000/products/cart/update`, {
        productId,
        quantity
      });
      await loadCart();
    } catch (err) {
    }
  };

  const clearUserCart = async () => {
    try {
      await axios.delete('http://192.168.1.92:3000/products/cart/clear');
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
        setCartUpdated
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
