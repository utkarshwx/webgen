import axios from 'axios';
const BASE_URL = import.meta.env.VITE_URL||'http://localhost:5000';
//const BASE_URL = 'http://localhost:8080/';
export default axios.create({
    baseURL: BASE_URL,
    headers:{
        "Access-Control-Allow-Origin": true,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});