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
} from '../actions/actionType.js';

const initialState = {
    products: [],
    product: null,
    loading: false,

};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_PRODUCT_START:
        case GET_PRODUCTS_START:
        case GET_PRODUCT_START:
        case DELETE_PRODUCT_START:
        case ADD_COMMENT_START:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: payload
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: {
                    ...state.product,
                    comments: payload
                }
            };
        case SET_PRODUCT_SUCCESS: // It could be something else
        case SET_PRODUCT_FAIL:
        case GET_PRODUCTS_FAIL:
        case GET_PRODUCT_FAIL:
        case DELETE_PRODUCT_SUCCESS:
        case DELETE_PRODUCT_FAIL:
        case ADD_COMMENT_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};