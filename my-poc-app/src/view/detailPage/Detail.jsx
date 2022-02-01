import React from 'react';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p>Detalles</p>

            <button onClick={() => navigate('/Home')}>Volver a Home</button>
        </div>
    );

};

export default Detail;