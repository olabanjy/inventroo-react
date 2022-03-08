import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    taxes:[],
    error: ""
}
export const addTaxReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TAX_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_TAX_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_TAX_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_TAX_FAIL:
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


export const getTaxesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TAXES_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_TAXES_SUCCESS:
            return {
                loading: false,
                taxes:action.taxes,
                error: ""
            }
        
        case actionTypes.GET_TAXES_FAIL:
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

export const getTaxDetailReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_TAX_DETAIL_START:
            return {
                loading: true,
            }
        case actionTypes.GET_TAX_DETAIL_SUCCESS:
            return {
                loading: false,
                tax:action.tax,
                error: ""
            }
        
        case actionTypes.GET_TAX_DETAIL_FAIL:
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

export const updateTaxReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TAX_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_TAX_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_TAX_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_TAX_FAIL:
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

export const deleteTaxReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_TAX_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_TAX_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_TAX_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_TAX_FAIL:
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
