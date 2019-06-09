import {FETCH_WEATHER} from "../types/types.js"

const FetchWeatherReducer= (state={},action) => {
        switch(action.type){
            case FETCH_WEATHER:
                return {...state,...action.payload}
            default:
                return state;
        }
}

export default FetchWeatherReducer