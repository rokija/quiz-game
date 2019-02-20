import React, { Component } from "react";
import UserCard from "../UserCard/UserCard";

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          username: "Username",
          email: "Email",
          name: "Name",
          surname: "Surname",
          dateOfBirth: "dateOfBirth",
          level: "Level",
          id: "qatcqtngqyu"
        },
        {
          username: "Username1",
          email: "Email1",
          name: "Name1",
          surname: "Surname1",
          dateOfBirth: "dateOfBirth1",
          level: "Level1",
          id: "qatcqtngqyu1"
        },
        {
          username: "Username2",
          email: "Email2",
          name: "Name2",
          surname: "Surname2",
          dateOfBirth: "dateOfBirth2",
          level: "Level2",
          id: "qatcqtngqyu2"
        }
      ]
    };
  }

  goToUserId = () => {
    this.props.history.push("/users/:userid");
  };

  render() {
    const { users } = this.state;
    return (
      <div className="UserList">
        <h2> Users</h2>
        {users.map((user, index) => (
          <UserCard
            className="UserCard__user"
            key={index}
            username={user.username}
            email={user.email}
            level={user.level}
            id={user.id}
            goToUserId={this.goToUserId}
          />
        ))}
      </div>
    );
  }
}

export default UserList;