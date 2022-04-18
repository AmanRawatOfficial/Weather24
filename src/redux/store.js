import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmodeSlice";
import weatherReducer from "./weatherSlice"
import aqiReducer from './aqiSlice'

export default configureStore({
    reducer: {
        darkmode: darkmodeReducer,
        weather: weatherReducer,
        aqi: aqiReducer
    }
})