import {FETCH_POSTS, FETCH_HASHTAG_USER, FETCH_TAG_SUGGESTION, FETCH_SAVED_POST} from './types';

export const fetchPosts=()=> dispatch => {
    fetch('https://api.unsplash.com/photos/?client_id=e8a1568ebfbe6e258843b98cf7524eef5d286b3cf540345fe13e2f558f9b9165')
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );
};

export const fetchHashtagUser=(param)=> dispatch => {
    fetch('https://www.instagram.com/explore/tags/'+(param)+'/?__a=1')
    .then(res => res.json())
    .then(data => 
        dispatch({
            type: FETCH_HASHTAG_USER,
            payload: [data]
        })
    );
};

export const fetchTagSuggestion=(tagname)=> dispatch => {
    fetch('https://www.instagram.com/web/search/topsearch/?context=blended&query='+encodeURIComponent(tagname)+'&rank_token=0.43305520620017&include_reel=true')
    .then(res => res.json())
    .then(tags => 
        dispatch({
            type: FETCH_TAG_SUGGESTION,
            payload: tags.hashtags
        })
    );
};

export const fetchSavedPost=()=> dispatch => {
    dispatch({
        type: FETCH_SAVED_POST,
        payload: JSON.parse(localStorage.getItem('savedPost'))
    })
};