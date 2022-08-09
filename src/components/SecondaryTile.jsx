import { useContext } from "react";
import DataContext from "./Context/DataContext";

function SecondaryTile() {
  const { weatherData, loading } = useContext(DataContext);

  return (
    <div className="secondary-tile">
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <>
          <div className="max-temp">
            <p className="title">Max Temp</p>
            <p className="show">{weatherData.main.temp_max.toFixed()} &#176;C</p>
          </div>
          <div className="min-temp">
            <p className="title">Min Temp</p>
            <p className="show">{weatherData.main.temp_min.toFixed()} &#176;C</p>
          </div>
          <div className="humidity">
            <p className="title">Humidity</p>
            <p className="show">{weatherData.main.humidity.toFixed()}</p>
          </div>
          <div className="wind">
            <p className="title">Wind Speed</p>
            <p className="show">{weatherData.wind.speed}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default SecondaryTile;
