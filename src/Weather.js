import React, { useState, useEffect } from 'react';
import './Weather.css'; // استيراد ملف CSS

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('London');  

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [city]);

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!weather) return <div>No weather data available</div>;

  return (
    <div className="weather-container">
      <h1>Weather in {weather.name}</h1>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <input
        type="text"
        value={city}
        onChange={handleChangeCity}
        placeholder="Enter city"
      />
    </div>
  );
}

export default Weather;
