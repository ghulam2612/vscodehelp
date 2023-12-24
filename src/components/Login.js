import React, { useState } from 'react';
import { GoogleLogin } from '@leecheuk/react-google-login';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (e.g., send credentials to a server)
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const responseGoogle = (response) => {
    // Handle Google login response
    console.log(response);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <br />
        <div className="google-login">
          <p>Or log in with Google:</p>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div className="forgot-password">
            <Link to="/forgot">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
