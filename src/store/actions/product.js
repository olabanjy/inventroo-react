import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addProductStart = () => {
    return {
        type: actionTypes.ADD_PRODUCT_START
    };
};

export const addProductSuccess = () => {
    return {
        type: actionTypes.ADD_PRODUCT_SUCCESS,
    };
};

export const addProductFail = (error) => {
    return {
        type: actionTypes.ADD_PRODUCT_FAIL,
        error: error
    };
};
export const addProductComplete = () => {
    return {
        type: actionTypes.ADD_PRODUCT_COMPLETE,
    };
};


export const addProduct = (product) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addProductStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/product/add", product,{headers})
                .then(response => {
                    dispatch(addProductSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addProductFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(addProductFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getProductsStart = () => {
    return {
        type: actionTypes.GET_PRODUCTS_START
    };
};

export const getProductsSuccess = (products) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        products
    };
};

export const getProductsFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCTS_FAIL,
        error: error
    };
};

export const getProducts = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getProductsStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/product/all",{headers})
                .then(response => {
                    const {products} = response.data;
                    console.log(products);
                    dispatch(getProductsSuccess(products));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getProductsFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getProductsFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getProductDetailStart = () => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_START
    };
};

export const getProductDetailSuccess = (product,taxes,manufacturers,brands,units) => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
        product,
        taxes,
        manufacturers,
        brands,
        units
    };
};

export const getProductDetailFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
        error: error
    };
};

export const getProductDetail = (id) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getProductDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/product/find?productID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {product,taxes,manufacturers,brands,units} = response.data;
                    dispatch(getProductDetailSuccess(product,taxes,manufacturers,brands,units));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getProductDetailFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getProductDetailFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateProductStart = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_START
    };
};

export const updateProductSuccess = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    };
};

export const updateProductFail = (error) => {
    return {
        type: actionTypes.UPDATE_PRODUCT_FAIL,
        error: error
    };
};

export const updateProductComplete = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_COMPLETE,
    };
};


export const updateProduct = (product) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updateProductStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/product/modify",product,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateProductSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateProductFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateProductFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteProductStart = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_START
    };
};

export const deleteProductSuccess = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_SUCCESS,
    };
};

export const deleteProductFail = (error) => {
    return {
        type: actionTypes.DELETE_PRODUCT_FAIL,
        error: error
    };
};

export const deleteProductComplete = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_COMPLETE,
    };
};


export const deleteProduct = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deleteProductStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/product/remove?productID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteProductSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteProductFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteProductFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
