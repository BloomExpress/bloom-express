import axios from "axios";

const axiosApiInstance = axios.create();

//define our settings for our axios instance
axiosApiInstance.defaults.baseURL = import.meta.env.VITE_BASE_URL; //location of our backend server
axiosApiInstance.defaults.withCredentials = false;

export default axiosApiInstance;
