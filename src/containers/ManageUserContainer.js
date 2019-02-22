import React, { Component } from 'react';
import { connect } from "react-redux";
import ManageUser from "../components/ManageUser/ManageUser";
import { Redirect } from "react-router-dom";
import { register, getUsers } from "../redux/actions/userActions";
import { Spinner } from "reactstrap"

export class ManageUserContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onRegister = (user) => {
    const { username, email, password, name, surname, dateOfBirth } = user;

    if (!username || !email || !password || !name || !surname || !dateOfBirth) {
      return;
    }
    this.props.register(user);
  };

  render() {
    const { users, isRegistered, match: { params: { userId } } } = this.props;
    console.log(users)

    if (!users) {
      return (
        <div>
          <Spinner color="red" />
          loading...
        </div>
      );
    }

    const currentUser = users.find(user => user._id === userId)
    console.log(currentUser)

    return isRegistered ? (
      <Redirect to="/login" />
    ) : (
        <ManageUser user={currentUser} onRegister={this.onRegister} />
      );
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.registerReducer.isRegistered,
    users: state.getUsersReducer.users
  };
};

const mapDispatchToProps = {
  register,
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUserContainer);
