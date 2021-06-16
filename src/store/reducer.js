import {ADD_PRODUCT} from "./action";
import {REMOVE_PRODUCT} from "./action";

const initialState = {
    products:[]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_PRODUCT) {
        console.log('state',state.products)
        return {
            ...state,
            products: state.products.concat(action.payload)
        }
    }
    if (action.type === REMOVE_PRODUCT) {
        return {
            ...state,
            products: state.products.filter(product=>product.product!=action.payload)
        }        
    }
    return state;
}

export default rootReducer;