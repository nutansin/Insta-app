import {FETCH_POSTS} from '../actions/types';

const postReducer = (state=[], action)=> {
    if(action.type === FETCH_POSTS) {
        return {
            ...state,
            postItem: action.payload
        }
    }
    return state;
}

export default postReducer;