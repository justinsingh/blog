import React from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarTitle">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }} >
            <span>JUSTIN SINGH</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
