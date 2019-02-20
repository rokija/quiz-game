import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div>
                    <h3 className="Header__title">QUIZ GAME</h3>
                </div>
                <div className="Header__links">
                    <NavLink className="Header__link" activeClassName="active" exact to="/"  >QUIZZES</NavLink>
                    <NavLink className="Header__link" activeClassName="active" exact to="/results" >RESULTS</NavLink>
                    <NavLink className="Header__link" activeClassName="active" exact to="/LogIn">LOG OUTS</NavLink>
                </div>
            </div>
        )
    }
}
export default Header;