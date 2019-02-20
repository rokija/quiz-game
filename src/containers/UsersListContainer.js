import React, { Component } from "react";
import UserList from "../components/UserList/UserList";
import { Spinner } from "reactstrap";


export class UsersListContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          username: "Maria",
          email: "Email",
          name: "Name",
          surname: "Surname",
          dateOfBirth: "dateOfBirth",
          level: "Level",
          id: "qatcqtngqyu"
        },
        {
          username: "Korina",
          email: "Email1",
          name: "Name1",
          surname: "Surname1",
          dateOfBirth: "dateOfBirth1",
          level: "Level1",
          id: "qatcqtngqyu1"
        },
        {
          username: "Sobata",
          email: "Email2",
          name: "Name2",
          surname: "Surname2",
          dateOfBirth: "dateOfBirth2",
          level: "Level2",
          id: "qatcqtngqyu2"
        },
        {
          username: "Zuma",
          email: "Email2",
          name: "Name2",
          surname: "Surname2",
          dateOfBirth: "dateOfBirth2",
          level: "Level2",
          id: "qatcqtngqyu2"
        },
        {
          username: "Kroka",
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
// Enable when redux is created
//   componentDidMount(){
//     this.props.getUsers();
//   }

  render() {
    const { users } = this.state; 
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

export default UsersListContainer;
