import {combineReducers} from 'redux';
import UserReducer from './reducer_users';
import ActiveUserReducer from './reducer_active_user';

export default combineReducers ({
    UserReducer,
    ActiveUserReducer
});