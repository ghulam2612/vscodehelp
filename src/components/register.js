
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Registration = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');

  const handleRegistration = () => {
    // Implement logic to handle user registration
    // For simplicity, just displaying a message in this example
    setMessage('Registration successful!');
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form>
        <label>
          User Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="text"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
      <div className="already-registered">
        <p>Already registered? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Registration;
