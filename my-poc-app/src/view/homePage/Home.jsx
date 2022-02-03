import React from 'react';
import { useNavigate } from 'react-router-dom';
import TabBar from './TabBar';

const Home = () => {
    const navigate = useNavigate();

    const dato = localStorage.getItem('key');
    console.log(dato);

    const signOff = () => {
        localStorage.clear();
        (navigate('/')
        )
    }

    return (
        <div>
            <p>Welcome!</p>
            <p>{dato.email} </p>
            <button onClick={() => signOff()}>LogOut</button>

            <div>
                <TabBar />
            </div>
        </div>

    );
};

export default Home;