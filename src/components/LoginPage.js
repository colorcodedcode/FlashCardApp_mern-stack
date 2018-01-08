import React from 'react';
import { Redirect } from 'react-router-dom';


class LoginPage extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      doRedirect: false
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    
    fetch('/login', { 
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: this.state.email, password: this.state.password })
    })
    .then(res => res.json())
    .then(result => {
      localStorage.setItem('chip', result.token)
      this.setState({ doRedirect: true })
      this.props.checkAuth()
    })

  }

  render() {
    const doRedirect = this.state.doRedirect
    if (doRedirect) {
      return (
        <Redirect to='/' push/>
      )
    }

    return (
      <main role="main">
        <form id="login" onSubmit={this.handleSubmit.bind(this)}>
          <label>E-mail</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
          <button type="submit">Login</button>
        </form>
      </main>
    )
  };
}

export default LoginPage;
