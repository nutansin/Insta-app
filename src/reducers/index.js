import {combineReducers} from 'redux';
import postReducer from './postReducer';
import hashtagUserReducer from './hashtagUserReducer';
import tagReducer from './tagReducer';
import savedPostReducer from './savedPostReducer';

export default combineReducers({
    posts: postReducer,
    tagUser: hashtagUserReducer,
    tags: tagReducer,
    savedPost: savedPostReducer
});