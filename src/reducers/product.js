import {
    SET_PRODUCT_START,
    SET_PRODUCT_SUCCESS,
    SET_PRODUCT_FAIL
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
            return {
                ...state,
                loading: true
            };
        case SET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [payload, ...state.products]
            };
        case SET_PRODUCT_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};