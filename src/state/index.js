import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "64f5c1b88446f4cef3656edd"
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