import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactNumber:0,
}

export const contactSlice = createSlice({
    name:"contactDetails",
    initialState:initialState,
    reducers:{
        increase:(state)=>{
             state.contactNumber = state.contactNumber + 1;
           
        },
        decrease:(state)=>{
             state.contactNumber = state.contactNumber - 1;
           
        },
    },
});

export const {increase,decrease} = contactSlice.actions;
export default contactSlice.reducer;