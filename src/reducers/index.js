import { combineReducers } from 'redux';
import fetchWeatherReducer from "./fetchWeatherReducer";
import fetchErrReducer from "./FetchErrorReducer";

export default combineReducers({
    Weather: fetchWeatherReducer,
    err: fetchErrReducer
});