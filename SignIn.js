import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setAuth }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Basic validation (you can add more complex validation)
    if (username.length < 3) {
      setError('Username must be at least 3 characters long.');
      return;
    }

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
        setUsername('');
        setPassword('');
        


      if (response.ok) {
        const data = await response.json();
        console.log('Sign-in successful:', data);
        setAuth(true);
        navigate('/');
      } else {
        const data = await response.json();
        setError(data.message || 'Sign-in failed.');
      }
    } catch (err) {
      console.error('Sign-in error:', err);
      setError('Network error occurred. Please try again later.');

    }

  };

  return (
    <div>
      <h2>Sign In</h2>
      <div className='sign-in-container'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            className='sign-input'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            className='sign-input'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='sign-button'>Sign In</button>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
