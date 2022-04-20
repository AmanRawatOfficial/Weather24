import { createSlice } from "@reduxjs/toolkit";

export const weatherHourSlice = createSlice({
    name: "weatherHour",
    initialState: {
        weatherHourData: {
            list: [{
                dt: 0,
                main: {
                    temp: 41,
                    humidity: 2,
                },
                dt_txt: "",
                weather: [{id: 0}]
            },
            {
                dt: 1,
                main: {
                    temp: 41,
                    humidity: 2,
                },
                dt_txt: "",
                weather: [{id: 0}]
            },
            {
                dt: 2,
                main: {
                    temp: 41,
                    humidity: 2,
                },
                dt_txt: "",
                weather: [{id: 0}]
            },
            {
                dt: 3,
                main: {
                    temp: 41,
                    humidity: 2,
                },
                dt_txt: "",
                weather: [{id: 0}]
            },
            {
                dt: 4,
                main: {
                    temp: 41,
                    humidity: 2,
                },
                dt_txt: "",
                weather: [{id: 0}]
            }]
        }
    },
    reducers: {
        setWeatherHourData: (state, action) => {
            state.weatherHourData = action.payload;
        },
    },
});

export const { setWeatherHourData } = weatherHourSlice.actions;
export default weatherHourSlice.reducer;