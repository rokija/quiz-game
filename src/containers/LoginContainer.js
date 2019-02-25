import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login/Login";
import { login } from "../redux/actions/userActions";

class LoginContainer extends Component {
  onLogin = (username, password, e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    this.props
      .login(username, password)
      .then(() => {
        this.props.history.push("/quizzes");
      })
      .catch(e => {
        console.error(e);
      });
  };

  render() {
    const { isLoggedIn, errorMessage } = this.props;
    return (
      <Login
        onLogin={this.onLogin}
        errorMessage={errorMessage}
        isLoggedIn={isLoggedIn}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    errorMessage: state.loginReducer.errorMessage
  };
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
