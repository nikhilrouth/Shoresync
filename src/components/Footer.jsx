import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <a href="https://www.vims.edu/ccrm/" target="_blank">
        Center for Coastal Resources Management (CCRM)</a>
        <div className="separator"></div>
        <a href="https://www.vt.edu" target="_blank">
        Virginia Tech</a>
        <div className="separator"></div>
        <a href="https://www.vims.edu/" target="_blank">
        The Virginia Institute of Marine Science (VIMS)</a>
      </div>
    </div>
  );
};

export default Footer;
