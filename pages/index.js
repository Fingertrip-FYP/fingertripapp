import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import Login from "./login"

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : <Login />;
};

export default App;