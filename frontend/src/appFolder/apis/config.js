import axios from 'axios';

export const baseUrl = "http://localhost:3000";

const api = axios.create({
    baseURL: baseUrl,
});


export default api;