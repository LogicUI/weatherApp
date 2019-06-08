import { combineReducers } from 'redux';
import weatherReducer from "./weatherReducer";
import fetchGeoReducer from "./fetchGeoReducer";
export default combineReducers({
    geo: fetchGeoReducer
});