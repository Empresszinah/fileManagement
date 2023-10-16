import { registerUser } from '../../services/authApi/RegisterApi'; 
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../redux/authSlice';
import './SignUp.css';




// const SignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     password: '',
//     role: 'user',
    
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Call the registerUser function to send the registration request
//     registerUser(formData);

//     navigate('/login');


//     // You can also reset the form data here if needed
//     setFormData({
//       email: '',
//       firstName: '',
//       lastName: '',
//       password: '',
//       role: 'user',
//     });
//   };

  const SignUp = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = { email, firstName, lastName, password, role };
      console.log(formData);
      try {
        const response = await registerUser({formData});
        const token = response?.data?.token;
        const user = response?.data?.user;
          console.log(response);
        dispatch(setToken(token));
        dispatch(setUser(user));
  
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
      setPassword('');
      setLastName('');
      setFirstName('');
      setEmail('');
      setRole('user');
    };

  

  return (
    <div className="center-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="firstName"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="secretary">Secretary</option>
            <option value="ceo">CEO</option>
            <option value="admin">Admin</option>
            <option value="finance">Finance</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
     </div>
  );
};

export default SignUp;

