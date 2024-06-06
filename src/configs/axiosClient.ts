import axios from "axios";

const axiosClient  = axios.create({
  timeout: 200000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: import.meta.env.VITE_SERVER_URL
})

export default axiosClient;