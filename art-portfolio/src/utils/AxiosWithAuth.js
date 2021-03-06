import axios from 'axios';

export const AxiosWithAuth = () => {

  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: ('https://art-po-bw.herokuapp.com/'),
    headers: {
      Authorization: token
    }
  });
};