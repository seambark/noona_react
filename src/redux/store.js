import { combineReducers, createStore } from 'redux';
import reducer from './reducer/reducer';
import contact from './reducer/contact';

let store = createStore(combineReducers({reducer,contact}));

export default store;