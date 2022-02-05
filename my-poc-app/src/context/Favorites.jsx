import React, { useState } from 'react';
import { useContext } from 'react';


const FavoriteContext = React.createContext({})

export const Favorites = ({ children }) => {

    const [favoriteMovie, setFavoriteMovie] = useState([]);
    const [details, setDetails] = useState({});

    return (
        <FavoriteContext.Provider value={{ favoriteMovie, setFavoriteMovie, details, setDetails }}> {children} </FavoriteContext.Provider>
    );
}

export const useFavorite = () => useContext(FavoriteContext);

