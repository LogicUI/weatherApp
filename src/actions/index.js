import getCurrentPosition from '../apis/getCurrentPosition';
import { FETCH_WEATHER, FETCH_ERR } from '../types/types';
import { checkErrorCode ,getWeatherData} from './actionHelper';


/**
 * Fetches the geolocation latt and long of the user and fetches the weather
 * based on their geolocation
 */
export const fetchWeather = () => async (dispatch) => {
  try {
    const { coords } = await getCurrentPosition();
    const { latitude: latt, longitude: long } = coords;
    const response = await getWeatherData(latt,long);
    dispatch({ type: FETCH_WEATHER, payload: response.data});
  } catch (err) {
    console.log(err);
    // const errorResult = checkErrorCode(err);
    // dispatch({ type: FETCH_ERR, payload: errorResult });
  }
};


// location:
// country: "Singapore"
// lat: 1.28
// localtime: "2019-06-10 16:33"
// localtime_epoch: 1560155630
// lon: 103.85