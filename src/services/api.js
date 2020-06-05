import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seja-o-heroi.herokuapp.com/',
});

export default api;
