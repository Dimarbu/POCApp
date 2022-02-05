import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import starFavorite from '../../img/favorite.png';
import starWhite from '../../img/star-white.png';

const FavoriteButton = ({ handlePress, id, favoriteItem }) => {
    return (
        <Box position='absolute' alignSelf='flex-end' w='200px' onClick={() => handlePress(id)}>
            <Image display='flex' float='right' boxSize='32px' m='4px' src={favoriteItem ? starFavorite : starWhite} alt="" />
        </Box>
    );
};

export default FavoriteButton;