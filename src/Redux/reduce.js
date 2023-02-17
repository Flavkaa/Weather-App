import axios from "axios";

const initialState = {
  data: null,
  loading: null,
};

const SET_WEATHER = "SET_WEATHER";
const SET_LOADING = "SET_LOADING";

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, data: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading,
  };
};

export const getWeather = (city) => {
  return (dispatch) => {
    const apiKey = "a974285ba60952542544c2e906e40532";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    dispatch(setLoading());
    axios.get(url).then((response) => {
      dispatch({ type: SET_WEATHER, payload: response.data });
    });
  };
};
