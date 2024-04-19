import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function Login({setFormComponent}) {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleCreateAccountClick = () => {
    // setFormComponent(1); // Update this to the index for the CreateAccount component
    navigate ('/CreateAccount');
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (username === dummyEmail && password === dummyPassword) {
  //       // Authentication successful
  //       console.log('Login successful!');
  //       // Here you can perform validation, authentication, etc.
  //       console.log('Username:', username);
  //       console.log('Password:', password);
  //       // Reset form fields after successful login
  //       setUsername('');
  //       setPassword('');
  //       toast.success("Login Successful!");

  //     } else {
  //       // Authentication failed
  //       console.log('Invalid email or password. Please try again.');
  //       // Clear password field after unsuccessful login attempt
  //       setPassword('');
        
  //       toast.error("Invalid email or password. Please try again.");
  //     }
    


  //  // Dummy email and password for testing
  //  const dummyEmail = 'test@example.com';
  //  const dummyPassword = '@Test123456';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password: password })
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        sessionStorage.setItem('authToken', data.token); // Save token to session storage
        // Redirect to LandUseForm or whatever the first form component is
        setFormComponent(2); // Assuming 2 is the index for LandUseForm
      } else {
        toast.error(data.message);
        setPassword(''); // Clear password field
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error("Login failed. Please try again.");
  }

  

};

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
       
        <p>Don't have an account? <button onClick={handleCreateAccountClick} className="link-button">Create one</button></p>
        

        
        <br></br>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;