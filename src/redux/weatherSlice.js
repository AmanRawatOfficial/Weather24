import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherData: null
    },
    reducers: {
        setWeatherData: (state, action) => {
            state.weatherData = action.payload
        }
    }
})

export const { setWeatherData } = darkmodeSlice.actions
export default darkmodeSlice.reducer