const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                currentUser: action.payload,
                ...state
            }
        default:
            return state
    }
}
