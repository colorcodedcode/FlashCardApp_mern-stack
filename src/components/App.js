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
    const headers = new Headers()
    headers.append('auth', localStorage.getItem('chip'))

    fetch('/verify', { headers: headers })
      .then(res => {
        if (res.status === 200) {
          this.setState({ loggedIn: true })
        } 
      })
  }

  handleLogout() {
    localStorage.clear()
  }

  componentWillMount() {
    this.checkAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header auth={this.state.loggedIn} handleLogout={this.handleLogout.bind(this)}/>
          {
            this.state.loggedIn
            ? <div>
                <Redirect to='/' />
                <Route exact path="/" component={TestPage} />
              </div>
            : <div>
                <Redirect to='/login' />
                <Route path="/login" render={() => <LoginPage checkAuth={this.checkAuth.bind(this)} />} />
              </div>
          }
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
