import {FETCH_POSTS, FETCH_HASHTAG_USER, FETCH_TAG_SUGGESTION} from './types';

export const fetchPosts=()=> dispatch => {
    fetch('https://api.unsplash.com/photos/?client_id=e8a1568ebfbe6e258843b98cf7524eef5d286b3cf540345fe13e2f558f9b9165')
    .then(res => res.json())
    .then(data => 
        dispatch({
            type: FETCH_POSTS,
            payload: data
        })
    );
}