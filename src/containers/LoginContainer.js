import React, { Component } from 'react';
import Login from '../components/Login/Login';

export class LoginContainer extends Component {
  onLogin = (email, password) => {
    if (!email || !password) {
      return alert('Wrong password or Email');
    };
    // add functionality from Redux
    this.props.history.push("/")
  };
  render() {
    return <Login onLogin={this.onLogin} />

  }
}

export default LoginContainer
