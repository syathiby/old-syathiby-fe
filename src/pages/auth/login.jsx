import React, { useState } from 'react';
import { API_URL } from '../../middleware/services/api';
import { useNavigate } from 'react-router-dom';
import { handleSignIn } from '../../middleware/auth/authApi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClickSignIn = (e) => {
    e.preventDefault();
    handleSignIn(username, password, (handleSignInResult) => {
      if (handleSignInResult === 'ok') {
        navigate('/admin');
      } else {
        window.location.reload();
      }
    });
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-green-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src={`${API_URL}/upload/auth/Mahad1.jpg`} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-green-500">
            Ma'had Tahfizh Al-Imam Asy-Syathiby
          </h1>

          <hr className="my-6 border-gray-300 w-full" />

          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

          <form className="mt-6">
            <div>
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="off"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-green-500 hover:bg-green-400 focus:bg-green-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              onClick={handleClickSignIn}
            >
              Log In
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />
        </div>
      </div>
    </section>
  );
};

export default Login;
