import {createStore} from "redux"
import rootReducer from "./combineRedusers";
import {configureStore} from "@reduxjs/toolkit";



const store = configureStore({
    reducer:rootReducer
})

export default store