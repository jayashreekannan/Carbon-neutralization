import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validationErrors = {};
    if (!username) validationErrors.username = 'Username is required';
    if (!email) validationErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) validationErrors.email = 'Invalid email format';
    if (!password) validationErrors.password = 'Password is required';
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          setMessage('Sign up successful! Please sign in.');
          navigate('/signin'); 
        } else {
          const data = await response.json();
          setMessage(data.message || 'Sign up failed!');
        }
      } catch (error) {
        console.error('Sign up error:', error);
        setMessage('An error occurred during sign up.');
      }
    }
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };
  const handleSignInClick = () =>{
    navigate("/signin")
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" 
                 value={username} 
                 onChange={(e) => setUsername(e.target.value)} 
                 style={{ margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)}
                 style={{ margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} 
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" 
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)} 
                 style={{ margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Up</button>
      </form>
       {message && <p style={{ color: message.includes('failed') ? 'red' : 'green' }}>{message}</p>}
       <p>Already have an account? <button onClick={handleSignInClick} style={{backgroundColor:"green"}}>Sign In</button></p>
    </div>
  );
};

export default SignUp;