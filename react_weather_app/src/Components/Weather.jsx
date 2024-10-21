import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const apiKey = 'ec4db1e2ed6999bea21e3a65c6fbb178';  // Replace with your OpenWeatherMap API key

    const getLatLon = async () => {
        try {
            setError('');
            setLoading(true);
            // First fetch latitude and longitude using city name
            const geoResponse = await axios.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`
            );
            if (geoResponse.data.length === 0) {
                setError('City not found.');
                setLoading(false);
                return;
            }
            const { lat, lon } = geoResponse.data[0];
            getWeather(lat, lon); // Fetch weather data using the coordinates
        } catch (err) {
            setError('Could not fetch latitude and longitude. Please try again.');
            setLoading(false);
        }
    };

    const getWeather = async (lat, lon) => {
        try {
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );
            setWeatherData(weatherResponse.data);
            setLoading(false);
        } catch (err) {
            setError('Could not fetch weather data. Please try again.');
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            getLatLon();
        }
    };

    return (
        <div className="weather-container">
            <input
                type="text"
                placeholder="Enter city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={handleSearch}
                className="location-input"
            />
            {loading && <p>Loading weather data...</p>}
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Pressure: {weatherData.main.pressure} hPa</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
