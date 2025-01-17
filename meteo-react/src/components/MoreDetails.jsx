import React from "react";
import { useLocation } from "react-router-dom";
import "./MoreDetails.css";

const MoreDetails = () => {
  const location = useLocation();
  const weatherData = location.state?.weatherData;

  if (!weatherData) {
    return <p className="display-1">No data available.</p>;
  }

  return (
    <div className="moreDetails">
      <img src={weatherData.icon} alt="Weather Icon" className="weatherIcon" />
      <p className="temperature">Temperature: {weatherData.temperature} °C</p>
      <p className="location">Location: {weatherData.location}</p>
      <p className="description">Condition: {weatherData.description}</p>
      <p className="pressure">Pressure: {weatherData.pressure} hPa</p>
      <p className="maxTemp">Max Temperature: {weatherData.maxTemp} °C</p>
      <p className="minTemp">Min Temperature: {weatherData.minTemp} °C</p>
      <p className="visibility">
        Visibility: {Math.floor(weatherData.visibility) / 1000} km
      </p>{" "}
      {/* La visibilità è espressa in metri */}
      <p className="windDirection">
        Wind Direction: {weatherData.windDirection}°
      </p>{" "}
      {/* Direzione del vento */}
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
