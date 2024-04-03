// import { createStore, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
// import rootReducer from './reducer';
// import { composeWithDevTools } from '@redux-devtools/extension';

// let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));


import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducer/counterSlice';
import contactSlice from './reducer/contactSlice';
import authenticateSlice from './reducer/authenticateSlice';
import productSlice from './reducer/productSlice';

const store = configureStore({
    reducer:{
        counter : counterSlice,
        contact : contactSlice,
        auth : authenticateSlice,
        product : productSlice,
    }
});

export default store;