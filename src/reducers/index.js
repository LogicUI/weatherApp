import { combineReducers } from 'redux';
import weatherReducer from "./weatherReducer";
import fetchGeoReducer from "./fetchGeoReducer";
import fetchGeoErrReducer from "./fetchGeoErrReducer";

export default combineReducers({
    geo: fetchGeoReducer,
    err: fetchGeoErrReducer
});