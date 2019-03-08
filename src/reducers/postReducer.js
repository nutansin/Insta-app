import {FETCH_POSTS, FETCH_HASHTAG_USER, FETCH_TAG_SUGGESTION, FETCH_SAVED_POST} from '../actions/types';

const initialState = {
    postItem:[],
    user: [],
    tag:[],
    post:[]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                postItem: action.payload
            }
        case FETCH_HASHTAG_USER:
            return {
                ...state,
                user: action.payload
            }
        case FETCH_TAG_SUGGESTION:
            return {
                ...state,
                tag: action.payload
            }
        case FETCH_SAVED_POST:
            return {
                ...state,
                post: action.payload
            }
        default:
            return state;
    }
}