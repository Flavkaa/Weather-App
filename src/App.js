import "./App.css";
import Weather from "./Components/weather";
import { useSelector } from "react-redux";
import "./Spinner-2.gif"

function App() {
  const weatherData = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  console.log(loading);
  console.log(weatherData);
  if (loading === true) {
    return (
      <div className="main">
        <h1>Погода сейчас</h1>
        <h3>Узнаём погоду...</h3>
      </div>
    );
  }
  return (
    <>
      <div className="main">
        <h1>Погода сейчас</h1>
        <Weather />
        {weatherData ? (
          <div className="weather__data">
            <i class="bx bx-building-house icon"></i>
            <h2>Погода в {weatherData.name}</h2>
            <i class="bx bxs-thermometer icon"></i>{" "}
            <p>Температура: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <i class="bx bxs-balloon icon"></i>
            <p>Давление: {weatherData.main.pressure} hPa</p>
            <i class="bx bx-water icon"></i>{" "}
            <p>Влажность: {weatherData.main.humidity}%</p>
            <i class="bx bx-wind icon"></i>{" "}
            <p>Скорость ветра: {weatherData.wind.speed} m/s</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
