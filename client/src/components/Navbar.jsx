import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/">
        <span role="img" aria-label="pen">
          ✍️
        </span>{' '}
        MERN Blog
      </Link>
      <nav className="navbar__links">
        <NavLink to="/" end>
          Posts
        </NavLink>
        <NavLink to="/create">Write</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

