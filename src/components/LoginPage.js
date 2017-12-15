import React from 'react';

class LoginPage extends React.Component {
  

  render() {
    return (
        <main role="main">
            <form id="login" action="/login" method="post">
                <label>E-mail</label>
                <input type="text" name="email" />
                <label>Password</label>
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </main>
    )
  };
}

export default LoginPage;
