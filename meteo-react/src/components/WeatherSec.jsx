import React, { useEffect } from "react";
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
  const getWeatherInfo = async (city) => {
    try {
      const API_KEY = "e01be54d6eb21466b6f187c679c5421e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      console.log("Fetching URL:", url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeatherInfo("london");
  }, []);
  return (
    <div className="weather">
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
        <img src={i_search} alt="SeachIcon" className="SeachIcon" />
      </div>
      <img src={i_clear} alt="showWeather" className="showWeather" />
      <p className="showTemperature"> 30 °C</p>
      <p className="showLocation">Milan</p>
      <div className="extraDataWeather">
        <div className="col">
          <img src={i_humidity} alt="humidityIcon" />
          <div>
            <p> 91 %</p>
            <span>HUMIDITY</span>
          </div>
        </div>
        <div className="col">
          <img src={i_wind} alt="windIcon" />
          <div>
            <p> 3.6 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
      <button className="showDetails">Show More details</button>
    </div>
  );
};

export default WeatherSec;
