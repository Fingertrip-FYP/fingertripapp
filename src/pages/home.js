import React from "react";
import ReactSearchBox from "react-search-box";
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
import { useSnapCarousel } from 'react-snap-carousel';
import { Link } from "react-router-dom";

function Home() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const { scrollRef } = useSnapCarousel();
    // data = [
    //     {
    //       key: "john",
    //       value: "John Doe",
    //     },
    //     {
    //       key: "jane",
    //       value: "Jane Doe",
    //     },
    //     {
    //       key: "mary",
    //       value: "Mary Phillips",
    //     },
    //     {
    //       key: "robert",
    //       value: "Robert",
    //     },
    //     {
    //       key: "karius",
    //       value: "Karius",
    //     },
    //   ];

    // const current_data = (data) => {
    //     props.current_data(data);
    // }

    return (
        // Set background color
        <div
        style={{
            backgroundImage: `url('https://drive.google.com/uc?export=view&id=1HmhdcQ9EJRDdsKHn5U0Wexn_Z-vEvrFE')`,
            height: '100vh',
            color: '#36454F'
        }}>
            
            {/* Div to wrap */}
            <div
            style={{
                position: 'absolute',
                width: '389px',
                height: '124px',
                left: '20px',
                top: '40px',
                }}>
                    <div
                    style={{
                        backgroundImage: `url('https://drive.google.com/uc?export=view&id=1wqyYC3dY-D2WaIEXLhIWhEVuNeqwt3WV')`,
                        position: 'absolute',
                        width: '36px',
                        height: '42px',
                        left: '0px',
                        top: '0px',
                    }}></div>
                    {/* Displays guest name */}
                    <p
                    style={{
                        position: 'absolute',
                        width: '148px',
                        height: '27px',
                        left: '30px',
                        top: '0px',
                        lineHeight: '27px',
                        textAlign: 'center',
                        color: '#36454F',
                    }}>
                        Welcome Varun
                        </p>

                    {/* Displays room no. */}
                    <p
                    style={{
                        position: 'absolute',
                        width: '120px',
                        height: '21px',
                        left: '40px',
                        top: '32px',
                        lineHeight: '21px',
                        textAlign: 'center',
                        color: '#36454F',
                    }}>
                        Room No. 305
                        </p>

                    {/* Search bar */}
                    <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '0px 13px',
                        gap: '15px',
                        position: 'absolute',
                        width: '280px',
                        height: '52px',
                        top: '72px',
                        borderRadius: '15px!important',
                    }}>
                    <ReactSearchBox
                    placeholder="Search Food, Cleaning..."
                    value="Doe"
                    // data={current_data}
                    callback={(record) => console.log(record)}
                    />
                    </div>
                </div>

            {/* 3 main options */}
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0px',
                gap: '67px',
                position: 'absolute',
                width: '300px',
                height: '113px',
                left: '33px',
                top: '223px',
            }}>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '9px',
                    width: '72px',
                    height: '113px',
                    flex: 'none',
                    order: '0',
                    flexGrow: '0',
                }}>
                    <div
                    style={{
                        backgroundImage: `url('https://drive.google.com/uc?export=view&id=1b_tuVESbjzD-jlovzQavxNCJCVtxkTMO')`,
                        width: '80px',
                        height: '80px',
                        borderRadius: '10px',
                        flex: 'none',
                        order: '0',
                        flexGrow: '0',
                    }}></div>
                    <p
                    style={{
                        margin: '0',
                        width: '42px',
                        height: '24px',
                        fontFamily: 'Poppins',
                        fontStyle: 'italic',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#36454F',
                        flex: 'none',
                        order: '1',
                        flexGrow: '0',
                    }}>Food</p>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '9px',
                    width: '72px',
                    height: '113px',
                    flex: 'none',
                    order: '1',
                    flexGrow: '0',
                }}>
                    <div
                    style={{
                        backgroundImage: `url('https://drive.google.com/uc?export=view&id=1LrGCdxa14BcJrLygJh6teWqDF1Jfquec')`,
                        width: '80px',
                        height: '80px',
                        borderRadius: '10px',
                        flex: 'none',
                        order: '0',
                        flexGrow: '0',
                    }}></div>
                    <p
                    style={{
                        margin: '0',
                        width: '42px',
                        height: '24px',
                        fontFamily: 'Poppins',
                        fontStyle: 'italic',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#36454F',
                        flex: 'none',
                        order: '1',
                        flexGrow: '0',
                    }}>Services</p>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '9px',
                    width: '72px',
                    height: '113px',
                    flex: 'none',
                    order: '2',
                    flexGrow: '0',                    
                }}>
                    <div
                    style={{
                        backgroundImage: `url('https://drive.google.com/uc?export=view&id=1XMe8DdZNCTdvF81HxuVKz_E6Bcwo2vMa')`,
                        width: '80px',
                        height: '80px',
                        borderRadius: '10px',
                        flex: 'none',
                        order: '0',
                        flexGrow: '0',
                    }}></div>
                    <p
                    style={{
                        margin: '0',
                        width: '42px',
                        height: '24px',
                        fontFamily: 'Poppins',
                        fontStyle: 'italic',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#36454F',
                        flex: 'none',
                        order: '1',
                        flexGrow: '0',
                    }}>Explore</p>
                </div>
            </div>

            {/* Hotel Slogan */}
            <h2
            style={{
                position: 'absolute',
                width: '350px',
                height: '52px',
                left: '33px',
                top: '417px',
            }}>True Luxury is in the details</h2>

            {/* Carousel for promotion */}
            <ul
            ref={scrollRef}
            style={{
                position: 'absolute',
                top: '530px',
                display: 'flex',
                overflow: 'auto',
                scrollSnapType: 'x mandatory',
                width: '380px',
                height: '200px',
                marginRight: '50px'
            }}>
                {Array.from({ length: 5 }).map((_, i) => (
                <li
                style={{
                    backgroundColor: 'aqua',
                    fontSize: '50px',
                    width: '300px',
                    height: '200px',
                    flexShrink: 0,
                    backgroundImage: `url('https://drive.google.com/uc?export=view&id=1nhGy3su-xuQsRBwunGOKSpIFvSOyThsQ')`,
                    color: '#FFFFFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '20px',
                }}></li>
                    ))}
            </ul>

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
                        <BottomNavigationAction label="Home" icon={<HomeIcon />}/>Home
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

export default Home;