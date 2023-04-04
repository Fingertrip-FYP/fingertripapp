import React from "react";

const SplashScreen = () => {
  return (
    <div
      style={{
        backgroundImage: "url('./backgroud/splashscreen-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export default SplashScreen;