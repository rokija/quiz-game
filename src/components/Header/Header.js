import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './Header.css';



class Header extends Component {
    // construcotr(){
    //     super();
    //     this.state={
    //         disabled:false,
    //     };
    // };

    // toggleButton = () => {
    //     this.setState({
    //         disabled:!this.state.disabled
    //     })
    // }
    // change = (e) =>{
    //     if(path?? = currnet path){
    //     e.target.name: !disabled.value;
    //     }
    // }

  render() {
    return (
      <div className="Header container">
        <div className="Header__content row">
            <h3 className="Header__title" >Brand Name</h3>
            <div className="Header__links">
                <NavLink to="/"  activeClassName="selected" >Quizzes</NavLink>
                <NavLink to="/results" >Results</NavLink>
                <NavLink to="/LogOut">Log Out</NavLink>
            </div>
        </div>
      </div>
    )
  }
}
 export default Header;
