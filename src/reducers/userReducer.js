import {CONSTANTS} from "../actionTypes";

const initialState = {

}
export default (state = initialState ,  {type , payload})=>{
    switch (type) {
        case CONSTANTS : return {
            ...state
        }
        default : return state;
    }
}