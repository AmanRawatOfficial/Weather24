import { createSlice } from "@reduxjs/toolkit"

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherData: null
    },
    reducers: {
        setWeather: (state, action) => {
            state.weatherData = action.payload.data;
        }
    }
})

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;