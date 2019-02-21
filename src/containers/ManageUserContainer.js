import React, { Component } from 'react'
import ManageUser from "../components/ManageUser/ManageUser";
import { Redirect } from "react-router-dom"



const user =
{
  username: "Sunny",
  name: "SanoR",
  surname: "MarkO",
  email: "sm@sanor.com",
  dateOfBirth: "01/02/1995",
  level: "admin",
}

export class ManageUserContainer extends Component {
  render() {
    const { isUserRegister, isUserEdit } = this.props;
    console.log(isUserRegister, isUserEdit)
    return <ManageUser isUserRegister={isUserRegister} isUserEdit={isUserEdit} />

  }
}

export default ManageUserContainer;


// <div>
//   <UserEdit user={user} isRegister={isRegister}  />
// onRegister={this.onRegister}
// </div>



