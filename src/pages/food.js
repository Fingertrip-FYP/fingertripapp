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

function Food() {
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
        <div style={{backgroundImage: `url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')`, height: '100vh'}}>
            
            {/* Div to wrap */}
            <div
            style={{
                position: 'absolute',
                width: '389px',
                height: '124px',
                left: '20px',
                top: '40px',
                }}>
                    {/* Displays guest name */}
                    <h4
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
                        Welcome Home
                        </h4>

                    {/* Displays room no. */}
                    <h5
                    style={{
                        position: 'absolute',
                        width: '97px',
                        height: '21px',
                        left: '40px',
                        top: '32px',
                        lineHeight: '21px',
                        textAlign: 'center',
                        color: '#36454F',
                    }}>
                        Room No. 305
                        </h5>

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

            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0px',
                gap: '67px',
                position: 'absolute',
                width: '370px',
                height: '113px',
                left: '33px',
                top: '223px',
            }}>
                <div
                style={{
                    backgroundColor: 'green',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '9px',
                    width: '84px',
                    height: '113px',
                    flex: 'none',
                    order: '0',
                    flexGrow: '0',
                }}>
                </div>
                <div
                style={{
                    backgroundColor: 'green',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '9px',
                    width: '83px',
                    height: '113px',
                    flex: 'none',
                    order: '1',
                    flexGrow: '0',
                }}> 
                </div>
                <div
                style={{
                    backgroundColor: 'green',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '9px',
                    width: '83px',
                    height: '113px',
                    flex: 'none',
                    order: '2',
                    flexGrow: '0',                    
                }}>

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
                // left: '33px',
                top: '530px',
                display: 'flex',
                overflow: 'auto',
                scrollSnapType: 'x mandatory',
                width: '390px',
                height: '250px',
                marginRight: '50px'
            }}>
                {Array.from({ length: 5 }).map((_, i) => (
                <li
                style={{
                    backgroundColor: 'aqua',
                    fontSize: '50px',
                    width: '300px',
                    height: '250px',
                    flexShrink: 0,
                    color: '#fff',
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
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/home"/>
                    <BottomNavigationAction label="Food" icon={<RestaurantIcon />} Component={Link} to="/food" />
                    <BottomNavigationAction label="Services" icon={<CleaningServicesIcon />} />
                    <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
                    <BottomNavigationAction label="User" icon={<PersonIcon />} />
                </BottomNavigation>
            </Paper>     
            </Box>
        </div>
      );
}

export default Food;