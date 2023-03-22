import axios from 'axios';

const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

export default service;