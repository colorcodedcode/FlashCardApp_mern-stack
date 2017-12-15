import React from 'react';

const Header = props =>
  <header role="heading">
    <h1>Flash Cards</h1>
      {
        props.auth 
        ? <nav>
            <a href="/">Cards</a>
            <a href="/logout">Logout</a>
          </nav>
        : <nav>
            Please log in below
          </nav>
      }
  </header>

export default Header;
