// import {REMOVE_SHIFTS, GET_SHIFTS, POST_SHIFT} from "./action";

const initialState = {
    shifts: [],
    statePost: ""
};

function rootReducer(state = initialState, action) {
    //     if (action.type === POST_SHIFT){
    //       return {
    //         statePost: action.payload
    //       }
    //     }
    //     if (action.type === GET_SHIFTS){
    //       return {
    //         shifts: action.payload
    //       }
    //     }
    //     if (action.type === REMOVE_SHIFTS){
    //         return {
    //             ...state,
    //           shifts: state.shifts.filter(item => item.title !== action.payload.title)
    //         }
    //     }
    //     return state;
}

export default rootReducer;