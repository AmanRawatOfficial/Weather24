import { createSlice } from "@reduxjs/toolkit";

export const weatherDailySlice = createSlice({
    name: "weatherDaily",
    initialState: {
        weatherDailyData: {
            data: [{

            }, {
                temp: 0,
                weather: {
                    description: "Loading.."
                }
            }]
        }
    },
    reducers: {
        setWeatherDailyData: (state, action) => {
            state.weatherDailyData = action.payload;
        },
    },
});

export const { setWeatherDailyData } = weatherDailySlice.actions;
export default weatherDailySlice.reducer;