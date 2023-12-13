import React from 'react';
import './style/topbar.css';

const Topbar = ({ onSkýrslaClick }) => {
  return (
    <div className="topbar">
      <div className="logo">Data backend</div>
      <div className="menu">
        <ul>
          <li onClick={onSkýrslaClick}>Skýrsla</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;