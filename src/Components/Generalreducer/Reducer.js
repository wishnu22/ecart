import {combineReducers} from 'redux';
import { productReducer } from '../ProductReducer/ProductReducer';



// The combineReducers helper function turns an object whose values are different
//  reducing functions into a single reducing function you can pass to createStore 

export const reducer=()=>combineReducers({
  productsData:productReducer
})


