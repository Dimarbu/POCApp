import React from 'react';
import TabBar from './TabBar';
import Header from '../header/Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const sessionActive = localStorage.getItem('key');
        if (!sessionActive) {
            navigate('/')
        }
    }, [])

    return (
        <>
            <header >
                <Header />
            </header>

            <footer className='footer'>
                <TabBar />
            </footer>
        </>
    );
};

export default Home;