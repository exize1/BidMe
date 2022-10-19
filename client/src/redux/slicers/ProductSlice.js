import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "products",
    initialState: {
        productsData:[]
    }, 
    reducers: {
        updateProductData: (state, values) => {
            state.productsData =  values.payload;
        }
    }
})

export const {updateProductData} = ProductSlice.actions
export const selectProducts = (state) => state.products.productsData

export default ProductSlice.reducer