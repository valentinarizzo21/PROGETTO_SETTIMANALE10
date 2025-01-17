import React from "react";
import { useLocation } from "react-router-dom";
import "./MoreDetails.css";

const MoreDetails = () => {
  const location = useLocation();
  const weatherData = location.state?.weatherData;

  if (!weatherData) {
    return <p>No data available.</p>;
  }

  return (
    <div className="moreDetails">
      <img src={weatherData.icon} alt="Weather Icon" className="weatherIcon" />
      <p className="temperature">Temperature: {weatherData.temperature} °C</p>
      <p className="location">Location: {weatherData.location}</p>
      <p className="description">Condition: {weatherData.description}</p>
      <p className="pressure">Pressure: {weatherData.pressure} hPa</p>
      <div className="extraDataWeather">
        <div className="col">
          <p>Humidity: {weatherData.humidity}%</p>
        </div>
        <div className="col">
          <p>Wind Speed: {weatherData.windSpeed} Km/h</p>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
