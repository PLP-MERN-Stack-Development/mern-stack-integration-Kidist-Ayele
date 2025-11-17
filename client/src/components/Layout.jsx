import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-shell__content">{children}</main>
    </div>
  );
};

export default Layout;

