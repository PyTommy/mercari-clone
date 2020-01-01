import axios from '../axios';

import {
    SET_PRODUCT_START,
    SET_PRODUCT_SUCCESS,
    SET_PRODUCT_FAIL
} from './actionType.js';
import {setAlert} from './alert';

export const createProduct = (formData) => async dispatch => {
    dispatch({
        type: SET_PRODUCT_START
    });

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }


    try {
        const res = await axios.post('/api/products', formData, config);

        dispatch({
            type: SET_PRODUCT_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.msg, "danger"));
        dispatch({
            type: SET_PRODUCT_FAIL
        });
    }
};