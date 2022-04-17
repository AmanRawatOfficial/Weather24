import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherData: 0
    },
    reducers: {
        setWeatherData: (state, action) => {
            state.weatherData = action.payload
        }
    }
})

export const { setWeatherData } = weatherSlice.actions
export default weatherSlice.reducer