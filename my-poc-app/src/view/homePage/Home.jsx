import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const dato = localStorage.getItem('key');
    console.log(dato);

    return (
        <div>
            <p>Welcome!</p>
            <button onClick={() => navigate('/Detail')}>Detalles</button>
            <p>{dato.email} </p>
        </div>
    );

};

export default Home;