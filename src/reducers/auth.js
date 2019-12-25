// ==========
// Reducers
// ==========
const authReducerDefaultState = {
    isAuthenticated: false
};
const authReducer = (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false
            };
        default: 
            return state;
    };
};

export default authReducer;