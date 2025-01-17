import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import WeatherSec from "./components/WeatherSec";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <WeatherSec />
    </div>
  );
};

export default App;
