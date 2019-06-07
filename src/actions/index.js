import getCurrentPosition from '../apis/getCurrentPosition';
import { FETCH_COORDINATES } from '../types/types';
import searchLocation from "../apis/searchLocation";

export const fetchGeoCoordinates = () => async (dispatch) => {
  try {
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = coords;
    dispatch({ type: FETCH_COORDINATES, payload: { latitude, longitude } });
  } catch (err) {
    console.log(err.message);
  }
};



export const fetchLocation = (lati,longi) => {
    try{
        searchLocation.get
    }catch(err){
        console.log(err.message);
    }
}


