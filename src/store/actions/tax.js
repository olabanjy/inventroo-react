import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addTaxStart = () => {
    return {
        type: actionTypes.ADD_TAX_START
    };
};

export const addTaxSuccess = () => {
    return {
        type: actionTypes.ADD_TAX_SUCCESS,
    };
};

export const addTaxFail = (error) => {
    return {
        type: actionTypes.ADD_TAX_FAIL,
        error: error
    };
};
export const addTaxComplete = () => {
    return {
        type: actionTypes.ADD_TAX_COMPLETE,
    };
};


export const addTax = (params) => {
    
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addTaxStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/tax/add", { ...params},{headers})
                .then(response => {
                    dispatch(addTaxSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addTaxFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(addTaxFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getTaxesStart = () => {
    return {
        type: actionTypes.GET_TAXES_START
    };
};

export const getTaxesSuccess = (taxes) => {
    return {
        type: actionTypes.GET_TAXES_SUCCESS,
        taxes
    };
};

export const getTaxesFail = (error) => {
    return {
        type: actionTypes.GET_TAXES_FAIL,
        error: error
    };
};

export const getTaxes = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getTaxesStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/tax/all",{headers})
                .then(response => {
                    const {taxes} = response.data;
                    console.log(taxes);
                    dispatch(getTaxesSuccess(taxes));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getTaxesFail(message));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getTaxesFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getTaxDetailStart = () => {
    return {
        type: actionTypes.GET_TAX_DETAIL_START
    };
};

export const getTaxDetailSuccess = (tax) => {
    return {
        type: actionTypes.GET_TAX_DETAIL_SUCCESS,
        tax,
    };
};

export const getTaxDetailFail = (error) => {
    return {
        type: actionTypes.GET_TAX_DETAIL_FAIL,
        error: error
    };
};

export const getTaxDetail = (id) => {
    
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getTaxDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/tax/find?taxID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {tax} = response.data;
                    dispatch(getTaxDetailSuccess(tax));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getTaxDetailFail(message));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getTaxDetailFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateTaxStart = () => {
    return {
        type: actionTypes.UPDATE_TAX_START
    };
};

export const updateTaxSuccess = () => {
    return {
        type: actionTypes.UPDATE_TAX_SUCCESS,
    };
};

export const updateTaxFail = (error) => {
    return {
        type: actionTypes.UPDATE_TAX_FAIL,
        error: error
    };
};

export const updateTaxComplete = () => {
    return {
        type: actionTypes.UPDATE_TAX_COMPLETE,
    };
};


export const updateTax = (params) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updateTaxStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/tax/modify",{...params},{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateTaxSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateTaxFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateTaxFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteTaxStart = () => {
    return {
        type: actionTypes.DELETE_TAX_START
    };
};

export const deleteTaxSuccess = () => {
    return {
        type: actionTypes.DELETE_TAX_SUCCESS,
    };
};

export const deleteTaxFail = (error) => {
    return {
        type: actionTypes.DELETE_TAX_FAIL,
        error: error
    };
};

export const deleteTaxComplete = () => {
    return {
        type: actionTypes.DELETE_TAX_COMPLETE,
    };
};


export const deleteTax = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deleteTaxStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/tax/remove?taxID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteTaxSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteTaxFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteTaxFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}