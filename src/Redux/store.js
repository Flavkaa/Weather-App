import { createStore, applyMiddleware } from "redux";
import {weatherReducer} from "./reduce";
import thunk from "redux-thunk";

// создаем store
const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;
