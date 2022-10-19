import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
    name: "card",
    initialState: {
        cardData: {}
    }, 
    reducers: {
        updateCardData: (state, values) => {
            state.cardData =  values.payload;
        }
    }
})

export const {updateCardData} = CardSlice.actions
export const selectCard = (state) => state.card.cardData

export default CardSlice.reducer