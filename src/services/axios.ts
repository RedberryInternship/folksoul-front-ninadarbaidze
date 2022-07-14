import axios from 'axios';

export const FolkSoulClient = axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}/`,
  timeout: 1000,
});
