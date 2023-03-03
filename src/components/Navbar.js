import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Dashboard</h1>
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
