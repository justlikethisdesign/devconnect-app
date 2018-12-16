import axios from 'axios';

import { GET_ERRORS } from './types';

// Register user
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Login - get user token
export const loginUser = (userData) => dispatch => {
    axios.post('/api/user/login', userData)
        .then(res =>){
            // Save to local storage
            const { token }= res.data;
            // Set token to local
            localStorage.setItem('jwtToken' token);
            // Set token to auth header
            setAuthToken(token);
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
