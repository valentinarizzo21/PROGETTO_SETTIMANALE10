import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import WeatherSec from "./components/WeatherSec";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreDetails from "./components/MoreDetails";
import FooterApp from "./components/FooterApp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<WeatherSec />} />
          <Route path="/moreDetails" element={<MoreDetails />} />
        </Routes>
        <FooterApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
