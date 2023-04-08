import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/home', { replace: true });
        }, 5000);
      }, [navigate]);

    return(
        <div
        style={{
            backgroundImage: `url('https://drive.google.com/uc?export=view&id=1HmhdcQ9EJRDdsKHn5U0Wexn_Z-vEvrFE')`,
            height: '100vh',
            color: '#36454F'
            }}>
            <p
            style={{
                position: 'absolute',
                width: '220px',
                height: '45px',
                marginLeft: '100px',
                marginTop: '383px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '30px',
                lineHeight: '45px',
                textAlign: 'center',
                color: '#36454F',
            }}>Welcome Name</p>
            <p
            style={{
                position: 'absolute',
                width: '305px',
                height: '36px',
                marginLeft: '62px',
                marginTop: '453px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '36px',
                textAlign: 'center',
                color: '#36454F',
            }}>
                Enjoy your stay at the Taj
            </p>
        </div>
    )
}

export default Splash;