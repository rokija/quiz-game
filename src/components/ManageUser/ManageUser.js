import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./ManageUser.css";

class ManageUser extends Component {
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
    const { email, password, username, name, surname, dateOfBirth, passwordVerification } = this.state;
    const matches = (password === passwordVerification)
    const user = {
      name,
      username,
      surname,
      password,
      email,
      dateOfBirth,
    }

    matches ? this.props.onRegister(user) : console.log("PASSWORD DIDN'T MATCH");
  }

  render() {
    const { email, password, username, name, surname, dateOfBirth, passwordVerification } = this.state;

    const { userId } = this.props

    return (

      < div className="ManageUser" >
        <div className="ManageUser__content">
          <form onSubmit={this.submitData} >
            {!userId ? <h2>Registration</h2> : <h2>Change data</h2>}
            <div className="form-group">
              <label>Please enter your username</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="text"
                name="username"
                value={username || (this.props.user && this.props.user.username)}
                disabled={userId ? true : false}
              />
            </div>

            <div className="form-group">
              <label>Please enter your email</label>
              <input
                className="form-control"
                onChange={this.onInputChange}
                value={email || (this.props.user && this.props.user.email)}
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
                maxLength="12"
                required
                value={password || (this.props.user && this.props.user.password)}
              />
            </div>
            <div className="form-group">
              <label>Please repeat the password</label>
              <input
                className="form-control"
                type="password"
                maxLength="12"
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
                value={name || (this.props.user && this.props.user.name)}
              />
            </div>
            <div className="form-group">
              <label>Please enter your surname</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="text"
                name="surname"
                value={surname || (this.props.user && this.props.user.surname)}
              />
              <div className="form-group">
                <label>Please enter your birth date</label>
                <input
                  onChange={this.onInputChange}
                  className="form-control"
                  type="date"
                  name="dateOfBirth"
                  value={dateOfBirth || (this.props.user && this.props.user.dateOfBirth)}
                />
              </div>
            </div>
            <Button type="submit"
              color="dark"
            >
              {userId ? "EDIT" : "Register"}
            </Button>
          </form>
          <div className="ManageUser__content__link">
            <Link to="/login">Already registered?</Link>
          </div>
        </div>
      </div >
    );
  }
}

export default ManageUser;
