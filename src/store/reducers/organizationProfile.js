import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    roles:[],
    modules:[],
    error: ""
}
export const updateOrganizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_ORGANIZATION_PROFILE_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.UPDATE_ORGANIZATION_PROFILE_SUCCESS:
            return {
                loading: false,
                success: action.success,
                error: ""
            }
        case actionTypes.UPDATE_ORGANIZATION_PROFILE_FAIL:
                return {
                    success: false,
                    error:action.error
                }
        case actionTypes.UPDATE_ORGANIZATION_PROFILE_COMPLETE:
            return {
                loading: false,
                success: false,
                error: ""
            }
        default:
            return {
                ...state
            }
    }
}


export const inviteUserReducer = (state = initialState, action) => {
    switch (action.type) {       
        case actionTypes.INVITE_USER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.INVITE_USER_SUCCESS:
            return {
                loading: false,
                success:true,
                error:"",
            }
        case actionTypes.INVITE_USER_FAIL:
            return {
                loading: false,
                success:false,
                error:action.error
            }
        case actionTypes.INVITE_USER_COMPLETE:
                return {
                    loading: false,
                    success:false,
                    error:""
                }
        default:
            return {
                ...state
            }
    }
}


export const addRoleReducer = (state = initialState, action) => {
    switch (action.type) {       
        case actionTypes.ADD_USER_ROLE_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_USER_ROLE_SUCCESS:
            return {
                loading: false,
                success:true,
                error:"",
            }
        case actionTypes.ADD_USER_ROLE_FAIL:
            return {
                loading: false,
                success:false,
                error:action.error
            }
        case actionTypes.ADD_USER_ROLE_COMPLETE:
                return {
                    loading: false,
                    success:false,
                    error:""
                }
        default:
            return {
                ...state
            }
    }
}


export const getRoleAndModulesReducer = (state = initialState, action) => {
    switch (action.type) {       
        case actionTypes.GET_USER_ROLE_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_USER_ROLE_SUCCESS:
            return {
                loading: false,
                roles:action.roles,
                modules:action.modules,
                error:"",
            }
        case actionTypes.GET_USER_ROLE_FAIL:
            return {
                loading: false,
                error:action.error
            }
        default:
            return state; 
    }
}