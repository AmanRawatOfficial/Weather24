import { createSlice } from "@reduxjs/toolkit";

export const aqiSlice = createSlice({
    name: "aqi",
    initialState: {
        aqiData: [
            {
                temp: 0,
                weather: {
                    description: "Loading...",
                },
            },
        ],
    },
    reducers: {
        setAqiData: (state, action) => {
            state.aqiData = action.payload.data;
        },
    },
});

export const { setAqiData } = aqiSlice.actions;
export default aqiSlice.reducer;