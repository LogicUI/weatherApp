import getCurrentPosition from '../apis/getCurrentPosition';
import { FETCH_WEATHER } from '../types/types';
import merriWeatherAPI from '../apis/merriWeatherAPI';

export const fetchWeather = () => async (dispatch) => {
  try {
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = coords;
    const range = await merriWeatherAPI.get(
      `/api/location/search/?lattlong=${latitude},${longitude}`
    );
    const { title, woeid } = range.data[0]; // the first index is the country we seek
    const result = await merriWeatherAPI.get(`/api/location/${woeid}`);
    const forecast = result.data.consolidated_weather;
    dispatch({type:FETCH_WEATHER,payload:{title,forecast}})
  } catch (err) {
    console.log(err.message);
  }
};

// export const fetchGeoCoordinates = () => async (dispatch) => {
//   try {
//     const { coords } = await getCurrentPosition();
//     const { latitude, longitude } = coords;
//     dispatch({ type: FETCH_COORDINATES, payload: { latitude, longitude } });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export const fetchLocation = (latt, long) => async (dispatch) => {
//   try {
//     const range = merriWeatherAPI.get(`/api/location/search/?lattlong=${latitude},${longitude}`);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
