import {FETCH_POSTS, FETCH_HASHTAG_USER, FETCH_TAG_SUGGESTION} from '../actions/types';

const initialState = {
    postItem:[],
    user: [],
    tags:[]
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
                tags: action.payload
            }
        default:
            return state;
    }
}