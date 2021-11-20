import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NYT_API,
    params: {
        'api-key': process.env.NYT_API_KEY
    }
})

export default axiosInstance