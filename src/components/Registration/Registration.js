import React, { Component } from "react";
import { Button } from "reactstrap";
// import { Link } from "react-router-dom";
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
      passwordVerification: ""
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, username, name, surname, dateOfBirth, passwordVerification } = this.state;

    return (
      <div className="Register">
        <div className="Register__content">
          <h2>Registration</h2>
          {email}
          <form>
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
                onChange={this.onInputChange}
                className="form-control"
                type="email"
                name="email"
              />
            </div>

            <div className="form-group">
              <label>Please enter your password</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="password"
                name="password"
                minlength="8"
                maxlength="12"
                 required
                value={password}
              />
            </div>


{/* --------------- Need to compare if passwords match with the if statement. Dunno yet how to do that.---------------- */}


            <div className="form-group">
              <label>Please repeat the password</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="password"
                minlength="8" 
                maxlength="12"
                required
                name="passwordVerification"
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
            <Button
              onClick={() =>
                this.props.onRegister(
                  this.state.username,
                  this.state.email,
                  this.state.password
                )
              }
              color="dark"
            >
              Register
            </Button>
          </form>
          <div className="Register__content__link">
            {/* <Link to="/login">already registered? login</Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
