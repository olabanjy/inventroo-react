import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    users:[],
    error: ""
}
export const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_USERS_SUCCESS:
            return {
                loading: false,
                users:action.users,
                error: ""
            }
        case actionTypes.GET_USERS_FAIL:
            return {
                loading: false,
                users: [],
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}
