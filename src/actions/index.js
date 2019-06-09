import getCurrentPosition from '../apis/getCurrentPosition';
import { FETCH_WEATHER, FETCH_ERR } from '../types/types';
import { checkErrorCode } from './actionHelper';
import apixu from '../apis/apixu';

/**
 * Fetches the geolocation latt and long of the user and fetches the weather
 * based on their geolocation 
 */
export const fetchWeather = () => async (dispatch) => {
  try {
    const { coords } = await getCurrentPosition();
    const { latitude: latt, longitude: long } = coords;
    const weatherFetch = await apixu.get('forecast.json', {
      params: {
        key:'cccb75dd9c9942cf958131844190806',
        q: `${latt},${long}`,
        days:7
      }
    });
    console.log(weatherFetch);
    dispatch({ type: FETCH_WEATHER, payload: { latt, long } });
  } catch (err) {
    const errorResult = checkErrorCode(err); 
    dispatch({ type: FETCH_ERR, payload: errorResult });
  }
};

