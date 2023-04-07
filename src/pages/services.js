import React from "react";
// import ReactSearchBox from "react-search-box";
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
// import { useSnapCarousel } from 'react-snap-carousel';
import { Link } from "react-router-dom";

function Services() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    
    // {/* Bottom NavBar */}
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
}

export default Services;