import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/signin', { replace: true });
        }, 5000);
      }, [navigate]);

    return(
        <div style={{backgroundImage: `url('https://drive.google.com/uc?export=view&id=16ZNQvP6hF7B6AEDKCjkYZJbB3o-_BMZw')`, height: '100vh'}}></div>
    )
}

export default Splash;