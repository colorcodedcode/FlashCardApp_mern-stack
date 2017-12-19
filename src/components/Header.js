import React from 'react';
import { Link } from 'react-router-dom';

const Header = props =>
  <header role="heading">
    <h1>Flash Cards</h1>
      {
        props.auth 
        ? <nav>
            <Link to="/">Cards</Link>
            <Link to="/logout">Logout</Link>
          </nav>
        : <nav>
            Please log in below
          </nav>
      }
  </header>

export default Header;
