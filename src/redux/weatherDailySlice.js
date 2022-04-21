import { createSlice } from "@reduxjs/toolkit";

export const weatherDailySlice = createSlice({
    name: "weatherDaily",
    initialState: {
        weatherDailyData: {
            data: [
                {
                    temp: 0,
                    max_temp: 0,
                    min_temp: 0,
                    weather: {
                        description: "Loading..",
                        icon: "a01d"
                    },
                },
                {
                    temp: 0,
                    max_temp: 0,
                    min_temp: 0,
                    weather: {
                        description: "Loading..",
                        icon: "a01d"
                    },
                },
                {
                    temp: 0,
                    max_temp: 0,
                    min_temp: 0,
                    weather: {
                        description: "Loading..",
                        icon: "a01d"
                    },
                },
                {
                    temp: 0,
                    max_temp: 0,
                    min_temp: 0,
                    weather: {
                        description: "Loading..",
                        icon: "a01d"
                    },
                },
                {
                    temp: 0,
                    max_temp: 0,
                    min_temp: 0,
                    weather: {
                        description: "Loading..",
                        icon: "a01d"
                    },
                },
            ],
        },
    },
    reducers: {
        setWeatherDailyData: (state, action) => {
            state.weatherDailyData = action.payload;
        },
    },
});

export const { setWeatherDailyData } = weatherDailySlice.actions;
export default weatherDailySlice.reducer;
