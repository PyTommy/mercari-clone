import axios from '../axios';
import {
    // LOAD_USER
    LOAD_USER_START,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    // REGISTER
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    
    // LOGIN
    LOGIN_START, 
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    // LOGOUT
    LOGOUT
} from './actionType';
import { setAlert } from './alert';

export const loadUser = (token) => async dispatch => {
    if (localStorage.token) {
        axios.setAuthToken(localStorage.token);
    } else {
        return null;
    }

    dispatch({
        type: LOAD_USER_START
    });

    try {
        const res = await axios.get('/api/user');

        dispatch(setAlert(`Welcome, ${res.data.name}`, "success"));
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: LOAD_USER_FAIL
        });
    }
    
};

export const login = ({ email, password }) => async dispatch => {
    dispatch({
        type: LOGIN_START
    }); 
    
    const body = JSON.stringify({ email, password});
    
    try {
        const res = await axios.post('/api/user/login', body);


        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser(localStorage.token));
    } catch(err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: LOGIN_FAIL,
        });
    }

};

// REGISTER
export const register = ({ name, email, password}) => async dispatch => {
    dispatch({
        type:REGISTER_START
    });

    const body = JSON.stringify({ name, email, password});
    
    try {
        const res = await axios.post('/api/user/signup', body);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser(localStorage.token));
    } catch(err) {
        dispatch(setAlert(err.response.data.message, "danger"));
        dispatch({
            type: REGISTER_FAIL
        });
    }
};

export const logout = () => ({
    type: LOGOUT
});