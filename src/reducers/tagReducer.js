import {FETCH_TAG_SUGGESTION} from '../actions/types';

const tagReducer = (state=[], action)=> {
    if(action.type === FETCH_TAG_SUGGESTION) {
        return {
            ...state,
            tag: action.payload
        }
    }
    return state;
}

export default tagReducer;