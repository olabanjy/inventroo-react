import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';
import Cookies from 'js-cookie';

export const getModulesStart = () => {
    return {
        type: actionTypes.GET_MODULES_START
    };
};

export const getModulesSuccess = (modules,roles) => {
    return {
        type: actionTypes.GET_MODULES_SUCCESS,
        modules,
        roles
    };
};

export const getModulesFail = (error) => {
    return {
        type: actionTypes.GET_MODULES_FAIL,
        error: error
    };
};



export const getModules = (token) => {
    return (dispatch) => {
        dispatch(getModulesStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/role/all", {headers})
                .then(response => {
                    const {roles, modules } = response.data;
                    console.log({roles});                
                    dispatch(getModulesSuccess(modules,roles));
                    console.log(response.data);
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log({message});
                        dispatch(getModulesFail(message));
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getModulesFail("Connection failure! Try Again"));
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
   
}
