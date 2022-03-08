import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    error: ""
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.REGISTER_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.REGISTER_FAIL:
            return {
                loading: false,
                success: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}
export default reducer;