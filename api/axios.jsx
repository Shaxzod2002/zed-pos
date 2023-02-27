import axios from 'axios';
const ZED_POS_API_URL = 'https://zedpos.pythonanywhere.com';
export const Axios = axios.create({
  baseURL: ZED_POS_API_URL,
});
