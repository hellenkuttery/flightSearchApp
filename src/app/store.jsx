import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../features/flightSlice"
const store=configureStore({
    reducer:{
        flight:flightReducer
    }
})

export default store;