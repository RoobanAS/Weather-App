import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import "./style.css";

const App = () => {
  // States for weather data and error messages
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    const API_KEY = "f9057367f75ca54cbfc90e22fe9bb791"; // Replace with your actual API key
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    try {
      const response = await axios.get(URL);
      setWeatherData(response.data); // Update state with fetched data
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null); // Reset weather data on error
    }
  };

  return (
    <div className="app">
      <h1>React Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
