import axios from 'axios';

export const ApiService = axios.create(
    {
        baseURL: "https://app.inventroo.com/inventroo_backend/api",
        headers: {
            'contentType': 'application/json',
            //'Authorization': `Bearer ${token}`
        }
    }
)

// export const setAuthToken = () => {
//     const token = getToken('x-token');
//     console.log(token);
//     if (token) {
//         ApiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {

//         delete ApiService.defaults.headers.common['Authorization'];
//     }
// }