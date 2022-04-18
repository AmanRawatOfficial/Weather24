import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherData: [
            {
                temp: 0,
                aqi: "Loading...",
                weather: {
                    description: "Loading...",
                },
            },
        ],
    },
    reducers: {
        setWeatherData: (state, action) => {
            state.weatherData = action.payload.data;
        },
    },
});

export const { setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
