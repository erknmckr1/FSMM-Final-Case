import { createSlice } from "@reduxjs/toolkit";
import { fetchSWshıps } from "./services";
export const shıpSlice = createSlice({
    name:"shıps",
    initialState:{
        ships:[],
        status:"ıdle",
        totalCount:0,
        error:"",
        currentPage:"",
        searchValue:"",
    },
    reducers:{
        getInputValue:(state,action)=>{
            state.searchValue=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSWshıps.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(fetchSWshıps.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.ships = [...state.ships, ...action.payload.ships];
            state.totalCount = action.payload.totalCount
        })
        .addCase(fetchSWshıps.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message
        })
    }

})
export const {getInputValue} = shıpSlice.actions;
export default shıpSlice.reducer;