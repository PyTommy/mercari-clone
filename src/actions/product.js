import axios from '../axios';

import {
    SET_PRODUCT_START,
    SET_PRODUCT_SUCCESS,
    SET_PRODUCT_FAIL,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCT_START,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    ADD_COMMENT_START,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL,
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


export const getProducts = () => async dispatch => {
    dispatch({
        type: GET_PRODUCTS_START
    });

    try {
        const res = await axios.get('/api/products');

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        // if (err.response.data) {
        //     dispatch(setAlert(err.response.data.msg, "danger"));
        // }
        dispatch({
            type: GET_PRODUCTS_FAIL
        });
    }
};

export const getProduct = (productId) => async dispatch => {
    dispatch({
        type: GET_PRODUCT_START
    });

    try {
        const res = await axios.get(`/api/products/${productId}`);

        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        // if (err.response.data) {
        //     dispatch(setAlert(err.response.data.msg, "danger"));
        // }
        dispatch({
            type: GET_PRODUCT_FAIL
        });
    }
};

export const deleteProduct = (productId) => async dispatch => {
    dispatch({
        type: DELETE_PRODUCT_START
    });

    try {
        await axios.delete(`/api/products/${productId}`);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
        });
        dispatch(setAlert("Product removed!"))
    } catch (err) {
        if (err.response.data) {
            dispatch(setAlert("Deleting failed", "danger"));
        }
        dispatch({
            type: DELETE_PRODUCT_FAIL
        });
    }
};

export const addComment = (productId, text) => async dispatch => {
    dispatch({
        type: ADD_COMMENT_START
    });

    try {
        const res = await axios.post(`/api/products/comment/${productId}`, {text});

        dispatch({
            type: ADD_COMMENT_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        // if (err.response.data) {
        //     dispatch(setAlert("Deleting failed", "danger"));
        // }
        dispatch({
            type: ADD_COMMENT_FAIL
        });
    }
};