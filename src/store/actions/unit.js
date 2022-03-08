import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addUnitsStart = () => {
    return {
        type: actionTypes.ADD_UNITS_START
    };
};

export const addUnitsSuccess = () => {
    return {
        type: actionTypes.ADD_UNITS_SUCCESS,
    };
};

export const addUnitsFail = (error) => {
    return {
        type: actionTypes.ADD_UNITS_FAIL,
        error: error
    };
};
export const addUnitsComplete = () => {
    return {
        type: actionTypes.ADD_UNITS_COMPLETE,
    };
};


export const addUnits = (params,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(addUnitsStart());
        try {
            ApiService.post("/unit/add", { ...params},{headers})
                .then(response => {
                    dispatch(addUnitsSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addUnitsFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(addUnitsFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getUnitsStart = () => {
    return {
        type: actionTypes.GET_UNITS_START
    };
};

export const getUnitsSuccess = (units) => {
    return {
        type: actionTypes.GET_UNITS_SUCCESS,
        units
    };
};

export const getUnitsFail = (error) => {
    return {
        type: actionTypes.GET_UNITS_FAIL,
        error: error
    };
};

export const getUnits = (token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(getUnitsStart());
        try {
            ApiService.get("/unit/all",{headers})
                .then(response => {
                    const {units} = response.data;
                    console.log(units);
                    dispatch(getUnitsSuccess(units));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getUnitsFail(message));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getUnitsFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getUnitDetailStart = () => {
    return {
        type: actionTypes.GET_UNIT_DETAIL_START
    };
};

export const getUnitDetailSuccess = (unit) => {
    return {
        type: actionTypes.GET_UNIT_DETAIL_SUCCESS,
        unit,
    };
};

export const getUnitDetailFail = (error) => {
    return {
        type: actionTypes.GET_UNIT_DETAIL_FAIL,
        error: error
    };
};

export const getUnitDetail = (id) => {
    
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getUnitDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/unit/find?unitID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {unit} = response.data;
                    dispatch(getUnitDetailSuccess(unit));
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getUnitDetailFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getUnitDetailFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateUnitStart = () => {
    return {
        type: actionTypes.UPDATE_UNIT_START
    };
};

export const updateUnitSuccess = () => {
    return {
        type: actionTypes.UPDATE_UNIT_SUCCESS,
    };
};

export const updateUnitFail = (error) => {
    return {
        type: actionTypes.UPDATE_UNIT_FAIL,
        error: error
    };
};

export const updateUnitComplete = () => {
    return {
        type: actionTypes.UPDATE_UNIT_COMPLETE,
    };
};


export const updateUnit = (params,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(updateUnitStart());
        try {
            console.log({params});
            ApiService.post("/unit/modify",{...params},{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateUnitSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateUnitFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateUnitFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteUnitStart = () => {
    return {
        type: actionTypes.DELETE_UNIT_START
    };
};

export const deleteUnitSuccess = () => {
    return {
        type: actionTypes.DELETE_UNIT_SUCCESS,
    };
};

export const deleteUnitFail = (error) => {
    return {
        type: actionTypes.DELETE_UNIT_FAIL,
        error: error
    };
};

export const deleteUnitComplete = () => {
    return {
        type: actionTypes.DELETE_UNIT_COMPLETE,
    };
};


export const deleteUnit = (id,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(deleteUnitStart());
        try {
            ApiService.get(`/unit/remove?unitID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteUnitSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteUnitFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteUnitFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}