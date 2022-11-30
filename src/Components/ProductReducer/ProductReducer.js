import { ACTION_TYPES } from "../Types/Actiontypes";
const initialState={
    products:[],
    cartData:[]
}

export const productReducer=(state=initialState,action)=>{
    console.log(action.type)
     switch(action.type){
        case ACTION_TYPES.ADD_TO_CART:
            console.log(action)
            // return{...state,cartData:[...state.cartData,action.payload]}



        case ACTION_TYPES.FETCH_PRODUCTS:
            console.log(action)
            return{...state,products:action.payload}
        

        default: 
            return state;
     }
} 