import Axios from 'axios';

export const baseurl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getToken = async () => {
  try {
    const authData = localStorage.getItem('finance-management');
    const parsedData = JSON.parse(authData);
    return parsedData ? parsedData.token : null;  // Check if parsedData is not null
  } catch (err) {
    return null;
  }
};

export const axiosInstance = Axios.create({
  baseURL: baseurl,
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const token = await getToken();
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  } catch (error) {
    throw error;
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      localStorage.removeItem('finance-management');
      // window.location.replace('/login');
    }
    throw error;
  },
);
export const axios = axiosInstance
export default axiosInstance;
