import {FETCH_ERR} from "../types/types.js";


const fetchGeoErrRedcuer = (state={},action) =>{
    switch(action.type){
        case FETCH_ERR:
            return action.payload
        default:
            return state
    }
}

export default fetchGeoErrRedcuer;