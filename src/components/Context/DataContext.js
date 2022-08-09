import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  
  useEffect(() => {
    fetchData("New Delhi");
  }, []);

  const fetchData = async (location) => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const APPID = process.env.REACT_APP_API_TOKEN;

    const response = await fetch(`${baseUrl}/?q=${location}&APPID=${APPID}`);
    const data = await response.json();
    
    setWeatherData(data);
  };

  return (
    <DataContext.Provider
      value={{
        fetchData,
        weatherData,
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
