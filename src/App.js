import './App.css';
import SignIn from './src/pages/signin';
import AuthDetails from './src/firebase/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn />
      <AuthDetails />
    </div>
  );
}

export default App;