import {FETCH_HASHTAG_USER} from '../actions/types';

const hashtagUserReducer = (state=[], action)=> {
    if(action.type == FETCH_HASHTAG_USER) {
        return {
            ...state,
            profile: action.payload
        }
    }
    return state;
}

export default hashtagUserReducer;