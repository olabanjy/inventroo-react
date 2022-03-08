import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    manufacturers:[],
    error: ""
}
export const addManufacturerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MANUFACTURER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_MANUFACTURER_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_MANUFACTURER_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_MANUFACTURER_FAIL:
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


export const getManufacturersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MANUFACTURERS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_MANUFACTURERS_SUCCESS:
            return {
                loading: false,
                manufacturers:action.manufacturers,
                error: ""
            }
        
        case actionTypes.GET_MANUFACTURERS_FAIL:
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


export const getManufacturerDetailReducer = (state = {
    loading: false}, action) => {
    switch (action.type) {
        case actionTypes.GET_MANUFACTURER_DETAIL_START:
            return {
                loading: true,
            }
        case actionTypes.GET_MANUFACTURER_DETAIL_SUCCESS:
            return {
                loading: false,
                manufacturer:action.manufacturer,
                error: ""
            }
        
        case actionTypes.GET_MANUFACTURER_DETAIL_FAIL:
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

export const updateManufacturerReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_MANUFACTURER_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_MANUFACTURER_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_MANUFACTURER_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_MANUFACTURER_FAIL:
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

export const deleteManufacturerReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_MANUFACTURER_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_MANUFACTURER_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_MANUFACTURER_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_MANUFACTURER_FAIL:
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
