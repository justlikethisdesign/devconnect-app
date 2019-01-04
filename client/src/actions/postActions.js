import axios from 'axios';
import {
    ADD_POST,
    GET_ERRORS,
    GET_POST,
    POST_LOADING,
} from './types';

// Add Posts
export const addPost = postData => dispatch => {
    axios
        .post('/api/posts', postData)
        .then(res =>
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get Posts
export const getPost = postData => dispatch => {
    axios
        .get('/api/posts', postData)
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set loading state
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
}
