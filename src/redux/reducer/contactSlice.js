import { createSlice } from "@reduxjs/toolkit"

let initialState={
    contactList:[]
}

const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        addContect(state,action){
            state.contactList.push(action.payload);
        }
    }
});

export const { addContect } = contactSlice.actions
export default contactSlice.reducer