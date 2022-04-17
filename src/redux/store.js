import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmodeSlice";
import weatherReducer from "./weatherSlice"

export default configureStore({
    reducer: {
        darkmode: darkmodeReducer,
        weather: weatherReducer
    }
})