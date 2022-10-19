import { createSlice } from "@reduxjs/toolkit";

export const BidsSlice = createSlice({
    name: "bids",
    initialState: {
        bidsData:[]
    }, 
    reducers: {
        updateBidsData: (state, values) => {
            state.bidsData =  values.payload;
        }
    }
})

export const {updateBidsData} = BidsSlice.actions
export const selectBids = (state) => state.bids.bidsData

export default BidsSlice.reducer