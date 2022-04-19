import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmodeSlice";
import weatherReducer from "./weatherSlice"
import weatherHourReducer from "./weatherHourSlice"

export default configureStore({
    reducer: {
        darkmode: darkmodeReducer,
        weather: weatherReducer,
        weatherHour: weatherHourReducer
    }
})