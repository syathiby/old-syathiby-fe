import axios from "axios";
import Swal from "sweetalert2";

export const API_URL = 'https://api.syathiby.com';

const axiosInstance = () => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        Swal.fire({
          icon: 'error',
          text: 'You Session Has Been Expired.',
          showConfirmButton: false,
          timer: 3000
        }).then(() => {
          window.location.reload();   
          localStorage.clear()
        })
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const get = (endpoint) => {
  const url = `/${endpoint}`;

  return axiosInstance().get(url)
    .then(response => response.data)
    .catch(error => {
      throw new Error("GET request failed: " + error.message);
    });
}

export const post = (endpoint, formdata) => {
  const url = `/${endpoint}`;

  return axiosInstance().post(url, formdata)
    .then(response => response.data)
    .catch(error => {
      throw new Error("POST request failed: " + error.message);
    });
}

export const put = (endpoint, data) => {
  const url = `/${endpoint}`;

  return axiosInstance().put(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.data)
    .catch(error => {
      throw new Error("PUT request failed: " + error.message);
    });
}

export const remove = (endpoint) => {
  const url = `/${endpoint}`;

  return axiosInstance().delete(url)
    .then(response => response.data)
    .catch(error => {
      throw new Error("DELETE request failed: " + error.message);
    });
}