import React, { useEffect, useState } from "react";

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
          setTemp(json.main.temp.toFixed(0) + " F");
          setWeatherDesc(json.weather[0].description);
        } else {
          console.log("error msg: " + xhr.status);
        }
      }
    };
    xhr.send();
  }

  useEffect(() => {
    getWeather();
  })
  return (
    <div>
    {weatherDesc && temp ? (
    <h1>
      {weatherDesc} and {temp}
    </h1>
    ) : (
      <h1>Fetching Weather...</h1>
    )}
    </div>
  );
}

export default Weather;


