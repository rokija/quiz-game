import React, { Component } from "react";
import "./UserCard.css";
import { NavLink } from "react-router-dom";

class UserCard extends Component {
  render() {
    const { username, email, level, id } = this.props;

    return (
      <div className="UserCard">
        <div className="UserCard__head">
          <div className="UserCard__username">{username}</div>
          <NavLink to="/users/:userid">
            <button className="UserCard__edit-button btn btn-secondary">
              Edit
            </button>
          </NavLink>
        </div>
        <ul className="UserCard__content">
          <li className="UserCard__content__email">Email: {email}</li>
          <li className="UserCard__content__level">Level: {level}</li>
          <li className="UserCard__content__id">Id: {id}</li>
        </ul>
      </div>
    );
  }
}

export default UserCard;
