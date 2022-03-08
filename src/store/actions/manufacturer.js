import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addManufacturerStart = () => {
    return {
        type: actionTypes.ADD_MANUFACTURER_START
    };
};

export const addManufacturerSuccess = () => {
    return {
        type: actionTypes.ADD_MANUFACTURER_SUCCESS,
    };
};

export const addManufacturerFail = (error) => {
    return {
        type: actionTypes.ADD_MANUFACTURER_FAIL,
        error: error
    };
};
export const addManufacturerComplete = () => {
    return {
        type: actionTypes.ADD_MANUFACTURER_COMPLETE,
    };
};


export const addManufacturer = (params,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(addManufacturerStart());
        try {
            ApiService.post("/manufacturer/add", { ...params},{headers})
                .then(response => {
                    dispatch(addManufacturerSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addManufacturerFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(addManufacturerFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const getManufacturersStart = () => {
    return {
        type: actionTypes.GET_MANUFACTURERS_START
    };
};

export const getManufacturersSuccess = (manufacturers) => {
    return {
        type: actionTypes.GET_MANUFACTURERS_SUCCESS,
        manufacturers,
    };
};

export const getManufacturersFail = (error) => {
    return {
        type: actionTypes.GET_MANUFACTURERS_FAIL,
        error: error
    };
};

export const getManufacturers = (token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(getManufacturersStart());
        try {
            ApiService.get("/manufacturer/all",{headers})
                .then(response => {
                    console.log(headers);
                    const {manufacturers} = response.data;
                    dispatch(getManufacturersSuccess(manufacturers));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getManufacturersFail(message));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getManufacturersFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}



export const getManufacturerDetailStart = () => {
    return {
        type: actionTypes.GET_MANUFACTURER_DETAIL_START
    };
};

export const getManufacturerDetailSuccess = (manufacturer) => {
    return {
        type: actionTypes.GET_MANUFACTURER_DETAIL_SUCCESS,
        manufacturer,
    };
};

export const getManufacturerDetailFail = (error) => {
    return {
        type: actionTypes.GET_MANUFACTURER_DETAIL_FAIL,
        error: error
    };
};

export const getManufacturerDetail = (id,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(getManufacturerDetailStart());
        try {
            ApiService.get(`/manufacturer/find?manufacturerID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {manufacturer} = response.data;
                    dispatch(getManufacturerDetailSuccess(manufacturer));
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getManufacturerDetailFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getManufacturerDetailFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateManufacturerStart = () => {
    return {
        type: actionTypes.UPDATE_MANUFACTURER_START
    };
};

export const updateManufacturerSuccess = () => {
    return {
        type: actionTypes.UPDATE_MANUFACTURER_SUCCESS,
    };
};

export const updateManufacturerFail = (error) => {
    return {
        type: actionTypes.UPDATE_MANUFACTURER_FAIL,
        error: error
    };
};

export const updateManufacturerComplete = () => {
    return {
        type: actionTypes.UPDATE_MANUFACTURER_COMPLETE,
    };
};


export const updateManufacturer = (params,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(updateManufacturerStart());
        try {
            ApiService.post("/manufacturer/modify",{...params},{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateManufacturerSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateManufacturerFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateManufacturerFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteManufacturerStart = () => {
    return {
        type: actionTypes.DELETE_MANUFACTURER_START
    };
};

export const deleteManufacturerSuccess = () => {
    return {
        type: actionTypes.DELETE_MANUFACTURER_SUCCESS,
    };
};

export const deleteManufacturerFail = (error) => {
    return {
        type: actionTypes.DELETE_MANUFACTURER_FAIL,
        error: error
    };
};

export const deleteManufacturerComplete = () => {
    return {
        type: actionTypes.DELETE_MANUFACTURER_COMPLETE,
    };
};


export const deleteManufacturer = (id,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(deleteManufacturerStart());
        try {
            ApiService.get(`/manufacturer/remove?manufacturerID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteManufacturerSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteManufacturerFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteManufacturerFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}