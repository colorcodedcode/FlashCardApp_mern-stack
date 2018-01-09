import React from 'react';
import { Link } from 'react-router-dom';

const Header = props =>
  <header role="heading">
    <h1>Flash Cards</h1>
      {
        props.auth 
        ? <nav>
            <Link to="/">Cards</Link>
            <a href="/" onClick={props.handleLogout}>Logout</a>
          </nav>
        : <nav>
            Please log in below
          </nav>
      }
  </header>

export default Header;
