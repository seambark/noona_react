import { combineReducers } from 'redux';
import reducer from './reducer';
import contact from './contact';
import productReducer from './productReducer';
import authenticateReducer from './authenticateReducer';

export default combineReducers({
    counter : reducer,
    contact : contact,
    auth : authenticateReducer,
    product : productReducer
});