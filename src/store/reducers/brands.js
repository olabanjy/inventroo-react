import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    manufacturers:[],
    brands:[],
    error: ""
}
export const addBrandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BRANDS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_BRANDS_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_BRANDS_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_BRANDS_FAIL:
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


export const getBrandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BRANDS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_BRANDS_SUCCESS:
            return {
                loading: false,
                manufacturers:action.manufacturers,
                brands:action.brands,
                
                error: ""
            }
        
        case actionTypes.GET_BRANDS_FAIL:
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


export const getBrandDetailReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_BRAND_DETAIL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_BRAND_DETAIL_SUCCESS:
            return {
                loading: false,
                brand:action.brand,
                error: ""
            }
        
        case actionTypes.GET_BRAND_DETAIL_FAIL:
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

export const updateBrandReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_BRAND_START:
            return {
                loading: true,
                ...state,
            }
        case actionTypes.UPDATE_BRAND_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        
        case actionTypes.UPDATE_BRAND_FAIL:
            return {
                loading: false,
                error: action.error
            }
            case actionTypes.UPDATE_BRAND_COMPLETE:
            return {}
        
        default:
            return state
            
    }
}

export const deleteBrandReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_BRAND_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_BRAND_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_BRAND_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_BRAND_FAIL:
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
