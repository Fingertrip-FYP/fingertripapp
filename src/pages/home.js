import React, { Component } from "react";
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
        <div style={{backgroundImage: `url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')`, height: '100vh'}}>
            {/* <ReactSearchBox
            placeholder="Placeholder"
            value="Doe"
            data={current_data}
            callback={(record) => console.log(record)}
          /> */}
          <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Food" icon={<RestaurantIcon />} />
                    <BottomNavigationAction label="Services" icon={<CleaningServicesIcon />} />
                    <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
                    <BottomNavigationAction label="User" icon={<PersonIcon />} />
                </BottomNavigation>
            </Paper>
            </Box>
            <ul
            ref={scrollRef}
            style={{
                display: 'flex',
                overflow: 'auto',
                scrollSnapType: 'x mandatory',
                width: '390px',
                height: '250px',
                marginRight: '20px'
            }}>
                {Array.from({ length: 100 }).map((_, i) => (
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
                }}>
                    Item {i}
                </li>
                    ))}
            </ul>
        </div>
      );
}

export default Home;