import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-806b4/us-central1/api' // the API URL (cloud function)
});

export default instance;