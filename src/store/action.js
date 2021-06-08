export const ADD_PRODUCT = "ADD_PRODUCT";

export function addProduct(payload) {
    return (dispatch)=>dispatch({ type: "ADD_PRODUCT", payload });
}
