import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        modelEvent: (state,action) =>{
            state.model = action.payload
        },
    }
});

export const {modelEvent} = filterSlice.actions;

export default filterSlice.reducer;