import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.scss';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/c'>Content</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
