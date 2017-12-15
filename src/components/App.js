import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// App Components
import Header from './Header';
import TestPage from './TestPage';
import LoginPage from './LoginPage'

class App extends React.Component {
  constructor() {
    super()
    
    this.state = ({
      loggedIn: false
    })
  }
  
  
  componentWillMount() {
    const token = localStorage.getItem('chip');
    if(token) {
      this.setState({ loggedIn: true })
    }
  }

  render() {
    return (
      <BrowserRouter>
        {
          this.state.loggedIn
          ? <div>
              <Header auth={this.state.loggedIn} />
              <Route exact path="/" component={TestPage} />
            </div>

          : <div>
              <Header auth={this.state.loggedIn}/>
              <Redirect to="/login" push />
              <Route exact path="/login" component={LoginPage} />
            </div>
        }
      </BrowserRouter>
    )
  }
};

export default App;
