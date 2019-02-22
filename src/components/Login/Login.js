import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password } = this.state;
    const { onLogin, errorMessage } = this.props;
    return (
      <div className="Login">
        <div className="Login__content">
          <h2>Login</h2>
          <div className="Login__error">{errorMessage}</div>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="username"
                name="username"
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="password"
                name="password"
                value={password}
              />
            </div>
            <div className="buttons">
              <Button
                className="Login-button"
                onClick={e => {
                  onLogin(this.state.username, this.state.password, e);
                }}
                color="dark"
              >
                Login
              </Button>

              <Link to="/register">
                <Button color="dark">Register</Button>
              </Link>
              <div className="isLoggedIn" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
