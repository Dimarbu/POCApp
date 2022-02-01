import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p>Welcome!</p>
            <button onClick={() => navigate('/Detail')}>Detalles</button>
        </div>
    );

};

export default Home;