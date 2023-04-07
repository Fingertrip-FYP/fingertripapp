import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/splash';
import SignIn from './pages/signin';
import Welcome from './pages/welcome';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
