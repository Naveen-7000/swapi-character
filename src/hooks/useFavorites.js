import { useContext } from 'react';
import FavoritesContext from '../context-api/FavoriteContext';
export default function useFavorites() {
  const { favoriteCharacters, toggleFavorite } = useContext(FavoritesContext);

  return {
    favoriteCharacters,
    toggleFavorite,
  };
}
