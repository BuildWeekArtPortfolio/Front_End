import axios from 'axios';

export const AxiosWithAuth = () => {

  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: ("https://dog.ceo/api/breeds/image/random"),
    headers: {
      Authorization: token
    }
  });
};