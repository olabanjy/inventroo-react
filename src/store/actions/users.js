import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';
import Cookies from 'js-cookie';

export const getUsersStart = () => {
    return {
        type: actionTypes.GET_USERS_START
    };
};

export const getUsersSuccess = (users) => {
    return {
        type: actionTypes.GET_USERS_SUCCESS,
        users,
    };
};

export const getUsersFail = (error) => {
    return {
        type: actionTypes.GET_USERS_FAIL,
        error: error
    };
};



export const getUsers = (token) => {
    return (dispatch) => {
        dispatch(getUsersStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/user/all", {headers})
                .then(response => {
                    const {users } = response.data;
                    console.log({users});                
                    dispatch(getUsersSuccess(users));
                    console.log(response.data);
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log({message});
                        dispatch(getUsersFail(message));
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getUsersFail("Connection failure! Try Again"));
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
   
}
