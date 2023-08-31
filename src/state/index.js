import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "64f05fb035882039c94966b9"
};

export const globalSlice = createSlice ({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode == 'light' ? 'dark' : 'light';
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer; 