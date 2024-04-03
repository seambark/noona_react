import { createSlice } from "@reduxjs/toolkit";

let initialState={
    count:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addIncrement(state,action){
            state.count = state.count + 1;
        },
        addDecrement(state,action){
            state.count = state.count - 1;
        },
        addIncrementPayload(state,action){
            state.count = state.count + action.payload;
        },
        addDecrementPayload(state,action){
            state.count = state.count - action.payload;
        },
    }
});

export const { addIncrement, addDecrement, addIncrementPayload, addDecrementPayload } = counterSlice.actions
export default counterSlice.reducer