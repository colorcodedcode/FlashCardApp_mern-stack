import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// App Components
import Header from './Header';
import TestPage from './TestPage';
import LoginPage from './LoginPage'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = ({
      loggedIn: false
    })
  }

  checkAuth() {
    if(localStorage.getItem('chip')) {
      this.setState({ loggedIn: true })
    }
  }

  componentWillMount() {
    this.checkAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {
            this.state.loggedIn
            ? null
            : <Redirect to='/login' />
          }
          <Header auth={this.state.loggedIn} />

          <Route exact path="/" component={TestPage} />
          <Route path="/login" render={() => <LoginPage checkAuth={this.checkAuth.bind(this)} />} />
          <Route path="/logout" component={LoginPage} />

        </div>
      </BrowserRouter>
    )
  }
};

export default App;
