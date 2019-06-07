import {FETCH_COORDINATES} from "../types/types";
const INITIAL_STATE = {latitude:0, longitude:0 } ;

export default(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case FETCH_COORDINATES:
           return {...INITIAL_STATE,...action.payload};
        default:{
            return state;
        }
    }
}