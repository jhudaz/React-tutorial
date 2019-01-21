import {combineReducers} from 'redux';
import UserReducer from './reducer_users';
import ActiveUserReducer from './reducer_active_user';
import defaultCommentReducer from './reducer-comments';

export default combineReducers ({
    UserReducer,
    ActiveUserReducer,
    defaultCommentReducer
});