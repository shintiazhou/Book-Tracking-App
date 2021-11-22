import axios from 'axios';

const axiosInstance = () => {
    return axios.create({
        baseURL: "https://api.nytimes.com/svc/books/v3/lists",
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        params: {
            'api-key': process.env.REACT_APP_NYT_API_KEY,
        },
    });
};

export default axiosInstance