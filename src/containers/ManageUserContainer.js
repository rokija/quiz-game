import React, { Component } from 'react'
import UserEdit from '../components/UserEdit/UserEdit';


const user =
{
  username: "Kostya",
  name: "Konstantins",
  surname: "luka",
  email: "k@k.com",
  dateOfBirth: "11",
  level: "admin",
}

export class ManageUserContainer extends Component {
  render() {
    return (
      <div>
        <UserEdit user={user} />
      </div>
    )
  }
}

export default ManageUserContainer
