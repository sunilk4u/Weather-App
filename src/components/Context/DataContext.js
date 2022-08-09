import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import thunderstorm from "../../assets/images/thunderstorm.jpg";
import showerRain from "../../assets/images/shower-rain.jpg";
import rain from "../../assets/images/rain.jpg";
import snow from "../../assets/images/snow.jpg";
import scatteredClouds from "../../assets/images/scattered-clouds.jpg";
import clearSky from "../../assets/images/clear-sky.jpg";
import brokenClouds from "../../assets/images/broken-clouds.jpg";
import mist from "../../assets/images/mist.jpg";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("New Delhi");
  }, []);

  const fetchData = async (location) => {
    setLoading(true);
    const baseUrl = process.env.REACT_APP_API_URL;
    const APPID = process.env.REACT_APP_API_TOKEN;

    const response = await fetch(
      `${baseUrl}/?q=${location}&units=metric&APPID=${APPID}`
    );

    const data = await response.json();

    if (response.ok) {
      setWeatherData(data);
    } else {
      setWeatherData({
        error: true,
      });
    }

    setLoading(false);
  };
  /* eslint-disable */
  const changeCover = () => {
    const weather_id = weatherData.weather[0].id;
    const target = document.querySelector("body");

    if (weather_id >= 200 && weather_id <= 232) {
      target.style.background = `url(${thunderstorm})`;
    } else if (weather_id >= 300 && weather_id <= 321) {
      target.style.background = `url(${showerRain})`;
    } else if (weather_id >= 500 && weather_id <= 531) {
      target.style.background = `url(${rain})`;
    } else if (weather_id >= 600 && weather_id <= 622) {
      target.style.background = `url(${snow})`;
    } else if (weather_id >= 701 && weather_id <= 781) {
      target.style.background = `url(${mist})`;
    } else if (weather_id === 800) {
      target.style.background = `url(${clearSky})`;
    } else if (weather_id >= 801 && weather_id <= 804) {
      target.style.background = `url(${brokenClouds})`;
    } else {
      target.style.background = `url(${scatteredClouds})`;
    }

    target.style.backgroundRepeat = "no-repeat";
    target.style.backgroundPosition = "center";
    target.style.backgroundSize = "cover";
  };

  return (
    <DataContext.Provider
      value={{
        fetchData,
        weatherData,
        loading,
        changeCover,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
