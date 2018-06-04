import {combineReducers} from "redux"
import {productReducer} from "./productReducer"
import {cartReducer} from "./cartReducer"

//create a store
//Below logic works only for single reducer
//let appStore =  createStore(productReducer);
export default combineReducers({productReducer, cartReducer})

