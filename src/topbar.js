import React from 'react';
import './style/topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">Data backend</div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;