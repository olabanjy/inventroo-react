import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    productGroups:[],
    error: ""
}
export const addProductGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_GROUP_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_PRODUCT_GROUP_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_PRODUCT_GROUP_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_PRODUCT_GROUP_FAIL:
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


export const getProductGroupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_GROUPS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCT_GROUPS_SUCCESS:
            return {
                loading: false,
                productGroups:action.productGroups,
                error: ""
            }
        
        case actionTypes.GET_PRODUCT_GROUPS_FAIL:
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

export const getProductGroupDetailReducer = (state = {
    productGroup:{},
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_GROUP_DETAIL_START:
            return {
                loading: true,
            }
        case actionTypes.GET_PRODUCT_GROUP_DETAIL_SUCCESS:
            return {
                loading: false,
                productGroup:action.productGroup,
                taxes:action.taxes,
                manufacturers:action.manufacturers,
                brands:action.brands,
                units:action.units,
                error: ""
            }
        
        case actionTypes.GET_PRODUCT_GROUP_DETAIL_FAIL:
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

export const updateProductGroupReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_GROUP_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_PRODUCT_GROUP_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_PRODUCT_GROUP_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_PRODUCT_GROUP_FAIL:
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

export const deleteProductGroupReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_PRODUCT_GROUP_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_PRODUCT_GROUP_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_PRODUCT_GROUP_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_PRODUCT_GROUP_FAIL:
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
