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
        <div style={{backgroundImage: `url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')`, height: '100vh'}}></div>
    )
}

export default Splash;