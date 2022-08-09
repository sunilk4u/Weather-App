import { useContext } from "react";
import DataContext from "./Context/DataContext";
/* eslint-disable */
function MainTile() {
  const { weatherData } = useContext(DataContext);

  return (
    <div className="main-tile">
      <div className="left-side">
        <img
          className="weather-logo"
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather icon"
        />
        <p className="temperature">24 *C</p>
      </div>
      <div className="right-side">
        <div className="right-upper">
          <p className="location">New Delhi, India</p>
        </div>
        <div className="right-down">
          <div className="right-down-left">
            <p className="weather">Weather</p>
            <p className="weather_show">Windy</p>
          </div>
          <div className="right-down-right">
            <p className="feels-like">Feels Like</p>
            <p className="feels-like_show">28 *c</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTile;
