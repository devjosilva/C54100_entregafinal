// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Logo</Link>
      <Link to="/category/category1">Category 1</Link>
      <Link to="/category/category2">Category 2</Link>
      <Link to="/category/category3">Category 3</Link>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
