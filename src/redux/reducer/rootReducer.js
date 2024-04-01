import { combineReducers } from 'redux';
import reducer from './reducer';
import contact from './contact';

const rootReducer = combineReducers({
    reducer,
    contact,
});

export default rootReducer;