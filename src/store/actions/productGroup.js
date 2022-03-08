import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addProductGroupStart = () => {
    return {
        type: actionTypes.ADD_PRODUCT_GROUP_START
    };
};

export const addProductGroupSuccess = () => {
    return {
        type: actionTypes.ADD_PRODUCT_GROUP_SUCCESS,
    };
};

export const addProductGroupFail = (error) => {
    return {
        type: actionTypes.ADD_PRODUCT_GROUP_FAIL,
        error: error
    };
};
export const addProductGroupComplete = () => {
    return {
        type: actionTypes.ADD_PRODUCT_GROUP_COMPLETE,
    };
};


export const addProductGroup = (ProductGroup) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addProductGroupStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/productGroup/add", ProductGroup,{headers})
                .then(response => {
                    dispatch(addProductGroupSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addProductGroupFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(addProductGroupFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getProductGroupsStart = () => {
    return {
        type: actionTypes.GET_PRODUCT_GROUPS_START
    };
};

export const getProductGroupsSuccess = (productGroups) => {
    return {
        type: actionTypes.GET_PRODUCT_GROUPS_SUCCESS,
        productGroups
    };
};

export const getProductGroupsFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCT_GROUPS_FAIL,
        error: error
    };
};

export const getProductGroups = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getProductGroupsStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/productGroup/all",{headers})
                .then(response => {
                    const {productGroups} = response.data;
                    dispatch(getProductGroupsSuccess(productGroups));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getProductGroupsFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getProductGroupsFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getProductGroupDetailStart = () => {
    return {
        type: actionTypes.GET_PRODUCT_GROUP_DETAIL_START
    };
};

export const getProductGroupDetailSuccess = (productGroup,taxes,manufacturers,brands,units) => {
    return {
        type: actionTypes.GET_PRODUCT_GROUP_DETAIL_SUCCESS,
        productGroup,
        taxes,
        manufacturers,
        brands,
        units
    };
};

export const getProductGroupDetailFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCT_GROUP_DETAIL_FAIL,
        error: error
    };
};

export const getProductGroupDetail = (id) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getProductGroupDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/productGroup/find?productGroupID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {productGroup,taxes,manufacturers,brands,units} = response.data;
                    dispatch(getProductGroupDetailSuccess(productGroup,taxes,manufacturers,brands,units));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getProductGroupDetailFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getProductGroupDetailFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateProductGroupStart = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_GROUP_START
    };
};

export const updateProductGroupSuccess = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_GROUP_SUCCESS,
    };
};

export const updateProductGroupFail = (error) => {
    return {
        type: actionTypes.UPDATE_PRODUCT_GROUP_FAIL,
        error: error
    };
};

export const updateProductGroupComplete = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_GROUP_COMPLETE,
    };
};


export const updateProductGroup = (productGroup) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updateProductGroupStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/productGroup/modify",productGroup,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateProductGroupSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateProductGroupFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateProductGroupFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteProductGroupStart = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_GROUP_START
    };
};

export const deleteProductGroupSuccess = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_GROUP_SUCCESS,
    };
};

export const deleteProductGroupFail = (error) => {
    return {
        type: actionTypes.DELETE_PRODUCT_GROUP_FAIL,
        error: error
    };
};

export const deleteProductGroupComplete = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_GROUP_COMPLETE,
    };
};


export const deleteProductGroup = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deleteProductGroupStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/productGroup/remove?productGroupID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteProductGroupSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteProductGroupFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteProductGroupFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
