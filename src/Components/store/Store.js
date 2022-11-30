import { applyMiddleware, createStore} from "redux";
import { reducer } from "../Generalreducer/Reducer";
import typo from 'redux-typo';
// import thunk from 'redux-thunk'

export const Store=createStore(reducer,applyMiddleware(typo));