import React, { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (item) => {
    setFavourites((prev) => {
      if (prev.some(fav => fav.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromFavourites = (itemId) => {
    setFavourites((prev) => prev.filter(item => item.id !== itemId));
  };

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites, clearFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
