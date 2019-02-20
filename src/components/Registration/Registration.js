import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Registration.css";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      name: "",
      surname: "",
      dateOfBirth: "",
      passwordVerification: "",
      message: "",
    };

  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitData = (event) => {
    event.preventDefault();
    const { password, passwordVerification } = this.state;
    const matches = (password === passwordVerification)
    matches ? console.log("MATCHED") : console.log("NO MATCH");
  }

  render() {
    const { email, password, username, name, surname, dateOfBirth, passwordVerification } = this.state;
    return (
      <div className="Register">
        <div className="Register__content">
          <h2>Registration</h2>
          {email}
          <form onSubmit={this.submitData} >
            <div className="form-group">
              <label>Please enter your username</label>
              <input

                onChange={this.onInputChange}
                className="form-control"
                type="text"
                name="username"
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Please enter your email</label>
              <input
                className="form-control"
                type="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label>Please enter your password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={this.onInputChange}
                maxlength="12"
                required
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Please repeat the password</label>
              <input
                className="form-control"
                type="password"
                maxlength="12"
                required
                name="passwordVerification"
                onChange={this.onInputChange}
                value={passwordVerification}
              />
            </div>
            <div className="form-group">
              <label>Please enter your name</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="text"
                name="name"
                value={name}
              />
            </div>
            <div className="form-group">
              <label>Please enter your surname</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="text"
                name="surname"
                value={surname}
              />
              <div className="form-group">
                <label>Please enter your birth date</label>
                <input
                  onChange={this.onInputChange}
                  className="form-control"
                  type="date"
                  name="dateOfBirth"
                  value={dateOfBirth}
                />
              </div>
            </div>
            <Button type="submit"

              color="dark"
            >
              Register
            </Button>
          </form>
          <div className="Register__content__link">
            <Link to="/login">Already registered?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
