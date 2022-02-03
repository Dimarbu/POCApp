import React, { useState } from 'react';


export const FavoriteContext = React.createContext({})

export const Favorites = ({ children }) => {

    const [favoriteMovie, setFavoriteMovie] = useState([]);

    return (
        <FavoriteContext.Provider value={{ favoriteMovie, setFavoriteMovie }}> {children} </FavoriteContext.Provider>
    );
}

