import axios from 'axios'

let apiClient;
if (process.env.NODE_ENV === 'production') {
  apiClient = axios.create({ baseURL: 'http://localhost:8080/api', })
} else {
  apiClient = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL, })
}

export default apiClient