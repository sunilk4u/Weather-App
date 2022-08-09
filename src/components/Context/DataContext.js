import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

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

  return (
    <DataContext.Provider
      value={{
        fetchData,
        weatherData,
        loading,
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
