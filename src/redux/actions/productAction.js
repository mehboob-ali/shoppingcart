import { ActionTypes } from "../constants/action-types";

const setProduct = (products) =>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : products,
    }
}

const selectedProduct = (products)=>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : products,
    }
}
const removeSelectedProduct=(products) => {
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload : products,
    }
}