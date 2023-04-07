import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/splash';
import SignIn from './pages/signin';
import Welcome from './pages/welcome';
import Home from './pages/home'
import Food from './pages/food';
import Services from './pages/services';
import User from './pages/user';
import Explore from './pages/explore';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="home" element={<Home />} />
        <Route path="food" element={<Food />} />
        <Route path="services" element={<Services />} />
        <Route path="user" element={<User />} />
        <Route path="explore" element={<Explore />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>

  );
}

export default App;
