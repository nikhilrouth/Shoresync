import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === dummyEmail && password === dummyPassword) {
        // Authentication successful
        console.log('Login successful!');
        // Here you can perform validation, authentication, etc.
        console.log('Username:', username);
        console.log('Password:', password);
        // Reset form fields after successful login
        setUsername('');
        setPassword('');
        toast.success("Login Successful!");

      } else {
        // Authentication failed
        console.log('Invalid email or password. Please try again.');
        // Clear password field after unsuccessful login attempt
        setPassword('');
        
        toast.error("Invalid email or password. Please try again.");
      }
    
   
  };


   // Dummy email and password for testing
   const dummyEmail = 'test@example.com';
   const dummyPassword = '@Test123456';

  return (
    <div className="login-container">
        <img src={"favicon.ico"} alt="Logo" />
      <form onSubmit={handleSubmit}>
      
        <div>  
        <h2>Login to ShoreSync</h2>
          <label htmlFor="username">Email Address</label>
          <br></br>
          <input
            type="email"
            id="username"
            value={username}    
            placeholder="your@example.com"
            onChange={handleUsernameChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <br></br>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter 8 character or more"
            onChange={handlePasswordChange}
            required
          />
        </div>
    
        
        <button type="submit">Log In</button>
        <br></br> 
       
        <p>Don't have an account? <a href="/">Create one</a></p>
        

        
        <br></br>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;


