import { ACTION_TYPES } from "../Types/Actiontypes"


// setProduct
// fetchProduct
export const addToCart=(product)=>{
    return{
        type:ACTION_TYPES.ADD_TO_CART,
        payload:product
    }
}
export const removeFromCart =(id)=>{
    return{type:ACTION_TYPES.REMOVE_FROM_CART,
        payload:id
    }
}
