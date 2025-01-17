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
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="location align-self-center">{weatherData.location}</h1>
          <img
            src={weatherData.icon}
            alt="Weather Icon"
            className="weatherIcon"
          />
        </div>
        <div className="col-12 col-md-6 properties d-flex justify-content-center">
          <div className="weatherInfo">
            <p className="temperature d-flex flex-column">
              <strong>Temperature:</strong>
              <span className="temp-value">{weatherData.temperature} °C</span>
            </p>

            <p className="description d-flex flex-column">
              <strong>Condition:</strong>
              <span className="temp-value">{weatherData.description}</span>
            </p>
            <p className="pressure d-flex flex-column">
              <strong>Pressure:</strong>
              <span className="temp-value">{weatherData.pressure} hPa</span>
            </p>
            <p className="maxTemp d-flex flex-column">
              <strong>Max Temperature:</strong>
              <span className="temp-value">{weatherData.maxTemp} °C</span>
            </p>

            <p className="minTemp d-flex flex-column">
              <strong>Min Temperature:</strong>
              <span className="temp-value">{weatherData.minTemp} °C</span>
            </p>
            <p className="visibility d-flex flex-column">
              <strong>Visibility:</strong>
              <span className="temp-value">
                {Math.floor(weatherData.visibility / 1000)} km
              </span>
            </p>
            <p className="windDirection d-flex flex-column">
              <strong>Wind Direction:</strong>
              <span className="temp-value">{weatherData.windDirection}°</span>
            </p>
            <p className="d-flex flex-column">
              <strong>Humidity:</strong>
              <span className="temp-value">{weatherData.humidity}%</span>
            </p>
            <p className="d-flex flex-column">
              <strong>Wind Speed:</strong>
              <span className="temp-value">{weatherData.windSpeed} Km/h</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
