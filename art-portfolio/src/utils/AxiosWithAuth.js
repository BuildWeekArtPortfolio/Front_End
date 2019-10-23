import axios from 'axios';

export const AxiosWithAuth = () => {

  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: ("localhost:3200/api"),
    headers: {
      Authorization: token
    }
  });
};