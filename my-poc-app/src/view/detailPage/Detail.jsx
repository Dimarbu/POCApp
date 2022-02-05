import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorite } from '../../context/Favorites';
import Header from '../header/Header';
import { Image, Stack, Box, Text, Flex, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import '../style/style.css';

const Detail = () => {
    const navigate = useNavigate();
    const { details } = useFavorite();

    console.log(details, 'detail');
    return (
        <>
            <header>
                <Header />
            </header>
            <Stack >
                <Box className='containerDetail'>
                    <Box className='containerImgDetail' >
                        <img src={details.image} alt='Front Page' />
                    </Box>
                    <Box className='containerTextDetail'>
                        <h2>{details.title} </h2>
                        <p> <b>Director:</b>  {details.director} </p>
                        <p> <b>Descripción:</b> {details.description} </p>
                    </Box>
                </Box>
                <Button variant='solid' onClick={() => navigate('/Home')}>Volver a Home</Button>
            </Stack>

        </>
    );

};

export default Detail;