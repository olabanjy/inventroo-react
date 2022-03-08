import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addBrandsStart = () => {
    return {
        type: actionTypes.ADD_BRANDS_START
    };
};

export const addBrandsSuccess = () => {
    return {
        type: actionTypes.ADD_BRANDS_SUCCESS,
    };
};

export const addBrandsFail = (error) => {
    return {
        type: actionTypes.ADD_BRANDS_FAIL,
        error: error
    };
};
export const addBrandsComplete = () => {
    return {
        type: actionTypes.ADD_BRANDS_COMPLETE,
    };
};


export const addBrands = (params,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(addBrandsStart());
        try {
            ApiService.post("/brand/add", { ...params},{headers})
                .then(response => {
                    dispatch(addBrandsSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addBrandsFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(addBrandsFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getBrandsStart = () => {
    return {
        type: actionTypes.GET_BRANDS_START
    };
};

export const getBrandsSuccess = (manufacturers,brands) => {
    return {
        type: actionTypes.GET_BRANDS_SUCCESS,
        manufacturers,
        brands
    };
};

export const getBrandsFail = (error) => {
    return {
        type: actionTypes.GET_BRANDS_FAIL,
        error: error
    };
};

export const getBrands = (token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(getBrandsStart());
        try {
            ApiService.get("/brand/all",{headers})
                .then(response => {
                    const {manufacturers,brands} = response.data;
                    dispatch(getBrandsSuccess(manufacturers,brands));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getBrandsFail(message));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getBrandsFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const getBrandDetailStart = () => {
    return {
        type: actionTypes.GET_BRAND_DETAIL_START
    };
};

export const getBrandDetailSuccess = (brand) => {
    return {
        type: actionTypes.GET_BRAND_DETAIL_SUCCESS,
        brand,
    };
};

export const getBrandDetailFail = (error) => {
    return {
        type: actionTypes.GET_BRAND_DETAIL_FAIL,
        error: error
    };
};

export const getBrandDetail = (id,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(getBrandDetailStart());
        try {
            ApiService.get(`/brand/find?brandID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {brand} = response.data;
                    dispatch(getBrandDetailSuccess(brand));
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getBrandDetailFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(getBrandDetailFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateBrandStart = () => {
    return {
        type: actionTypes.UPDATE_BRAND_START
    };
};

export const updateBrandSuccess = () => {
    return {
        type: actionTypes.UPDATE_BRAND_SUCCESS,
    };
};

export const updateBrandFail = (error) => {
    return {
        type: actionTypes.UPDATE_BRAND_FAIL,
        error: error
    };
};

export const updateBrandComplete = () => {
    return {
        type: actionTypes.UPDATE_BRAND_COMPLETE,
    };
};


export const updateBrand = (params,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(updateBrandStart());
        try {
            console.log({params});
            ApiService.post("/brand/modify",{...params},{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateBrandSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateBrandFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateBrandFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteBrandStart = () => {
    return {
        type: actionTypes.DELETE_BRAND_START
    };
};

export const deleteBrandSuccess = () => {
    return {
        type: actionTypes.DELETE_BRAND_SUCCESS,
    };
};

export const deleteBrandFail = (error) => {
    return {
        type: actionTypes.DELETE_BRAND_FAIL,
        error: error
    };
};

export const deleteBrandComplete = () => {
    return {
        type: actionTypes.DELETE_BRAND_COMPLETE,
    };
};


export const deleteBrand = (id,token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }
    return (dispatch) => {
        dispatch(deleteBrandStart());
        try {
            ApiService.get(`/brand/remove?brandID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteBrandSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteBrandFail(ResponseMessage));
    
                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteBrandFail("Connection failure! Try Again"));
                       
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}