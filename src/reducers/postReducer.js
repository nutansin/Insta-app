import {FETCH_POSTS, FETCH_HASHTAG_USER, FETCH_TAG_SUGGESTION} from '../actions/types';

const initialState = {
    postItem:[],
    user: [],
    tag:[]
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
        default:
            return state;
    }
}