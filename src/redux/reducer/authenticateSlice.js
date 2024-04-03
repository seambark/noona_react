import { createSlice } from "@reduxjs/toolkit"

let initialState={
    id:'',
    password:'',
    authenticate:false
}

// function authenticateReducer(state=initialState,action){
//     let {type,payload} = action;

//     switch(type){
//         case "LOGIN_SUCCESS" :
//             return {...state,id:payload.id, password:payload.password, authenticate:true}
//         case "LOGOUT_SUCCESS" : 
//             return {...state,id:'', password:'', authenticate:false}
//         default :
//             return {...state}
//     }
// }

// export default authenticateReducer

export const login=(id,password)=>{
    return authenticateActions.getLogin({id,password});
};

export const logout=(id,password)=>{
    return authenticateActions.getLogout();
};

const authenticateSlice = createSlice({
    name:"authenticate",
    initialState,
    reducers:{
        getLogin(state,action){
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.authenticate = true;
        },
        getLogout(state,action){
            state.id = '';
            state.password = '';
            state.authenticate = false;
        }
    }
});

export const authenticateActions = authenticateSlice.actions
export default authenticateSlice.reducer