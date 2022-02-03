import React from 'react';
import logo from '../../img/estrella.png';
import logo2 from '../../img/estrella2.png';

const FavoriteButton = ({ handlePress, id, favoriteItem }) => {


    return (
        <div>
            <div onClick={() => handlePress(id)}>
                {favoriteItem ? (
                    <img src={logo} alt="" />
                ) : (
                    <img src={logo2} alt="" />
                )}
            </div>
        </div>
    );
};

export default FavoriteButton;