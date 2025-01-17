import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WeatherSec.css";
import i_search from "../assets/search.png";
import i_clear from "../assets/clear.png";
import i_cloud from "../assets/cloud.png";
import i_drizzle from "../assets/drizzle.png";
import i_humidity from "../assets/humidity.png";
import i_rain from "../assets/rain.png";
import i_snow from "../assets/snow.png";
import i_wind from "../assets/wind.png";

const WeatherSec = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const navigate = useNavigate();

  const iconsList = {
    "01d": i_clear,
    "01n": i_clear,
    "02d": i_cloud,
    "02n": i_cloud,
    "03d": i_cloud,
    "03n": i_cloud,
    "04d": i_drizzle,
    "04n": i_drizzle,
    "09d": i_rain,
    "09n": i_rain,
    "10d": i_rain,
    "10n": i_rain,
    "13d": i_snow,
    "13n": i_snow,
  };

  const getWeatherInfo = async (city) => {
    if (city === "") {
      alert("Enter a City name!");
      return;
    }
    try {
      const API_KEY = "e01be54d6eb21466b6f187c679c5421e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(
          `Errore nel recupero dei dati della fetch: ${res.status}`
        );
      }
      const data = await res.json();
      const icon = iconsList[data.weather[0].icon] || i_clear;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        icon: icon,
      });
      console.log(data);
    } catch (error) {
      setWeatherData(false);
      console.error("Errore nel recupero dei dati", error);
    }
  };

  useEffect(() => {
    getWeatherInfo("Nago-Torbole");
  }, []);

  return (
    <div className="weather">
      <div className="searchBar">
        <input ref={inputRef} type="text" placeholder="Search..." />
        <img
          src={i_search}
          alt="Search Icon"
          className="searchIcon"
          onClick={() => getWeatherInfo(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img
            src={weatherData.icon}
            alt="Weather Icon"
            className="showWeather"
          />
          <p className="showTemperature">{weatherData.temperature} °C</p>
          <p className="showLocation">{weatherData.location}</p>
          <div className="extraDataWeather">
            <div className="col">
              <img src={i_humidity} alt="Humidity Icon" />
              <div>
                <p>{weatherData.humidity}</p>
                <span>HUMIDITY</span>
              </div>
            </div>
            <div className="col">
              <img src={i_wind} alt="Wind Icon" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
          <button
            className="showDetails"
            onClick={() => navigate("/moreDetails", { state: { weatherData } })}
          >
            Show More Details
          </button>
        </>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default WeatherSec;
