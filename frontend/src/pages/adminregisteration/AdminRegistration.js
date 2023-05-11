import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';

function AdminRegistration(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5001/api/admin/register', {
        email,
        password
      });
      props.onRegister(response.data.admin);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar/>
    
    <div className='container'>
    <div>
       <h2 className='formHeading'>Admin Registration</h2>
      <form className="form" onSubmit={handleSubmit}>
      <div className='formField'>
        <label className='formLabel' htmlFor="email">
          Email:
          <input className="formField" type="email" value={email} onChange={handleEmailChange} />
        </label>
        </div>
        <div className='formField'>
        <label className='formLabel' htmlFor="password">
          Password:
          <input className="formField" type="password" value={password} onChange={handlePasswordChange} />
        </label></div>
        
        <div className='formField'>
        <label className='formLabel' htmlFor="password">
          Confirm Password:
          <input className="formField" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label></div>
           <button className="submitButton" type="submit">Register</button>
      </form>
    </div>
    </div>
  </div>
  );
}

export default AdminRegistration;
