import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherData: [
            {
                temp: 0,
                weather: {
                    description: "",
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
