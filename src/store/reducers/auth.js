import { actionTypes } from '../constants/ActionTypes';
import {getToken} from '../actions/auth';

const initialState = {
    loading: false,
    token:getToken(),
    user:JSON.parse(localStorage.getItem('user')),
    error: ""
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                loading: false,
                token: action.token,
                user:action.user,
                error: ""
            }
        case actionTypes.AUTH_FAIL:
            return {
                loading: false,
                token: "",
                user:{},
                error: action.error
            }
        case actionTypes.USER_LOGOUT:
            return {}
        default:
            return {
                ...state
            }
    }
}
export default reducer;
