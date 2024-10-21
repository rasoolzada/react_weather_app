# React Weather App

A simple and unique weather application built using ReactJS and Axios, which allows users to search weather information by city name. The app fetches the latitude and longitude of the city using the OpenWeatherMap Geo API and retrieves detailed weather data from the OpenWeatherMap Weather API.
![Weather App Screenshot](https://github.com/rasoolzada/react_weather_app/blob/master/react_weather_app/src/assets/ui.PNG)

## Features

- Search weather data by city name.
- Display temperature, weather description, humidity, wind speed, pressure, and sunrise/sunset times.
- Simple and clean user interface.
- Real-time weather data fetching using Axios.

## Tech Stack

- **ReactJS**: Frontend framework.
- **Axios**: For making HTTP requests to the OpenWeatherMap API.
- **OpenWeatherMap API**: Provides weather and geographical data.

## Usage

- Enter a city name in the search input.
- Press the "Enter" key to fetch the weather details.
- The app will display the temperature, humidity, pressure, wind speed, and sunrise/sunset times for the selected city.

## API Reference

- **Geocoding API**:  
  `http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid={API key}`
- **Weather API**:  
  `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`




