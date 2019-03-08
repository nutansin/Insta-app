import {combineReducers} from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer,
    tagUser: postReducer,
    tags: postReducer,
    savedPost: postReducer
})