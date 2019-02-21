import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="Login">
        <div className="Login__content">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="email"
                name="email"
                value={email}
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
              <Button className="Login-button" color="dark">
                Login
            </Button>
              <div >
                <Link to="/register">Already registered?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
