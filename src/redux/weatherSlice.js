import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherData: [
            {
                temp: 0,
                aqi: 0,
                weather: {
                    description: 0,
                },
                pres: 0,
                vis: 0,
                rh: 0
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
