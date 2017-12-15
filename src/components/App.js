import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// App Components
import Header from './Header';
import TestPage from './TestPage';
import LoginPage from './LoginPage'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />    
      <Route exact path="/" component={TestPage} />
      <Route path="/login" component={LoginPage} />
    </div>
  </BrowserRouter>
);

export default App;
