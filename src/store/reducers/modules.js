import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    modules:[],
    roles:[],
    error: ""
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MODULES_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_MODULES_SUCCESS:
            return {
                loading: false,
                modules: action.modules,
                roles:action.roles,
                error: ""
            }
        case actionTypes.GET_MODULES_FAIL:
            return {
                loading: false,
                modules: [],
                roles:[],
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}
export default reducer;