import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherText = styled.p`
  text-align: center;
  font-size: 1.75rem;
  margin: 0.5rem;
  & span{
    text-transform: capitalize;
  }
`;

function Weather() {
  const [weatherDesc, setWeatherDesc] = useState(null);
  const [temp, setTemp] = useState(null);

  const getWeather = () => {
    let xhr = new XMLHttpRequest();
    // Request to open weather map
    xhr.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?id=5729080&units=imperial&appid=e5b292ae2f9dae5f29e11499c2d82ece"
    );
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let json = JSON.parse(xhr.responseText);
          setTemp(json.main.temp.toFixed(0) + "°F");
          setWeatherDesc(json.weather[0].description);
        } else {
          console.log("error msg: " + xhr.status);
        }
      }
    };
    xhr.send();
  };

  useEffect(() => {
    getWeather();
  });
  return (
    <>
      {weatherDesc && temp ? (
        <WeatherText>
          <span>{weatherDesc}</span> and {temp}
        </WeatherText>
      ) : (
        <WeatherText>Fetching Weather...</WeatherText>
      )}
    </>
  );
}

export default Weather;
