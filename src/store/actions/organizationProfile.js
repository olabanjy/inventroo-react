import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';

export const updateOrganizationProfileStart = () => {
    return {
        type: actionTypes.UPDATE_ORGANIZATION_PROFILE_START
    };
};

export const updateOrganizationProfileSuccess = () => {
    return {
        type: actionTypes.UPDATE_ORGANIZATION_PROFILE_SUCCESS,
        success:true
    };
};

export const updateOrganizationProfileFail = (error) => {
    return {
        type: actionTypes.UPDATE_ORGANIZATION_PROFILE_FAIL,
        error: error
    };
};
export const updateOrganizationProfileComplete = () => {
    return {
        type: actionTypes.UPDATE_ORGANIZATION_PROFILE_COMPLETE,
        success: false
    };
};

export const updateOrganizationProfile = (updateInformation,token) => {
    return (dispatch) => {
        dispatch(updateOrganizationProfileStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            console.log(headers);
            ApiService.post("/account/updateOrgAccount", updateInformation,{headers})
                .then(response => {
                    dispatch(updateOrganizationProfileSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateOrganizationProfileFail(ResponseMessage));
                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateOrganizationProfileFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const inviteUserStart = () => {
    return {
        type: actionTypes.INVITE_USER_START
    };
};

export const inviteUserSuccess = () => {
    return {
        type: actionTypes.INVITE_USER_SUCCESS,
        success:true
    };
};

export const inviteUserFail = (error) => {
    return {
        type: actionTypes.INVITE_USER_FAIL,
        error: error
    };
};
export const inviteUserComplete = () => {
    return {
        type: actionTypes.INVITE_USER_COMPLETE,
        success: false
    };
};

export const inviteUser = (user,token) => {
    return (dispatch) => {
        dispatch(inviteUserStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            console.log(headers);
            ApiService.post("/user/add", user,{headers})
                .then(response => {
                    console.log(response.data);
                    dispatch(inviteUserSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(ResponseMessage);
                        dispatch(inviteUserFail(ResponseMessage));
                    } else if (error.request) {
                        console.log(error);
                        dispatch(inviteUserFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
export const addUserRoleStart = () => {
    return {
        type: actionTypes.ADD_USER_ROLE_START
    };
};

export const addUserRoleSuccess = () => {
    return {
        type: actionTypes.ADD_USER_ROLE_SUCCESS,
        success:true
    };
};

export const addUserRoleFail = (error) => {
    return {
        type: actionTypes.ADD_USER_ROLE_FAIL,
        error: error
    };
};
export const addUserRoleComplete = () => {
    return {
        type: actionTypes.ADD_USER_ROLE_COMPLETE,
        success: false
    };
};

export const addUserRole = (role,token) => {
    return (dispatch) => {
        dispatch(addUserRoleStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            console.log(headers);
            ApiService.post("/role/add", role,{headers})
                .then(response => {
                    console.log(response.data);
                    dispatch(addUserRoleSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addUserRoleFail(ResponseMessage));
                    } else if (error.request) {
                        console.log(error);
                        dispatch(addUserRoleFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}



