import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

function User() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return(
        <div
        style={{
            backgroundImage: `url('https://drive.google.com/uc?export=view&id=1pQ80dxTDEK4eu5PQoyz57EQoV_D7peDb')`,
            height: '100vh',
            color: '#36454F'
        }}>
            <div
            style={{
                background: 'rgba(250, 249, 246, 0.9)',
                position: 'absolute',
                width: '430px',
                height: '700px',
                left: '0px',
                top: '182px',
                overflowY: 'scroll',
            }}>
                {/* Guest Name */}
                <div
                style={{
                    position: 'absolute',
                    width: '240px',
                    height: '45px',
                    left: '100px',
                    top: '100px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '30px',
                    lineHeight: '45px',
                    textAlign: 'center',
                    color: '#36454F',
                }}>
                    Varun Khadayate
                </div>
                {/* Guest Details */}
                <div
                style={{
                    position: 'absolute',
                    width: '240px',
                    height: '45px',
                    left: '100px',
                    top: '150px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '20px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: '#36454F',
                }}>
                    Room No.: 504 <br />
                    emailid@gmail.com <br />
                    7036201903 <br />
                </div>
                {/* Options Scroller */}
                <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '40px',
                    left: '50px',
                    top: '250px',
                    color: 'blue',
                    border: '1px solid #1200DD',
                    borderRadius: '10px',
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '20px',
                        left: '77px',
                        top: '30%',
                        fontSize: '13px',
                        lineHeight: '20px',
                    }}>
                        Call Reception/Help Center
                    </div>
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '40px',
                    left: '50px',
                    top: '300px',
                    color: 'blue',
                    border: '1px solid #1200DD',
                    borderRadius: '10px',
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '20px',
                        left: '77px',
                        top: '30%',
                        fontSize: '13px',
                        lineHeight: '20px',
                    }}>
                        Order History
                    </div>
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '40px',
                    left: '50px',
                    top: '350px',
                    color: 'blue',
                    border: '1px solid #1200DD',
                    borderRadius: '10px',
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '20px',
                        left: '77px',
                        top: '30%',
                        fontSize: '13px',
                        lineHeight: '20px',
                    }}>
                        Payments
                    </div>
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '40px',
                    left: '50px',
                    top: '400px',
                    color: 'blue',
                    border: '1px solid #1200DD',
                    borderRadius: '10px',
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '20px',
                        left: '77px',
                        top: '30%',
                        fontSize: '13px',
                        lineHeight: '20px',
                    }}>
                        FAQ
                    </div>
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '40px',
                    left: '50px',
                    top: '450px',
                    color: 'blue',
                    border: '1px solid #1200DD',
                    borderRadius: '10px',
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '20px',
                        left: '77px',
                        top: '30%',
                        fontSize: '13px',
                        lineHeight: '20px',
                    }}>
                        Change Language
                    </div>
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '40px',
                    left: '50px',
                    top: '500px',
                    color: 'blue',
                    border: '1px solid #1200DD',
                    borderRadius: '10px',
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '20px',
                        left: '77px',
                        top: '30%',
                        fontSize: '13px',
                        lineHeight: '20px',
                    }}>
                        About Us
                    </div>
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '40px',
                    left: '50px',
                    top: '550px',
                    color: 'blue',
                    border: '1px solid #1200DD',
                    borderRadius: '10px',
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '20px',
                        left: '77px',
                        top: '30%',
                        fontSize: '13px',
                        lineHeight: '20px',
                    }}>
                        Give Feedback
                    </div>
                </div>
                <a href="https://rzp.io/l/RzVhpilWpM" target="_blank" rel="noreferrer">
                <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '40px',
                    left: '50px',
                    top: '600px',
                    color: 'red',
                    border: '1px solid red',
                    borderRadius: '10px',
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        width: '180px',
                        height: '20px',
                        left: '77px',
                        top: '30%',
                        fontSize: '13px',
                        lineHeight: '20px',
                    }}>
                        Checkout
                    </div>
                </div>
                </a>
            </div>

            <div
                style={{
                    position: 'absolute',
                    width: '160px',
                    height: '160px',
                    left: '135px',
                    top: '110px',
                    background: '#D9D9D9',
                    borderRadius: '50%',
                }}></div>
            {/* Bottom NavBar */}
            <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}>
                        <Link to="/home">
                            <BottomNavigationAction label="Home" icon={<HomeIcon />}/>
                        </Link>
                        <Link to="/food">
                            <BottomNavigationAction label="Food" icon={<RestaurantIcon />} />
                        </Link>
                        <Link to="/services">
                            <BottomNavigationAction label="Services" icon={<CleaningServicesIcon />} />
                        </Link>
                        <Link to="/explore">
                            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
                        </Link>
                        <Link to="/user">
                            <BottomNavigationAction label="User" icon={<PersonIcon />} />
                        </Link>
                    </BottomNavigation>
                </Paper>     
                </Box>
        </div>
    );
}

export default User;