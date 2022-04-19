import { createSlice } from "@reduxjs/toolkit";

export const weatherHourSlice = createSlice({
    name: "weatherHour",
    initialState: {
        weatherHourData: {
            list: [{
                main: {
                    temp: 41
                },
                dt: 0,
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