import React from 'react';

const Header = props =>
  <header role="heading">
    <h1>Flash Cards</h1>
      <nav>
        <a href="/logout">Logout</a>
        <a href="/account">Account</a>
        <a href="/stats">Stats</a>
      </nav>
  </header>

export default Header;
