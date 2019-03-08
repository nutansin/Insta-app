import { FETCH_SAVED_POST} from '../actions/types';

const savedPostReducer = (state=[], action)=> {
    if(action.type === FETCH_SAVED_POST) {
        return {
            ...state,
            post: action.payload
        }
    }
    return state;
}

export default savedPostReducer;
