import React from 'react';
import './Header.css';

const Header = () => {


  const redirectPage = (props) => {
    sessionStorage.setItem('formComponent', 0);
    props.setFormComponent(0);

  }

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
      </div>
      
               
    </div>
    </div>
      );
};

export default Header;
