import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    products:[],
    error: ""
}
export const addProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_PRODUCT_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_PRODUCT_FAIL:
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


export const getProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products:action.products,
                error: ""
            }
        
        case actionTypes.GET_PRODUCTS_FAIL:
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

export const getProductDetailReducer = (state = {
    
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAIL_START:
            return {
                loading: true,
            }
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false,
                product:action.product,
                product:action.product,
                taxes:action.taxes,
                manufacturers:action.manufacturers,
                brands:action.brands,
                units:action.units,
                error: ""
            }
        
        case actionTypes.GET_PRODUCT_DETAIL_FAIL:
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

export const updateProductReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_PRODUCT_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_PRODUCT_FAIL:
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

export const deleteProductReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_PRODUCT_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_PRODUCT_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_PRODUCT_FAIL:
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
