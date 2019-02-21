import React, { Component } from "react";
import UserCard from "../UserCard/UserCard";
git
class UserList extends Component {
  render() {
    return (
      <div className="UserList">
        <h2> Users</h2>
        {this.props.users &&
          this.props.users.map((user, index) => (
            <UserCard
              className="UserCard__user"
              key={index}
              username={user.username}
              email={user.email}
              level={user.level}
              id={user.id}
            />
          ))}
      </div>
    );
  }
}

export default UserList;
