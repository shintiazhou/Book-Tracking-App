import axios from 'axios';

const axiosInstance = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_NYT_API,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        params: {
            'api-key': process.env.REACT_APP_NYT_API_KEY,
        },
    });
};

export default axiosInstance