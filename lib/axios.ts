import axios from 'axios';
import urlJoin from 'url-join';
// import { toast } from 'react-toastify';

export const Api = axios.create({
    baseURL: urlJoin(process.env.NEXT_PUBLIC_BASE_URL as string, 'api'),
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
});

Api.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

Api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error?.response?.status === 401) {
            // location.replace('/login');
        } else if (error?.response?.status === 422) {
            // const _errors = error.response.data.errors;
            // let _msgs = [];
            // for (const key in _errors) {
            //     if (_errors.hasOwnProperty.call(_errors, key)) {
            //         const element = _errors[key];
            //         _msgs = element.join(', ');
            //     }
            // }
        }
        return Promise.reject(error);
    }
);

