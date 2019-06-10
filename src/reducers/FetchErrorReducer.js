import {FETCH_ERR} from "../types/types.js";


const fetchErrReducer = (state={},action) =>{
    switch(action.type){
        case FETCH_ERR:
            return action.payload
        default:
            return state
    }
}

export default fetchErrReducer;