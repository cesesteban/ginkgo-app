export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export function addProduct(payload) {
    return (dispatch)=>dispatch({ type: "ADD_PRODUCT", payload });
}
export function removeProduct(payload) {
    return (dispatch)=>dispatch({ type: "REMOVE_PRODUCT", payload });
}
