import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    };
};

export const registerFail = (error) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error: error
    };
};
export const registrationComplete = () => {
    return {
        type: actionTypes.REGISTER_COMPLETE,
        success: false
    };
};


export const registerUser = (business_name,email, password,password_confirmation) => {
    return (dispatch) => {
        dispatch(registerStart());
        try {
            ApiService.post("/register", { business_name,email, password,password_confirmation })
                .then(response => {
                    dispatch(registerSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(registerFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(registerFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}