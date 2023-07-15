import Swal from "sweetalert2";
import axios from "axios";
import { API_URL } from "../services/api";

export const handleSignIn = (username, password, handleSignInResult) => {
    var formdata = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);
  
    axios.post(`${API_URL}/v1/login`, formdata)
      .then((response) => {
        if (response.status === 200) {
          const { token, name, role, photo, uid } = response.data;
  
          localStorage.setItem('token', token);
          localStorage.setItem('name', name);
          localStorage.setItem('role', role);
          localStorage.setItem('photo', photo);
          localStorage.setItem('uid', uid);
  
          Swal.fire({
            title: 'Success!',
            text: 'Tunggu sebentar, Anda akan diarahkan',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            handleSignInResult('ok');
          });
        } else {
          throw new Error('Sign-in failed');
        }
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Username or Password is invalid',
          icon: 'error',
          showConfirmButton: false,
          timer: 3000,
        });
  
        console.log('error', error);
      });
  };
  


export const getToken = () => {
  return localStorage.getItem('token');
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const getNama = () => {
  return localStorage.getItem('name');
}

export const getRole = () => {
  return localStorage.getItem('role');
}

export const getPhoto = () => {
  return localStorage.getItem('photo');
}

export const logoutUser = () => {
  if (getToken()) {
    localStorage.removeItem('token');
    localStorage.removeItem('nama');
    localStorage.removeItem('role');
    localStorage.removeItem('photo');
    localStorage.removeItem('uid');

    Swal.fire({
      title: 'Success!',
      text: 'Success Logout',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Minimal Login dulu bos!',
      icon: 'error',
      showConfirmButton: false,
      timer: 3000,
    });
  }
};