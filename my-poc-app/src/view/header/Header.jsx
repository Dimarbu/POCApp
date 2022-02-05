import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Image } from '@chakra-ui/react';
import youtube from '../../img/youtube.png';
import facebook from '../../img/logo-facebook.png';
import twitter from '../../img/gorjeo.png';

const Header = () => {
    const navigate = useNavigate();

    const dato = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')).email : '';

    const signOff = () => {
        localStorage.clear();
        (navigate('/')
        )
    }

    return (
        <header className='header'>
            <div>
                <h1>The Studio Ghibli</h1>
                <div className='divLinks'>
                    <Link href='https://www.facebook.com/GKIDSfilms' isExternal> <Image mr='5px' boxSize='30px' src={facebook} alt="" /> </Link>
                    <Link href='https://www.youtube.com/channel/UCb9ME2w6Y_4jChUVlWdltVg' isExternal> <Image mr='5px' boxSize='30px' src={youtube} alt="" /> </Link>
                    <Link href='https://twitter.com/GKIDSfilms' isExternal> <Image mr='5px' boxSize='30px' src={twitter} alt="" /> </Link>
                </div>
            </div>
            <container className='rightcontainer'>
                <div className='logOut'>
                    <button onClick={() => signOff()}>LogOut</button>
                </div>
                <h3>{dato} </h3>

            </container>
        </header>
    );
};

export default Header;