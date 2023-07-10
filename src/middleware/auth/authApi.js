import { post } from "../services/api";

const handleSignIn = (username, password, handleResult) => {
    const formdata = new formData();
    formdata.append('username', username);
    formdata.append('password', password);

    post('v1/auth', formdata)
    .then(response => {
        if (response.ok) {
            return response.json
        } else {
            throw new Error('Sign in Failed')
        }
    }).then((responseJson) => {
        const { token, nama, role, photo } = responseJson

        localStorage.setItem('token', token);
        localStorage.setItem('nama', nama);
        localStorage.setItem('role', role);
        localStorage.setItem('photo', photo);

        console.log(responseJson)
    })
}

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
}