import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h2>Page not found</h2>
    <p>The page you are looking for does not exist.</p>
    <Link className="btn-primary" to="/">
      Go back home
    </Link>
  </div>
);

export default NotFound;

