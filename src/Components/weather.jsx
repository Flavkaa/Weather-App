import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../Redux/reduce';

const Weather = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(getWeather(city));
    };
  
    const handleChange = (e) => {
      setCity(e.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} placeholder="Введите имя" />
        <button type="submit" disabled={!city}>Узнать погоду</button>
      </form>
    );
  };

export default Weather