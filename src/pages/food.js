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
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';
import { Product } from "./items";
import { IMG_CDN_URL } from "./constants";
import ItemQuantity from "./ItemQuantity";
import { ShimmerLines } from "./Shimmer";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";

function Food({ menuItems }) {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    
    return(
        <div
        style={{
            backgroundImage: `url('https://drive.google.com/uc?export=view&id=1MP91bvv0J8EZykOWOoTW_DywsqGWdKvc')`,
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
                    placeholder="Search Menu"
                    value="Doe"
                    callback={(record) => console.log(record)}
                    />
                    </div>
                </div>

                {/* Filters */}
                <div
                            style={{
                                position: 'absolute',
                                width: '388px',
                                height: '42px',
                                left: '21px',
                                top: '195px',
                                overflowX: 'scroll',
                            }}>
                                {/* <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                /> */}
                </div>
            
            {/* Menu Items */}
            return !menuItems ? (
    <ShimmerLines />
  ) : (
    <div className="restaurant-menu">
      {Object.values(menuItems).map((item) => (
        <div className="menu-items" key={item.card.info?.id}>
          <div className="item-details">
            <div className="item-extras">
              {/* Check for veg/non veg */}
              {item.card.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                <FaRegCaretSquareUp className="nonveg" size="1.25rem" />
              ) : (
                <FaRegStopCircle className="veg" size="1.25rem" />
              )}
              {/* Check for Bestsellers */}
              {item?.card?.info?.ribbon?.text === "Bestseller" && (
                <span className="bestseller">
                  <i className="fa fa-star"></i> Bestseller
                </span>
              )}
            </div>

            <h4>{item.card.info?.name}</h4>

            <p>₹{item.card.info?.price / 100}</p>
            <span className="item-desc">{item.card.info?.description}</span>
          </div>
          <div className="item-img">
            {!item.card.info?.imageId ? null : (
              <img src={IMG_CDN_URL + item.card.info?.imageId} />
            )}
            <div className="cart-action">
              <ItemQuantity item={item.card.info} key={item.card.info.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
            {/* <div
            style={{
                position: 'absolute',
                width: '350px',
                height: '500px',
                left: '28px',
                top: '266px',
            }}>
                <div
                style={{
                    position: 'absolute',
                    width: '106px',
                    height: '106px',
                    right: '0px',
                    top: '0px',
                    backgroundImage: `url('https://drive.google.com/uc?export=view&id=1xhj8fztHoetXucp588at1KnhDSuBO5qW')`,
                }}>
                    <button
                    style={{
                        color: 'blue',
                        position: 'absolute',
                        width: '78.4px',
                        height: '28px',
                        left: '14%',
                        top: '90%',
                    }}>
                        Add
                    </button>
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '374px',
                    height: '120px',
                    left: '0px',
                    top: '0px',
                }}>
                    <p
                    style={{
                    position: 'absolute',
                    margin: '0',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '21px',
                    textAlign: 'center',
                    color: '#36454F',
                    marginBottom: '20px',
                    }}>Chicken Biryani</p>
                    <p
                    style={{
                    position: 'absolute',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontSize: '18px',
                    lineHeight: '21px',
                    textAlign: 'center',
                    color: '#36454F',
                    marginBottom: '20px',
                    }}>Rs. 220</p>
                    <p
                    style={{
                        position: 'absolute',
                        left: '0%',
                        right: '33.96%',
                        top: '30%',
                        bottom: '11.67%',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '14px',
                        lineHeight: '14px',
                        display: 'flex',
                        alignItems: 'left',
                        color: '#36454F',
                        textAlign: 'left',
                        width: '50%',
                    }}>
                    <ReadMoreReact text={"Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in."}
                    min={10}
                    ideal={50}
                    max={100}
                    readMoreText={"Read more..."}
                />
                </p>
                </div>
            </div> */}

            {/* Bottom NavBar */}
            <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);}}>
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

export default Food;