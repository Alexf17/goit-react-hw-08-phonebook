import axios from 'axios';

const request = (axios.defaults.baseURL =
  'https://connections-api.herokuapp.com/');

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export { request, setAuthHeader, clearAuthHeader };
