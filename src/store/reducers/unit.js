import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    units:[],
    error: ""
}
export const addUnitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_UNITS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_UNITS_SUCCESS:
            return {
                loading: false,
                success: true,
                units:action.units,
                error: ""
            }
        case actionTypes.ADD_UNITS_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_UNITS_FAIL:
            return {
                loading: false,
                success: false,
                error: action.error
            }
        default:
            return {
                state
            }
    }
}


export const getUnitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_UNITS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_UNITS_SUCCESS:
            return {
                loading: false,
                units:action.units,
                error: ""
            }
        
        case actionTypes.GET_UNITS_FAIL:
            return {
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export const getUnitDetailReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_UNIT_DETAIL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_UNIT_DETAIL_SUCCESS:
            return {
                loading: false,
                unit:action.unit,
                error: ""
            }
        
        case actionTypes.GET_UNIT_DETAIL_FAIL:
            return {
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export const updateUnitReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_UNIT_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_UNIT_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_UNIT_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_UNIT_FAIL:
            return {
                loading: false,
                error: action.error
            }
        
        default:
            return {
                state
            }
    }
}

export const deleteUnitReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_UNIT_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_UNIT_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_UNIT_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_UNIT_FAIL:
            return {
                loading: false,
                error: action.error
            }
        
        default:
            return {
                state
            }
    }
}
