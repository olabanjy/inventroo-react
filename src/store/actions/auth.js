import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';
import Cookies from 'js-cookie';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token,user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        user
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logoutUser = () => {
    return {
        type: actionTypes.USER_LOGOUT
    };
};

export const setToken = (token)=>{
    Cookies.set("x-token",token,{expires:7,secure:true});
}
export const getToken = ()=>{
    const token = Cookies.get("x-token");
    return token;
};

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch(authStart());
        try {
            ApiService.post("/login", { email, password })
                .then(response => {
                    const { token,userInfo } = response.data;
                    const {access_token,token_type,expires_in} = token;
                    setToken(access_token);
                    localStorage.setItem("user",JSON.stringify(userInfo));
                    dispatch(authSuccess(access_token,userInfo));
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        dispatch(authFail(ResponseMessage));
                    } else if (error.request) {
                        console.log(error);
                        dispatch(authFail("Connection failure! Try Again"));
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }

}

export const logout =()=>{
  return (dispatch)=>{
    dispatch(logoutUser());
    Cookies.remove("x-token");
    localStorage.removeItem("user");
  }
}
