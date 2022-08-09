function SecondaryTile() {
  return (
    <div className="secondary-tile">
        <div className="max-temp">
            <p className="title">Max Temp</p>
            <p className="show">30 *C</p>
        </div>
        <div className="min-temp">
            <p className="title">Min Temp</p>
            <p className="show">30 *C</p>
        </div>
        <div className="humidity">
            <p className="title">Humidity</p>
            <p className="show">30 *C</p>
        </div>
        <div className="wind">
            <p className="title">Wind Speed</p>
            <p className="show">30 *C</p>
        </div>
    </div>
  );
}

export default SecondaryTile;
