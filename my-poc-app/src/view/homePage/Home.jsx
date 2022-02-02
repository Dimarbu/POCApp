import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <button onClick={() => navigate('/Detail')}>Detalles</button>
            <p>{dato.email} </p>
            <button onClick={() => signOff()}>LogOut</button>
        </div>
    );

};

export default Home;