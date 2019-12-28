import {LOGIN, LOGOUT} from '../actions/actionType';

// ==========
// Reducers
// ==========
const authReducerDefaultState = {
    isAuthenticated: false
};
const authReducer = (state = authReducerDefaultState, {type, payload}) => {
    switch (type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };
        default: 
            return state;
    };
};

export default authReducer;