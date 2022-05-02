import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState: {
        isDark: false,
    },
    reducers: {
        toggleDarkmode: (state) => {
            state.isDark = !state.isDark;
        },
    },
});

export const { toggleDarkmode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
