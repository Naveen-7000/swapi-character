// FavoritesProvider.js
import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  // Add or remove a character from favorites
  const toggleFavorite = (characterId, heroData) => {
    const characterExists = favoriteCharacters.some((favorite) => favorite.id === characterId);

    if (characterExists) {
      const updatedFavorites = favoriteCharacters.filter((favorite) => favorite.id !== characterId);
      setFavoriteCharacters(updatedFavorites);
      localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorite = {
        id: characterId,
        data: heroData,
      };
      const updatedFavorites = [...favoriteCharacters, updatedFavorite];
      setFavoriteCharacters(updatedFavorites);
      localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <FavoritesContext.Provider value={{ favoriteCharacters, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
