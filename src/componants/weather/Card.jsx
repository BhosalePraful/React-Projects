import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import {
  WiSunset,
  WiHumidity,
  WiRainWind,
  WiStrongWind,
  WiFog,
  WiDust,
  WiDaySunny,
  WiDayHaze,
  WiDayCloudy,
  WiThunderstorm,
  WiRain,
} from "react-icons/wi";

const Card = ({ data }) => {
  const [WeatherIcon, setWeatherIcon] = useState("");

  //converting sunset time ses into houres
  let ses = data.sunset;
  let date = new Date(ses * 1000);
  const time = `${date.getHours()}:${date.getMinutes()}`;

  // real time date and time
  let DateOnly = new Date();
  let newDate = `${DateOnly.getDate()}-${
    DateOnly.getMonth() + 1
  }-${DateOnly.getFullYear()}`;

  let TimeOnly = new Date();
  let newTime = `${TimeOnly.getHours()}:${TimeOnly.getMinutes()}:${TimeOnly.getSeconds()}`;

  useEffect(() => {
    // if (data.weatherMood)
      switch (data.weatherMood) {
        case "Clouds":
          setWeatherIcon(<WiDayCloudy />);
          break;
        case "Haze":
          setWeatherIcon(<WiDayHaze />);
          break;
        case "Clear":
          setWeatherIcon(<WiDaySunny />);
          break;
        case "Dust":
          setWeatherIcon(<WiDust />);
          break;
        case "Smoke":
          setWeatherIcon(<WiDust />);
          break;
        case "Fog":
          setWeatherIcon(<WiFog />);
          break;
        case "Mist":
          setWeatherIcon(<WiFog />);
          break;
        case "Thunderstorm":
          setWeatherIcon(<WiThunderstorm />);
          break;
        case "Rain":
          setWeatherIcon(<WiRain />);
          break;
        default:
          setWeatherIcon(<WiDaySunny />);
          break;
      }
  }, [data.weatherMood]);

  return (
    <>
      <div className={style.main_Contener}>
        <div className={style.contener}>
          <div>
            <i className={style.Icon}>{WeatherIcon}</i>
          </div>
          <div className={style.Temp_date_contener}>
            <div className={style.Temp_data}>
              <h1>{data.temp}&deg;c</h1>
              <h2>{data.weatherMood}</h2>
              <div className={style.location}>
                <p>
                  {data.name},{data.country}
                </p>
              </div>
            </div>
            <div className={style.date_time}>
              <h1>{newDate}</h1>
              <h1>{newTime} PM</h1>
            </div>
          </div>
          <div className={style.Last_contener}>
            <div className={style.Weather_moreInfo}>
              <WiSunset />
              <h6>
                {time} PM <br></br> Sunset
              </h6>
            </div>
            <div className={style.Weather_moreInfo}>
              <WiHumidity />
              <h6>
                {data.humidity} <br></br>Humidity
              </h6>
            </div>
            <div className={style.Weather_moreInfo}>
              <WiRainWind />
              <h6>
                {data.pressure} <br></br> Pressure
              </h6>
            </div>
            <div className={style.Weather_moreInfo}>
              <WiStrongWind />
              <h6>
                {data.speed} <br></br> Wind
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
