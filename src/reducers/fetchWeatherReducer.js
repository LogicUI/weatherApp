import { FETCH_WEATHER } from '../types/types.js';


// forecast , location , current

const INITIAL_STATE = {forecast:null,location:null,current:null};

const FetchWeatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default FetchWeatherReducer;
