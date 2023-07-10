import axios from "axios";

const API_URL = 'http://localhost:8081';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer your_token_here`
  }
});

export const get = (endpoint) => {
  const url = `/${endpoint}`;

  return axiosInstance.get(url)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
}

export const post = (endpoint, formData) => {
  const url = `/${endpoint}`;

  return axiosInstance.post(url, data)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
}

export const put = (endpoint, data) => {
  const url = `/${endpoint}`;

  return axiosInstance.put(url, data)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
}

export const remove = (endpoint) => {
  const url = `/${endpoint}`;

  return axiosInstance.delete(url)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
}
