import {
    ADD_TO_CART,
    MINUS_ITEM,
    PLUS_ITEM,
    REMOVE_CART_ITEM,
    SET_EMPTY_CART,
    SET_TOTAL_COUNT,
    SET_TOTAL_SIZE, SET_TYPE_FROM_LOCALSTORAGE
} from "../selectors/cart";
export const addToCart=(item)=>{
    return {type:ADD_TO_CART,payload:item}
}
export const setTotalCount=(count)=>{
    return{type:SET_TOTAL_COUNT,payload:count}
}
export const setTotalSize=(size)=>{
    return{type:SET_TOTAL_SIZE,payload:size}
}
export const setEmptyCart=()=>{
    return {type:SET_EMPTY_CART}
}
export const removeCartItem=(key)=>{
    return{type:REMOVE_CART_ITEM,payload:key}
}
export const minusItem=(key)=>{
    return{type:MINUS_ITEM,payload:key}
}
export const plusItem=(key)=>{
    return{type:PLUS_ITEM,payload:key}
}
export const setItemsFromLocalStorage=(items)=>{
    return {type:SET_TYPE_FROM_LOCALSTORAGE,payload:items}
}
