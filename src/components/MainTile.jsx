import { useContext } from "react";
import DataContext from "./Context/DataContext";
/* eslint-disable */
function MainTile() {
  const { weatherData, loading } = useContext(DataContext);

  return (
    <div className="main-tile">
      {loading && (<h2>Loading...</h2>)}
      {!loading && (
        <>
          <div className="left-side">
            <img
              className="weather-logo"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
            />
            <p className="temperature">{weatherData.main.temp.toFixed()} &#176;C</p>
          </div>
          <div className="right-side">
            <div className="right-upper">
              <p className="location">{weatherData.name}, {weatherData.sys.country}</p>
            </div>
            <div className="right-down">
              <div className="right-down-left">
                <p className="weather">Weather</p>
                <p className="weather_show">{weatherData.weather[0].main}</p>
              </div>
              <div className="right-down-right">
                <p className="feels-like">Feels Like</p>
                <p className="feels-like_show">{weatherData.main.feels_like.toFixed()} &#176;C</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MainTile;
