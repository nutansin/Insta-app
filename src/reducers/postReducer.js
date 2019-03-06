import {FETCH_POSTS, FETCH_HASHTAG_USER, FETCH_TAG_SUGGESTION} from '../actions/types';

const initialState = {
    posts:[],
    hashTagUser: [],
    tags:[]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}