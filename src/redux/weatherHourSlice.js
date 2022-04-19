import { createSlice } from "@reduxjs/toolkit";

export const weatherHourSlice = createSlice({
    name: "weatherHour",
    initialState: {
        weatherHourData: "nothing right now"
    },
    reducers: {
        setWeatherHourData: (state, action) => {
            state.weatherHourData = action.payload;
        },
    },
});

export const { setWeatherHourData } = weatherHourSlice.actions;
export default weatherHourSlice.reducer;