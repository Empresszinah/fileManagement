import React, { useState } from 'react';
import { LoginUser } from '../../services/authApi/LoginApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../redux/authSlice';
import "./LoginPage.css"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    console.log(formData);
    try {
      const response = await LoginUser({formData});
      const token = response?.data?.token;
      const user = response?.data?.user;
        console.log(response);
      dispatch(setToken(token));
      dispatch(setUser(user));

      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
    setPassword('');
    setEmail('');
  };
  

  return (
    <div className="center-container">
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
