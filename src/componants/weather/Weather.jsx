import React, { useEffect, useState } from "react";
import style from "./Weather.module.css";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";

const Weather = () => {
  const [userCity, setuserCity] = useState("pune");
  const [WeatherData, setWeatherData] = useState({});

  const getSerchHandler = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&appid=553e570a0f86b89bd8eab20a550c703e`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { country, sunset } = data.sys;
      const { main: weatherMood } = data.weather[0];
      const { speed } = data.wind;
      const { name } = data;

      const weatherfulldata = {
        temp,
        humidity,
        pressure,
        country,
        sunset,
        weatherMood,
        speed,
        name,
      };
      setWeatherData(weatherfulldata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSerchHandler();
  }, []);

  return (
    <>
      <div className={style.contener}>
        <div className={style.input_btn}>
          <input
            type="text"
            placeholder="Your City"
            value={userCity}
            onChange={(e) => setuserCity(e.target.value)}
          ></input>
          <button onClick={getSerchHandler}>
            <FaSearch />
          </button>
        </div>
      </div>

      <Card data={WeatherData} />
    </>
  );
};

export default Weather;
