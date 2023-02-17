// import axios from "axios";

// let initialState = {
//   temp: null,
//   city: null,
//   weather: null,
//   country: null,
//   isLoading: false,
// };

// const SET_WEATHER = "SET_WEATHER";
// const SET_TEMP = "SET_TEMP";
// const SET_CITY = "SET_CITY";
// const SET_COUNTRY = "SET_COUNTRY";
// const SET_LOADING = "SET_LOADING";

// export const weatherReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_TEMP:
//       return { ...state, temp: action.payload };
//     case SET_CITY:
//       return { ...state, town: action.payload };
//     case SET_WEATHER:
//       return { ...state, weather: action.payload };
//     case SET_COUNTRY:
//       return { ...state, country: action.payload };
//     case SET_LOADING:
//       return { ...state, isLoading: action.payload };
//     default:
//       return state;
//   }
// };

// export const setWeather = (weather) => {
//   return {
//     type: SET_WEATHER,
//     weather,
//   };
// };

// export const setTemp = (temp) => {
//   return {
//     type: SET_TEMP,
//     payload: temp,
//   };
// };

// export const setCity = (city) => {
//   return {
//     type: SET_CITY,
//     city,
//   };
// };
// export const setCountry = (country) => {
//   return {
//     type: SET_COUNTRY,
//     country,
//   };
// };
// export const setIsLoading = (isLoading) => {
//   return {
//     type: SET_LOADING,
//     isLoading: true,
//   };
// };
// export const getWeather = (city) => {
//   return (dispatch) => {
//     const apiKey = "a974285ba60952542544c2e906e40532";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     axios
//       .get(url)
//       .then((response) => {
//         dispatch(setWeather(city));
//       })
//       .catch((error) => {
//         dispatch({ type: "GET_WEATHER_ERROR", payload: error.message });
//       });
//   };
// };
