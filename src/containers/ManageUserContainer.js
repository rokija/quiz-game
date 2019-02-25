import React, { Component } from 'react';
import { connect } from "react-redux";
import ManageUser from "../components/ManageUser/ManageUser";
import { Redirect } from "react-router-dom";
import { register } from "../redux/actions/userActions"

export class ManageUserContainer extends Component {
  onRegister = (user) => {
    const { username, email, password, name, surname, dateOfBirth } = user;

    if (!username || !email || !password || !name || !surname || !dateOfBirth) {
      return;
    }
    this.props.register(user);
  };

  render() {
    const isUserRegister = localStorage.getItem('jwtToken')
    const isUserEdit = this.props.match.params.userId

    const { isRegistered } = this.props;

    return isRegistered ? (
      <Redirect to="/login" />
    ) : (
        <ManageUser isUserRegister={isUserRegister} isUserEdit={isUserEdit} onRegister={this.onRegister} />
      );
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.registerReducer.isRegistered
  };
};

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUserContainer);
