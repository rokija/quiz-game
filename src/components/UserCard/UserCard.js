import React, { Component } from "react";
import "./UserCard.css";
import { Link } from "react-router-dom";

class UserCard extends Component {
  render() {
    const { username, email, level, id } = this.props;    //TRY!!!!!
    // const { onEdit } = this.props; //TRY!!!!!

    return (
      <div className="UserCard">
        <div className="UserCard__head">
          <div className="UserCard__username">{username}</div>
          <Link to={`/users/${id}`}>
            <button className="UserCard__edit-button btn btn-secondary"
            // // onClick={e => {
            // //   onEdit(this.state.username, this.state.password, this.state.name,
            // //     e);  //TRY!!!!
            // }}




            >
              Edit
            </button>
          </Link>
        </div>
        <ul className="UserCard__content">
          <li className="UserCard__content__email">Email: {email}</li>
          <li className="UserCard__content__level">Level: {level}</li>
          <li className="UserCard__content__id">Id: {id}</li>
        </ul>
      </div >
    );
  }
}

export default UserCard;
