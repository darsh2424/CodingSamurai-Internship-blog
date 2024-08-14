import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`fixed-bottom text-center py-3 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}
      style={{ boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="container">
        <span>&copy; 2024 Darsh Parikh. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
