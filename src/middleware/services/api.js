import axios from "axios";

export const API_URL = 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer your_token_here`,
  }
});

const axiosBlog = axios.create({
    baseURL: API_URL
})

export const auth = (endpoint, formData) => {
    const url = `/${endpoint}`;
  
    return axiosBlog.post(url, formData)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      });
  }

export const get = (endpoint) => {
  const url = `/${endpoint}`;

  return axiosBlog.get(url)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
}

export const post = (endpoint, formData) => {
  const url = `/${endpoint}`;

  return axiosInstance.post(url, formData)
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
