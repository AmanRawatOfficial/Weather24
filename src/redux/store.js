import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmodeSlice";
import weatherReducer from "./weatherSlice"
import weatherHourReducer from "./weatherHourSlice"
import weatherDailyReducer from "./weatherDailySlice"

export default configureStore({
    reducer: {
        darkmode: darkmodeReducer,
        weather: weatherReducer,
        weatherHour: weatherHourReducer,
        weatherDaily: weatherDailyReducer
    }
})