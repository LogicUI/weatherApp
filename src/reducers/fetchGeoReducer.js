import {FETCH_GEO} from "../types/types.js"

const FetchGeoReducer = (state={},action) => {
        switch(action.type){
            case FETCH_GEO:
                return {...state,...action.payload}
            default:
                return state;
        }
}

export default FetchGeoReducer