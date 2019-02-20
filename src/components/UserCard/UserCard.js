import React, { Component } from "react";
import "./UserCard.css";

class UserCard extends Component {
  render() {
    const { username, email, level, id, goToUserId } = this.props;

    return (
      <div className="UserCard">
          <div className="UserCard__head">
            <div className="UserCard__username">{username}</div>
            <button className="UserCard__edit-button btn btn-secondary"
              onClick={goToUserId}> Edit</button>
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
