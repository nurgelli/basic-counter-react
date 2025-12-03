import React, { Component } from 'react';

const NavBar = ({totalCounter}) => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{' '}
            <span
              style={{ color: 'white', background: 'black' }}
              className="badge badge-pill badge-secondary"
            >
              {totalCounter}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
