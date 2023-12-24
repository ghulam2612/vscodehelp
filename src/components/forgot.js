import React, { useState } from 'react';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleForgotPassword = () => {
    setMessage(`Password reset instructions sent to ${email}`);
  };
  return (
    <div>
      <h2>Forgot Password</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br/>
        <button type="button" onClick={handleForgotPassword}>
          Reset Password
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default ForgotPassword;
