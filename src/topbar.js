import React from 'react';
import './style/topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">Data backend</div>
      <div className="menu">
        <ul>
          <li href="%PUBLIC_URL%/README.md">Skýrsla</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;