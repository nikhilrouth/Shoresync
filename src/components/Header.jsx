import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();


  const redirectPage = (props) => {
    sessionStorage.setItem('formComponent', 0);
    props.setFormComponent(0);

  }

  const handleLogout = () => {
    sessionStorage.clear(); // Clear all session storage or specific keys if needed
    // props.setFormComponent(1); // Optionally reset to the login form component index
    navigate('/login'); // Navigate to login page after logout
  };

  return (
    <div>
    <div className="header">
      <div className = "header-content">
      <h1 className= "welcome">Welcome to ShoreSync</h1>
      
      </div>

      <div className = "header-link-content">
      <a className = "link" href="/"
      onClick = {redirectPage}> 
      Home
      </a>
      <a className = "link" href="/Login"
      onClick = {handleLogout}> 
      Logout
      </a>
      </div>
      
               
    </div>
    </div>
      );
};

export default Header;
