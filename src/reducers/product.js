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
    loading: {
        setProduct: false,
        getProduct: false,
        getProducts: false,
        deleteProduct: false,
        addComment: false,
    }
};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        // Start
        case SET_PRODUCT_START:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    setProduct: true
                } 
            };
        case GET_PRODUCTS_START:
            return {
                    ...state,
                    loading: {
                        ...state.loading,
                        getProducts: true
                    } 
                };
        case GET_PRODUCT_START:
            return {
                    ...state,
                    loading: {
                        ...state.loading,
                        getProduct: true
                    } 
                };
        case DELETE_PRODUCT_START:
            return {
                    ...state,
                    loading: {
                        ...state.loading,
                        deleteProduct: true
                    } 
                };
        case ADD_COMMENT_START:
            return {
                        ...state,
                        loading: {
                            ...state.loading,
                            addProduct: true
                        } 
                    };
        // SUCCESS
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    getProducts: false
                },
                products: payload
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: payload,
                loading: {
                    ...state.loading,
                    getProduct: false
                },
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    addComment: false
                },
                product: {
                    ...state.product,
                    comments: payload
                }
            };
        case DELETE_PRODUCT_SUCCESS:
            let product = state.product;
            if (state.product._id.toString() === payload) {
                product = null
            } 
            return {
                ...state,
                loading: {
                    ...state.loading,
                    deleteProduct: false
                },
                product
            }
        case SET_PRODUCT_SUCCESS: // It could be something else
            return {
                ...state,
                loading: {
                    ...state.loading,
                    setProduct: false
                },
            };
        // FAIL
        case SET_PRODUCT_FAIL:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    setProduct: false
                },
            };
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    getProducts: false
                },
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    getProduct: false
                },
            };
        case DELETE_PRODUCT_FAIL:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    deleteProduct: false
                },
            };
        case ADD_COMMENT_FAIL:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    addComment: false
                },
            };
        default:
            return state;
    }
};