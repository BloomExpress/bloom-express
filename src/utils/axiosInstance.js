import axios from "axios";

const axiosApiInstance = axios.create();

//define our settings for our axios instance
axiosApiInstance.defaults.baseURL = "http://localhost:5000"; //location of our backend server
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;
