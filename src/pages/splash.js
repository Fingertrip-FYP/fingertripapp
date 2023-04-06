import './splash.css';
import background from "../assets/background/splashscreen-bg.png";

function Splash() {
  return (
    <header className="App-header" style={{ backgroundImage: `url(${background})` }}></header>
  );
}

export default Splash;