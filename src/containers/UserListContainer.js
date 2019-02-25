import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/userActions";
import UserList from "../components/UserList/UserList";
import { Spinner } from "reactstrap";

export class UserListContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    if (!users) {
      return (
        <div>
          <Spinner color="warning" />
          loading
        </div>
      );
    }

    return <UserList users={users} />;
  }
}
const mapStateToProps = state => {
  return {
    users: state.getUsersReducer.users
  };
};

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);
